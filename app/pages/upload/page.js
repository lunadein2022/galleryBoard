import Button from "@/app/components/Button";
import styles from "../../styles/home.module.css";

export default function Page() {
  const imageExamples = Array.from(
    { length: 20 },
    (_, index) => `이미지 예시 ${index + 1}`
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <Button />
        </div>
        <div>
          <div className={styles.box}>
            <form>
              <input
                className={styles.uploadtitle}
                placeholder="제목을 입력하세요"
              />
              <button className={styles.button3}>UPLOAD</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
