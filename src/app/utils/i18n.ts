export const getLocale = async () => {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();

    const localeFromCookie = cookieStore.get('SELECTED_LANG')?.value || 'en';
    const locales = ['en', 'bn'];
    const defaultLocale = 'en';
    const locale = locales.includes(localeFromCookie) ? localeFromCookie : defaultLocale;

    return locale
}