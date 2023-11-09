'use client'
import { CldImage} from 'next-cloudinary';

const View = ({src}) => {
  return (
    <CldImage
      width="200"
      height="200"
      sizes ="50w"
      src={src}
      alt="Description of my Image"
    />
  );
};

export default View;
