/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    //   serverComponentsExternalPackages: ["mongoose"],
    },
    // Environment variables specified here are PUBLIC to the client. Use .env to keep variables private (server-side only)
    env: {
        COMPANY_NAME: 'MineMarket',
        COMPANY_LOGO_SHORT_PATH: "/assets/images/icon.png",
        COMPANY_LOGO_FULL_PATH: "/assets/images/logo.png",
    },
  
    // images:{
    //   domains: ['lh3.googleusercontent.com'],
    // },
  
    webpack(config){
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config;
    }
  }

module.exports = nextConfig
