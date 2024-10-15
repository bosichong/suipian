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
    <div className='container justify-center mx-auto px-4 leading-relaxed'>
        <h1 className='text-3xl'>关于我们</h1>
        <p>SuiPian | 碎片，取自时光的斑斓碎片，是一个汇聚无数精美壁纸的奇妙站点。</p>
        <p>这里的每一张壁纸都如岁月长河中遗落的珍宝碎片，承载着生活的多彩与学习的宁静。</p>
        <p>它们或是自然的壮丽瞬间，让你仿佛置身于广袤的山水之间；或是艺术的灵动笔触，激发你对美的无限遐想；又或是温馨的生活场景，勾起你内心深处的柔软回忆。</p>
        <p>在 “碎片” 壁纸站，你可以找到那些能点亮生活、舒缓心灵的图像碎片，为你的屏幕增添一抹独特的风景。</p>

        <h1 className='text-3xl mt-4'>关于版权</h1>
        <p>本壁纸站站内所有壁纸资源均经过精心制作、收集与整理，旨在为用户提供优质的视觉体验。</p>
        <p>原创壁纸均为站长通过AI、制图、绘画或是二次加工素材制作而成，版权归本站所有，未经授权，严禁任何形式的商业用途及非法复制、传播。</p>
        <p>转载壁纸版权归原作者所有，我们尊重每一位创作者的劳动成果。未经授权，严禁任何形式的商业用途及非法复制、传播。</p>
        <p>用户在本站下载和使用壁纸应遵循合法、正当的原则。若因用户的不当使用行为引发的任何法律纠纷，本站不承担责任。</p>
      </div></>
  );
};

export default AboutPage;
