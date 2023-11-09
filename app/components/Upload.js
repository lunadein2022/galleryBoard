'use client'
import Button from "./Button";
import Form from "./Form";
import styles from '../styles/home.module.css';
import axios from "axios";
import { useEffect, useState } from "react";




export default function Upload() {

  const [resources, setResources] = useState([]);
  const [createAt, setCreateAt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get("/api/uploads")
      .then(response => {
        const data = response.data;
        setResources(data);
        setCreateAt(data[0].createAt)
        setImageUrl(data[0].imageUrl)
      })
      .catch(error => {
        console.error("Failed to fetch resources:", error);
      });
  }, []);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <Button />
        </div>
        <div>
          <div className={styles.box}>
            <Form url={imageUrl} date={createAt}/>
          </div>
        </div>
      </div>
    </>
  );
}
