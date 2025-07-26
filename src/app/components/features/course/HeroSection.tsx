import React from 'react'

const HeroSection = ({ title, description }: { title: string, description: string }) => {
    return (
        <section className="bg-[url('/images/hero-banner-bg.jpeg')] bg-cover bg-center py-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="text-white space-y-2">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <div className="text-base text-gray-400" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection