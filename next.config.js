const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/lab',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
