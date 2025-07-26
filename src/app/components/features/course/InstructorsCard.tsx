import { Instructor } from '@/src/app/types/course.types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ChevronRightIcon from '../../icons/ChevronRightIcon';

const InstructorsCard = ({ instructors }: { instructors: Instructor[] }) => {
    const t = useTranslations();

    return (
        <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold">{t('course_instructor')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md border border-gray-200">
                {
                    instructors.map((instructor, index) => (
                        <div key={index} className="flex items-center md:p-5">
                            <div className="rounded-[50%] overflow-hidden">
                                <Image
                                    width={100}
                                    height={100}
                                    alt={instructor.name}
                                    loading="lazy"
                                    className="w-24 h-24 object-cover"
                                    src={instructor.image}
                                />
                            </div>
                            <div className="flex-1 ml-4">
                                <h3 className="text-lg">
                                    <Link
                                        className="flex items-center hover:text-green"
                                        href="/instructors/munzereen-shahid"
                                    >
                                        {instructor.name}
                                        <span className="ml-2 pb-[2px]">
                                            <ChevronRightIcon />
                                        </span>
                                    </Link>
                                </h3>
                                <div className="text-sm" dangerouslySetInnerHTML={{ __html: instructor.description }}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InstructorsCard