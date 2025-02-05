/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'static.wixstatic.com',
            'assets-global.website-files.com',
            'images.app.goo.gl',
            'images.ctfassets.net',
            'dappradar.com',
            'dashboard-assets.dappradar.com',
            'icons.llama.fi',
            'cdn.jsdelivr.net',
            'raw.githubusercontent.com',
            'www.vectorlogo.zone',
            'cdn-icons-png.flaticon.com',
            'icons.llamao.fi'
        ],
        
    },
}

export default nextConfig
