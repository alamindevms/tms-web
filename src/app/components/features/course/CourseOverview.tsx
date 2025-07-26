import { Feature } from '@/src/app/types/course.types'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const CourseOverview = ({ features }: { features: Feature[] }) => {
    const t = useTranslations();

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold text-black">{t('course_overview')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#111827] rounded-md p-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="shrink-0 size-10">
                            <Image
                                width={24}
                                height={24}
                                alt={feature.title}
                                loading="lazy"
                                className="w-full h-full object-contain"
                                src={feature.icon}
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.subtitle}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default CourseOverview