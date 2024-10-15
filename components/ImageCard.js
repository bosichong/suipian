// components/ImageCard.js
import Image from 'next/image';
import Link from 'next/link';

const ImageCard = ({ image }) => {
  return (
    <Link href={`/images/${image.id}`}>
      <div className="relative group hover:shadow-lg hover:shadow-pink-950">
        <Image src={`/images/${image.src}`} alt={image.alt} width={image.width} height={image.height} className="w-full h-auto rounded-lg"/>
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p className='text-gray-400 text-center'>{image.alt}</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>
    </Link>
  );
};


export default ImageCard;