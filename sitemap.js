const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Your site's base URL
const hostname = 'https://theminipr.shop';

// The paths to all your pages. Add every page here.
const paths = [
  '/',
  '/about',
  '/contact',
  // Add other page paths here, like '/products', '/blog', etc.
];

const links = paths.map(path => ({ url: path, changefreq: 'daily', priority: 0.8 }));

const sitemapStream = new SitemapStream({ hostname });
const writeStream = fs.createWriteStream(path.resolve('./public/sitemap.xml'));

streamToPromise(sitemapStream).then(data => {
  console.log('Sitemap successfully created!');
});

sitemapStream.pipe(writeStream);
links.forEach(link => sitemapStream.write(link));
sitemapStream.end();