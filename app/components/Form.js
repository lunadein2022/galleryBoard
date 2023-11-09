"use client";

import styles from '../styles/home.module.css'
import axios from 'axios';
import { useState } from 'react';


export default function Form(props) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [createAt, setCreateAt] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = { title, imageUrl, createAt }; // title, imageUrl, createAt을 객체로 묶어서 전송할 데이터 생성

    try {
      const response = await axios.post("/pages/upload", data);
      let url = response.data.url;
      let date = response.data.date;

      url = props.url;
      date = props.date;

      setImageUrl(url);
      setCreateAt(date);

      console.log("url: ", url, "date: ", date);
      console.log(data);
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
