const { CONFIG } = require("./site.config")

module.exports = {
  basePath: '/blog_projecct',
  siteUrl: CONFIG.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
}
