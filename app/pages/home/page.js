// import { createPost } from "@/app/util/createPost";
// import styles from "../../styles/home.module.css";
// import {queryData} from "../../util/getQueryOutput"

// const Page = async ({searchParams}) =>{

//   // const createPostResult = await createPost();
//   // console.log(JSON.stringify(createPostResult, null, 2))

//   return (
//     <>
//       <div className="container">
//           page
//       </div>
//     </>
//   );
// }

// export default Page
'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import View from "@/app/components/View";

export default function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("/api/uploads")
      .then(response => {
        setImages(response.data.allImage);
      })
      .catch(error => {
        console.error("Failed to fetch images:", error);
      });
  }, []);

  return (
    <div>
      {images.map((image, id) => (
        <div key={id}>
          <h3>{image.title}</h3>
          <View src={image.imageUrl} title={image.title} />
        </div>
      ))}
    </div>
  );
}
