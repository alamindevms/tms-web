import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();

    const localeFromCookie = cookieStore.get('SELECTED_LANG')?.value || 'en';
    const locales = ['en', 'bn'];
    const defaultLocale = 'en';
    const locale = locales.includes(localeFromCookie) ? localeFromCookie : defaultLocale;

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});