import { Checklist } from '@/src/app/types/course.types'
import Image from 'next/image'
import React from 'react'
import CourseTrailerBox from './CourseTrailerBox'

const CourseCtaCard = ({ media, cta_text, checklist }: { media: { name: string, thumbnail_url: string }[], cta_text: { name: string }, checklist: Checklist[] }) => {

    return (
        <div className="bg-white border border-gray-200 p-1 space-y-6 sticky top-0">
            <CourseTrailerBox media={media?.[0]} />

            <div className="p-4 space-y-6">
                <p className="text-2xl font-semibold text-black">৳1000</p>

                <button className="w-full text-white bg-primary hover:bg-primary-focus border-b-4 border-green-700 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center cursor-pointer">{cta_text?.name}</button>

                <div className="space-y-4">
                    {
                        checklist.map((item: Checklist, index: number) => (
                            <div key={index} className="flex items-start gap-4">
                                <Image width={20} height={20} src={item.icon} className="shrink-0 size-5" alt={item.text} />

                                <p className="text-base font-medium text-gray-800">{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseCtaCard