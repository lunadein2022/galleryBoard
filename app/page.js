import Link from "next/link";
import styles from "./styles/home.module.css";
import View from "@/app/components/View";
import Cloudinary from 'cloudinary';

export default async function Home() {

  let response = await Cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at', 'desc') // 날짜를 기준으로 내림차순 정렬
  .max_results(100)
  .execute();

console.log(response.resources[0].url);

let url = response.resources[0].url;
let date = response.resources[0].created_at;
let images = response.resources

console.log("url: ", url, "date : ", date);

  return (
    <main>
      <div>
        <div className={styles.row}>
          <Link href="/pages/upload">
            <button className={styles.button1}>UPLOAD</button>
          </Link>
          <Link href="/pages/gallery">
            <button className={styles.button2}>GALLERY2</button>
          </Link>
          <div className={styles.row}>
            {images.map((image, id) => {
              return (
                <div key={id} className={styles["gallery-item"]}>
                  <View src={image.url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
