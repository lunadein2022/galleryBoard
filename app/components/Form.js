"use client";

import styles from '../styles/home.module.css'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import onPostClick from '../util/onPostClickj';

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [createAt, setCreateAt] = useState("");
  const router = useRouter();

  const handleUpload = async (e) => {
    e.preventDefault();

    
    let imageUrl = props.url;
    let createAt = props.date;
    const data = { title, imageUrl, createAt }; // title, imageUrl, createAt을 객체로 묶어서 전송할 데이터 생성

    setImageUrl(imageUrl);
    setCreateAt(createAt);

    console.log("url: ", imageUrl, "date: ", createAt);
    console.log("data: ", data);
    axios.post('/api/uploads', data)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })

} 
  return (
    <>
      <form onSubmit={handleUpload}>
        <input
          className={styles.uploadtitle}
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className={styles.button3}>
          UPLOAD
        </button>
      </form>
    </>
  );
}
