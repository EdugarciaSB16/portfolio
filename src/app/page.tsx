import React from 'react';
import { Portfolio } from '@/utils/interface';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const page = async () => {
    const portfolio = (await import('@/dummy.json')).default;

    const { about, skills, projects, social_handles, timeline, email } =
        portfolio as unknown as Portfolio;

    return (
        <main className="relative">
            <Header social={social_handles} />
            <Hero about={about} />
            <About about={about} timeline={timeline} />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Contact
                email={email}
                social_handle={social_handles}
                about={about}
            />
        </main>
    );
};

export default page;
