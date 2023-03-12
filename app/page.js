import styles from './page.module.css';
import photo5 from '../public/IMG_1631.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>HOME PAGE</h1>
      <div className={styles['image-container']}>
        <p className={styles['introduction-text']}>
          Hi and welcome to my portfolio! My name is David Dyberg and on this
          site you can see what I have learned and see my skills in React.js.
          Take a look!
        </p>
        <Image className={styles.image} alt="" src={photo5}></Image>
      </div>
    </main>
  );
}
