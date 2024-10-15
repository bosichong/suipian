// FILEPATH: /about/index.js
import React from 'react';
import Head from 'next/head'; // 导入 next/head 中的 Head 组件

const AboutPage = () => {
  return (
    <>
    <Head>
      <title>SuiPian - About Me</title>
      <meta content="About Me,关于我们" name="keywords" />
      <meta content="SuiPian | About Me,关于我们" name="description" />
    </Head>
    <div className='container justify-center mx-auto px-4'>
        <h1>关于我们</h1>
        <p>这是一个关于我们的页面，我们是一个专注于提供高质量服务的团队。</p>
        <p>我们的目标是为客户提供最好的体验，帮助他们实现自己的目标。</p>
      </div></>
  );
};

export default AboutPage;
