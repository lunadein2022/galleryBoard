'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../styles/home.module.css';
import View from '../../components/View';

export default function Page() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get("/api/uploads")
      .then(response => {
        const data = response.data;
        setResources(data);
      })
      .catch(error => {
        console.error("Failed to fetch resources:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>갤러리 모음</h2>
      <div className={styles.row}>
        {resources.map((item, i) => {
          const { title, imageUrl, createAt } = item; // 각 값에 변수 할당
          return (
            <div key={i} className={styles["gallery-item"]}>
              <div className={styles.imageBox}>
              <View src={imageUrl} />
              <h3>{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
