// pages/images/[id].js
import Image from 'next/image';
import data from '../../public/images/data.json';
import Head from 'next/head'; // 导入 next/head 中的 Head 组件
const ImageDetail = ({ image }) => {
  return (
    <><Head>
      <title>SuiPian - {image.alt}</title>
     <meta content={image.tags} name="keywords" />
      <meta content={image.description} name="description" />

    <meta content="J.sky" name="author" />
    </Head>
    <div className="container px-4">
        <div className="flex justify-center">
          <Image src={`/images/${image.src}`} alt={image.alt} width={image.width / 5} height={image.height / 5} className="" />
        </div>
        <div>
          <div className="flex justify-center">{image.alt}</div>
          <div className="flex justify-center">{image.description}</div>
        </div>

      </div></>
  );
};
/**
 * 获取用于静态生成的路径列表
 * 这个函数会遍历一个图片数据数组，并为每个图片生成一个路径参数对象
 * @returns {Object} 一个包含路径列表和回退策略的对象
 */
export async function getStaticPaths() {
  const paths = data.map((image) => ({
    params: { id: image.id.toString() },
  }));

  return { paths, fallback: false };
}


/**
 * 在构建时获取静态页面的属性
 * 这个函数会根据传入的参数获取对应的图片数据，并将其作为属性返回
 * @param {Object} params - 包含图片 ID 的参数对象
 * @returns {Object} - 包含获取到的图片数据的属性对象
 */
export async function getStaticProps({ params }) {
  const image = data.find((image) => image.id === parseInt(params.id));
  return { props: { image } };
}


export default ImageDetail;