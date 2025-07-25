'use client';

export default function LanguageSwitcher() {
    const switchLocale = async (locale: string) => {
        document.cookie = `SELECTED_LANG=${locale}; path=/`;
        location.reload();
    };

    return (
        <div>
            <button onClick={() => switchLocale('en')}>English</button>
            <button onClick={() => switchLocale('bn')}>বাংলা</button>
        </div>
    );
}
