import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.10minuteschool.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 's3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);