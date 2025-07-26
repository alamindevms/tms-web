"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import PlayIcon from '../../icons/PlayIcon';

const CourseTrailerBox = ({ media }: { media: { name: string, thumbnail_url: string } }) => {
    const [playVideo, setPlayVideo] = useState(false);

    // https://youtu.be/zrlYnaZftEQ?si=nD33Pkytn3W02qdt
    const videoId = "zrlYnaZftEQ?si=t6cO_EDYGGEzTPq8"

    return (
        <div className='relative w-full h-60 overflow-hidden rounded-lg'>
            {
                playVideo ? (
                    <iframe
                        className='w-full h-full'
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <>
                        <Image
                            src={media.thumbnail_url}
                            alt={media.name}
                            fill
                            className='object-cover'
                        />

                        <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
                            <button
                                onClick={() => setPlayVideo(true)}
                                className="size-12 rounded-full border-2 border-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer"
                            >
                                <PlayIcon className="w-7 h-7 text-white" />
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CourseTrailerBox;