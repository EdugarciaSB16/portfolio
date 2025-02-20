import React from 'react';
import { Portfolio } from '@/utils/interface';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';

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
        </main>
    );
};

export default page;
