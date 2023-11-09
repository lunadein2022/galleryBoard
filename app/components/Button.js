'use client'

import { CldUploadButton } from 'next-cloudinary';
import React from 'react';
import styles from '../styles/home.module.css'

const Button = () => {
  return (
    <CldUploadButton 
    className={styles.button1}
      uploadPreset='cweu74q3' 
      // onUpload={(result) => {
      //   let res = result;
      //   setImageId(res.info.public_id);
      // }}  
    >사진업로드하기</CldUploadButton>
  );
};

export default Button;
