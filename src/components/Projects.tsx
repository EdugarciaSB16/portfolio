'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

import { SectionHeading, TextReveal } from './ui/Typography';
import { Project } from '../utils/interface';
import { ArrowUpRight } from './ui/Icons';
import { SlideIn, Transition } from './ui/Transitions';
import Image from 'next/image';
import ProjectDialog from './ProjectDialog';

interface ProjectsProps {
    projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    return (
        <section className="md:p-8 p-4 mt-10 relative" id="projects">
            <SectionHeading className="md:pl-12">
                <SlideIn className="text-white/40">Selected</SlideIn>
                <br />
                <SlideIn>Works</SlideIn>
            </SectionHeading>

            <motion.div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 relative">
                {projects.map((project, index) => (
                    <Transition
                        transition={{ delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        key={project._id}
                        layoutId={project._id}
                        onClick={() => {
                            setSelectedProject(project);
                        }}
                    >
                        <Card {...project} />
                    </Transition>
                ))}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col">
                            <ProjectDialog
                                selectedProject={selectedProject}
                                setSelectedProject={setSelectedProject}
                            />
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

export default Projects;

const Card = ({ title, image, short_description }: Project) => {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            layout
            className="relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-secondary/30 md:px-4"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
                <div className="bg-white size-8 rounded-full text-black grid place-items-center">
                    <ArrowUpRight />
                </div>
            </div>
            <div className="md:py-8 relative">
                <motion.div
                    animate={{ y: hover ? -10 : 0 }}
                    className="flex justify-between items-center max-md:hidden"
                >
                    <p className="text-sm md:text-xl font-semibold">{title}</p>
                    <button className="flex gap-2 items-center justify-center max-md:px-4">
                        <TextReveal className="max-md:text-sm">
                            Visit
                        </TextReveal>
                        <span className="bg-black text-white/80 rounded-full p-1">
                            <ArrowUpRight />
                        </span>
                    </button>
                </motion.div>
                <div className="overflow-hidden max-md:hidden">
                    <motion.p
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: hover ? -10 : 0, opacity: hover ? 1 : 0 }}
                        className="absolute text-white/50"
                    >
                        {short_description}
                    </motion.p>
                </div>
            </div>
            <Image
                src={image.url}
                width={500}
                height={500}
                alt={title}
                className="object-cover h-full w-full object-center rounded-xl md:rounded-t-3xl"
            />
        </motion.div>
    );
};
