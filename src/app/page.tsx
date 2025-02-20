import React from 'react';
import { Portfolio } from '@/utils/interface';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const page = async () => {
    const portfolio = (await import('@/dummy.json')).default;

    const {
        about,
        testimonials,
        services,
        skills,
        projects,
        social_handles,
        timeline,
        email,
    } = portfolio as Portfolio;

    return (
        <main className="relative">
            <Header social={social_handles} />
            <Hero about={about} />
            <About about={about} timeline={timeline} />
            <Skills skills={skills} />
            <Projects projects={projects} />
        </main>
    );
};

export default page;
