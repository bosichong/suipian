const fs = require('fs');
const path = require('path');

// 假设你的 JSON 文件位于项目根目录下的 'public/images' 文件夹中
const dataFilePath = path.join(process.cwd(), 'public', 'images', 'data.json');
const publicDir = path.join(process.cwd(), 'public');

function getSortedImageData() {
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    const imagesData = JSON.parse(fileContent);

    return imagesData.map(image => {
        const { id, time, src, alt, tags, description, source, width, height } = image;

        // 检查时间字段是否存在且有效
        if (!time || !isValidDate(time)) {
            console.error(`Invalid date for image: ${id}`);
            return null;
        }

        return {
            id,
            src,
            alt,
            tags,
            description,
            source,
            width,
            height,
            time,
            url: `https://www.suipian.cc/images/${id}`,
            lastModified: new Date(time).toISOString(),
            changeFrequency: 'monthly',
            priority: 0.8,
        };
    }).filter(image => image !== null).sort((a, b) => {
        // 确保 time 字段存在且是有效的日期格式
        if (!a.time || !b.time) {
            return 0; // 或者根据你的需求处理错误
        }
        return new Date(b.time) - new Date(a.time); // 颠倒排序，最新的在前
    });
}

function isValidDate(dateStr) {
    const date = new Date(dateStr);
    return !isNaN(date.getTime());
}

function generateSitemap() {
    const allImageData = getSortedImageData();
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allImageData.map(image => `
    <url>
        <loc>${image.url}</loc>
        <lastmod>${image.lastModified}</lastmod>
        <changefreq>${image.changeFrequency}</changefreq>
        <priority>${image.priority}</priority>
    </url>`).join('')}</urlset>`;

// 保存 sitemap_images.xml
const sitemapBlogsPath = path.join(publicDir, 'sitemap_images.xml');
fs.writeFileSync(sitemapBlogsPath, xmlContent);

// 生成 sitemap.xml 索引文件
const sitemapIndexPath = path.join(publicDir, 'sitemap.xml');
const now = new Date().toISOString(); // 获取当前时间

const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap>
    <loc>https://www.suipian.cc/sitemap_images.xml</loc>
    <lastmod>${now}</lastmod>
</sitemap>
</sitemapindex>
`;
fs.writeFileSync(sitemapIndexPath, sitemapIndexContent);


console.log('Sitemap and sitemap index generated successfully!');
}

generateSitemap();
