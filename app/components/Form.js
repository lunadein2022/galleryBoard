"use client";

import styles from '../styles/home.module.css'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import onPostClick from '../util/onPostClickj';

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const router = useRouter();

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = { title, imageUrl, createdAt }; // title, imageUrl, createAt을 객체로 묶어서 전송할 데이터 생성

    try {

    let imageUrl = props.url;
    let createdAt = props.date;

    setImageUrl(imageUrl);
    setCreatedAt(createdAt);

    console.log("url: ", imageUrl, "date: ", createdAt);
    console.log(data);
    await axios.post("/api/uploads", data)

} catch (error) {
    console.error(error);
  }
};

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
