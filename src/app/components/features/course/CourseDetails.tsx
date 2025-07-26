import React from 'react'
import CheckIcon from '../../icons/CheckIcon'
import { useTranslations } from 'next-intl';

const CourseDetails = ({ about }: { about: { title: string }[] }) => {
    const t = useTranslations();

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold text-black">{t('course_details')}</h2>

            <div className="space-y-4 border border-gray-200 rounded-md p-6">
                {
                    about.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <CheckIcon className="text-[#6294F8] shrink-0 size-6" />

                            <div className="text-base font-medium text-gray-800" dangerouslySetInnerHTML={{ __html: item.title }}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseDetails