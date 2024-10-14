// FILEPATH: /pages/tags.js
import React from 'react';
import data from '../public/images/data.json';
import Head from 'next/head'; // 导入 next/head 中的 Head 组件

const TagsPage = ({ tags }) => {
  return (
    <><Head>
      <title>SuiPian - Tags</title>
    </Head>
    <div className="container mx-auto px-4">
        <h1 className='text-3xl mb-3'>Tags</h1>
        <ul className='flex flex-wrap'>
          {tags.map((tag, index) => (
            <li key={index} className='mr-3 hover:animate-bounce'>
              <a href={`/tags/${tag}`} className="p-1 border border-gray-600 transition hover:border-orange-600">{tag}</a>
            </li>
          ))}
        </ul>
      </div></>
  );
};


// 定义一个异步函数 getStaticProps，用于生成静态页面的属性
export async function getStaticProps() {
  const allTags = data.flatMap(item => item.tags); // 提取所有标签
  const uniqueTags = [...new Set(allTags)]; // 使用 Set 去除重复标签，然后转换回数组

  console.log("tags.test");
  console.log(uniqueTags);

  // 返回一个包含所有唯一标签的路径列表
  return {
    props: {
      tags: uniqueTags,
    },
  };
};

// 将 TagsPage 组件作为默认导出
export default TagsPage;
