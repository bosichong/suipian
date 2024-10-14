// pages/tags/[tag].js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageCard from '../../components/ImageCard';
import data from '../../public/images/data.json';
import Head from 'next/head'; // 导入 next/head 中的 Head 组件

const TagPage = ({ tag, images }) => {
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
    <><Head>
      <title>SuiPian - {tag} </title>
    </Head>
    <div className="container mx-auto px-4">
        <Masonry
          breakpointCols={breakpointCols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.slice(0, loadedImages).map((image) => (
            <div key={image.id} className="masonry-item">
              <ImageCard key={image.id} image={image} />
            </div>
          ))}
        </Masonry>
        <div className='flex justify-center m-4'>
          {loadedImages < images.length && (
            <button onClick={handleLoadMore} className='text-gray-300 transition hover:text-orange-500 hover:animate-bounce'>点击加载更多</button>
          )}
        </div>

      </div></>
  );
};

/**
 * 获取用于静态生成的路径列表
 * 这个函数会遍历所有的标签，并为每个标签生成一个路径参数对象
 * @returns {Object} 一个包含路径列表和回退策略的对象
 */
export async function getStaticPaths() {
  const tags = [...new Set(data.map((image) => image.tags).flat())];
  const paths = tags.map((tag) => ({
    params: { tag },
  }));

  return { paths, fallback: false };
}

/**
 * 在构建时获取静态页面的属性
 * 这个函数会根据传入的标签参数获取对应的图片数据，并将其作为属性返回
 * @param {Object} params - 包含标签的参数对象
 * @returns {Object} - 包含获取到的图片数据的属性对象
 */
export async function getStaticProps({ params }) {
  const tag = params.tag;
  const images = data.filter((image) => image.tags.includes(tag));
  return { props: { tag,images } };
}

export default TagPage;
