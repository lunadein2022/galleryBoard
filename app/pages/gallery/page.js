import Cloudinary from 'cloudinary';
import styles from '../../styles/home.module.css';
import View from '@/app/components/View';

export default async function Page() {
  let response = await Cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc') // 날짜를 기준으로 내림차순 정렬
    .max_results(100)
    .execute();

  console.log(response.resources[0].url);

  let url = response.resources[0].url;
  let date = response.resources[0].created_at;

  console.log("url: ", url, "date : ", date);

  // 날짜를 기준으로 정렬된 배열을 생성
  let sortedResources = response.resources.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <div className={styles.container}>
      <h2>갤러리 모음</h2>
      <div className={styles.row}>
        {sortedResources.map((item, i) => {
          return (
            <div key={i} className={styles["gallery-item"]}>
              <View src={item.public_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};


