import { Pointer } from '@/src/app/types/course.types'
import React from 'react'
import CheckIcon from '../../icons/CheckIcon'
import { useTranslations } from 'next-intl';

const LearningTopics = ({ pointers }: { pointers: Pointer[] }) => {
    const t = useTranslations();

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold text-black">{t('learning_topics')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 rounded-md p-6">
                {
                    pointers.map((pointer, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <CheckIcon className="text-[#6294F8] shrink-0 size-6" />

                            <p className="text-base font-medium text-gray-800">{pointer.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LearningTopics