import Button from "@/app/components/Button";
import styles from "../../styles/home.module.css";
import Form from "@/app/components/Form";
import Cloudinary from 'cloudinary'




export default async function Page() {

  let response = await Cloudinary.v2.search
  .expression("resource_type:image")
  .sort_by("created_at", "desc")
  .max_results(100)
  .execute();

let sortedResources = response.resources.sort(
  (a, b) => new Date(b.created_at) - new Date(a.created_at)
);
 let url = response.resources[0].url;
 let date = response.resources[0].created_at;

  console.log(url, date);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <Button />
        </div>
        <div>
          <div className={styles.box}>
            <Form url={url} date={date}/>
          </div>
        </div>
      </div>
    </>
  );
}
