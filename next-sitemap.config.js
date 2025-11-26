/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.onsoom.co.kr',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/google1c0238c23a9f43aa.html'],
};

module.exports = config;

