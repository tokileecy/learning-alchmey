require('dotenv').config()

const env = {
  ALCHEMYAPI_API_URL: process.env['ALCHEMYAPI_API_URL'],
  // PRIVATE_KEY: process.env['PRIVATE_KEY'],
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: env,
  serverRuntimeConfig: env,
}

module.exports = nextConfig
