import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageCard from '../components/ImageCard';
import Head from 'next/head'; // 导入 next/head 中的 Head 组件
import data from '../public/images/data.json';

const Home = () => {
  const [loadedImages, setLoadedImages] = useState(12); // 初始加载30张图片
  const breakpointCols = {
    default: 3,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,
  };

  const handleLoadMore = () => {
    setLoadedImages(loadedImages + 12); // 每次点击加载30张更多图片
  };

  return (

    <div className="container mx-auto px-4">
      <Head>
      <title>SuiPian - Home</title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta content="wallpaper,share,壁纸,iPhone壁纸,4K,手机壁纸,头像,ins壁纸,WeChat背景,背景," name="keywords" />
    <meta content="SuiPian | 碎片，取自时光的斑斓碎片，是一个汇聚无数精美壁纸的奇妙站点。这里的每一张壁纸都如岁月长河中遗落的珍宝碎片，承载着生活的多彩与学习的宁静。它们或是自然的壮丽瞬间，让你仿佛置身于广袤的山水之间；或是艺术的灵动笔触，激发你对美的无限遐想；又或是温馨的生活场景，勾起你内心深处的柔软回忆。在 “碎片” 壁纸站，你可以找到那些能点亮生活、舒缓心灵的图像碎片，为你的屏幕增添一抹独特的风景。" name="description" />
    <meta content="J.sky" name="author" />
    </Head>
        <Masonry
          breakpointCols={breakpointCols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.slice(0, loadedImages).map((image) => (
            <div key={image.id} className="masonry-item">
              <ImageCard key={image.id} image={image} />
            </div>
          ))}
        </Masonry>
        <div className='flex justify-center m-4'>
          {loadedImages < data.length && (
            <button onClick={handleLoadMore} className='text-gray-300 transition hover:text-orange-500 hover:animate-bounce'>点击加载更多</button>
          )}
        </div>
      </div>
  );
};

export default Home;
