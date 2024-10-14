// components/ImageCard.js
import Image from 'next/image';
import Link from 'next/link';

const ImageCard = ({ image }) => {
  return (
    <Link href={`/images/${image.id}`}>
      <div className="relative group">
        <Image src={`/images/${image.src}`} alt={image.alt} width={image.width} height={image.height} className="w-full h-auto"/>
        <div className="bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white group-hover:opacity-100">
          <p>{image.alt}</p>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;