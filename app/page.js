import Link from "next/link";
import styles from "./styles/home.module.css";
import Gallery from "./components/Gallery";

export default async function Home() {

  return (
    <main>
      <div>
        <div className={styles.row}>
          <Gallery />
        </div>
      </div>
    </main>
  );
}
