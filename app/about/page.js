import styles from './styles.module.css';
import photo from '../../public/IMG_1640-mindre.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1 className={styles.title}>About me</h1>
      <div className={styles['profile-container']}>
        <div className={styles['image-container']}>
          <Image className={styles['profile-image']} src={photo} alt="about" />
        </div>
        <p className={styles['profile-text']}>
          My name is David Dyberg. I am 21 years old and I live in Stockholm.
          Currently, I am studying as a Frontend/App-developer at Changemaker
          Educations AB, located in Stockholm. In this portfolio, I will be
          presenting my achievements in React programming so far. Please visit
          the portfolio page to see some of my projects. I hope you find
          something interesting!
        </p>
      </div>
    </div>
  );
}
