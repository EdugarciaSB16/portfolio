'use client';

import { motion } from 'motion/react';
import { About, SocialHandle } from '../utils/interface';
import Link from 'next/link';
import { SectionHeading, TextReveal } from './ui/Typography';
import { SlideIn, Transition } from './ui/Transitions';

interface ContactProps {
    email: string;
    social_handle: SocialHandle[];
    about: About;
}
const Contact = ({ email, social_handle, about }: ContactProps) => {
    const sendEmail = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <motion.section className="relative" id="contact">
            <span className="blob size-1/2 absolute top-20 right-0 blur-[100px] -z-10" />
            <div className="p-4 md:p-8 md:px-16">
                <SectionHeading className="">
                    <SlideIn className="text-white/40">
                        Interested in talking,
                    </SlideIn>{' '}
                    <br /> <SlideIn>let’s do it.</SlideIn>
                </SectionHeading>
                <div className="grid md:grid-cols-2 gap-10 md:pt-16">
                    <div className="flex flex-col justify-around">
                        <div className="text-xl md:text-3xl font-bold md:text-left leading-snug">
                            <Transition>
                                <TextReveal>
                                    Let&apos;s connect and collaborate
                                </TextReveal>
                            </Transition>
                        </div>
                        <Transition>
                            <motion.button
                                whileHover="whileHover"
                                initial="initial"
                                className="border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden mt-4"
                                onClick={sendEmail}
                            >
                                <TextReveal className="uppercase">
                                    Contact me
                                </TextReveal>
                            </motion.button>
                        </Transition>
                    </div>

                    <div className="md:justify-self-end flex flex-col">
                        <div className="pb-4">
                            <Transition>
                                <span className="text-white/90">
                                    Get in touch
                                </span>
                            </Transition>
                            <div className="text-2xl md:text-4xl font-bold py-2">
                                <Transition>
                                    <TextReveal>{email}</TextReveal>
                                </Transition>
                            </div>
                            <Transition>
                                <div className="pb-1 text-white/80">
                                    {about.phoneNumber}
                                </div>
                            </Transition>
                            <Transition>
                                <div className="text-white/80">
                                    {about.address}
                                </div>
                            </Transition>
                        </div>

                        <div className="flex md:gap-8 gap-4 mt-auto md:pb-16">
                            {social_handle.map((social, index) =>
                                social.enabled ? (
                                    <Transition
                                        key={social._id}
                                        transition={{
                                            delay: 0.4 + index * 0.1,
                                        }}
                                    >
                                        <Link href={social.url} target="_blank">
                                            <TextReveal>
                                                {social.platform}
                                            </TextReveal>
                                        </Link>
                                    </Transition>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm">
                <Transition>
                    <div>&copy; {new Date().getFullYear()} Eduardo García</div>
                </Transition>
            </footer>
        </motion.section>
    );
};

export default Contact;
