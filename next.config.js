/** @type {import('next').NextConfig} */

// GitHub Pages serves project sites from https://user.github.io/repo-name/,
// so the build needs a basePath of /repo-name — but only in that CI
// environment, never for local dev or a future custom-domain/Cloudflare deploy.
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

let basePath = ''
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
