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
