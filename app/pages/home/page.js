import styles from "../../styles/home.module.css";

export default function Page() {
  const imageExamples = Array.from({ length: 20 }, (_, index) => `이미지 예시 ${index + 1}`);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="gallery-title">메인 갤러리입니다</h3>
            <div className={styles.container}>
              <div className={styles.row}>
                {imageExamples.map((example, index) => (
                  <div key={index} className={styles["gallery-item"]}>
                    {example}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
