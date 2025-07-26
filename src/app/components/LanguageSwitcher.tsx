'use client';

import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
    const [activeLang, setActiveLang] = useState<'en' | 'bn'>('en');

    useEffect(() => {
        const langCookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('SELECTED_LANG='))
            ?.split('=')[1];
        if (langCookie === 'bn') setActiveLang('bn');
        else setActiveLang('en');
    }, []);

    const switchLocale = async (locale: 'en' | 'bn') => {
        document.cookie = `SELECTED_LANG=${locale}; path=/`;
        location.reload();
    };

    return (
        <div className="inline-flex rounded-full h-10 gap-2 divide-x divide-gray-400 p-2 shadow overflow-hidden">
            <button
                onClick={() => switchLocale('en')}
                className={`text-sm font-medium cursor-pointer hover:text-gray-900 transition-colors duration-200 pr-2 ${activeLang === 'en' ? 'text-blue-600' : 'text-gray-600'}`}
            >
                En
            </button>
            <button
                onClick={() => switchLocale('bn')}
                className={`text-sm font-medium cursor-pointer hover:text-gray-900 transition-colors duration-200 ${activeLang === 'bn' ? 'text-green-600' : 'text-gray-600'}`}
            >
                বাং
            </button>
        </div>
    );
}
