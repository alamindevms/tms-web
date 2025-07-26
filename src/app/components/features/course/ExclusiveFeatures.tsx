import React from 'react'
import CheckIcon from '../../icons/CheckIcon'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const ExclusiveFeatures = ({ explanations }: { explanations: { title: string, file_url: string, checklist: string[] }[] }) => {
    const t = useTranslations();

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold text-black">{t('exclusive_features')}</h2>

            <div className="divide-y divide-gray-200 space-y-6 border border-gray-200 rounded-md p-6">
                {

                    explanations.map((pointer, index) => (
                        <div key={index} className="[&:not(:last-child)]:pb-6">
                            <div className="flex justify-between items-start gap-10">
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-lg font-medium text-gray-800">{pointer.title}</h3>
                                    {pointer.checklist.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <CheckIcon className="text-[#6294F8] shrink-0 size-6" />
                                            <span className="text-base text-gray-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="shrink-0 max-w-[300px]">
                                    <Image
                                        width={300}
                                        height={300}
                                        alt={pointer.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                        src={pointer.file_url}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExclusiveFeatures