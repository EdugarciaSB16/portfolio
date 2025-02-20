'use client';

import Link from 'next/link';

import { About } from '../utils/interface';
import { TextReveal } from './ui/Typography';
import { ArrowUpRight } from './ui/Icons';
import { SlideIn, Transition } from './ui/Transitions';
import Image from 'next/image';
import LoaderWrapper from './LoaderWrapper';

interface HeroProps {
    about: About;
}

const Hero = ({ about }: HeroProps) => {
    return (
        <section className="h-dvh w-dvw overflow-hidden relative">
            <Transition>
                <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
            </Transition>
            <LoaderWrapper>
                <div className="relative h-full w-full">
                    <div className="flex items-center justify-center flex-col h-full pb-10">
                        <Transition>
                            <Image
                                src="/avatar.png"
                                alt={about.name}
                                className="rounded-full object-cover object-top"
                                width={112}
                                height={112}
                            />
                        </Transition>
                        <div className="py-6 flex items-center flex-col">
                            <h2 className="md:text-7xl text-3xl font-bold overflow-hidden">
                                <SlideIn>Hello! I&apos;m {about.name}</SlideIn>
                            </h2>
                            <h1 className="md:text-7xl text-3xl overflow-hidden">
                                <SlideIn>{about.title}</SlideIn>
                            </h1>
                        </div>
                        <Transition
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                                {about.subTitle
                                    .split(' ')
                                    .map((word, index) => (
                                        <span key={index}>{word}</span>
                                    ))}
                            </p>
                        </Transition>
                        <Transition viewport={{ once: true }}>
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                <Link
                                    href={'#contact'}
                                    className="px-5 py-3 rounded-full border border-white/50 flex items-center gap-2 group"
                                >
                                    <TextReveal>Let&apos;s talk</TextReveal>
                                    <ArrowUpRight />
                                </Link>
                                <Link
                                    href="/Eduardo_Garcia_Resume.pdf"
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 rounded-full bg-white text-black flex items-center gap-2 group"
                                >
                                    <TextReveal>Download CV</TextReveal>
                                </Link>
                            </div>
                        </Transition>
                    </div>
                </div>
            </LoaderWrapper>
        </section>
    );
};

export default Hero;
