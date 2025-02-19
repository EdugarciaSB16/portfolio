import React from 'react';
import { Portfolio } from '@/utils/interface';
import Header from '@/components/header';

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
        </main>
    );
};

export default page;
