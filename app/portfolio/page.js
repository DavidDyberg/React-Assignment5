'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import photo1 from '../../public/Assignment-1.png';
import photo2 from '../../public/Assignment-2.png';
import photo3 from '../../public/Assignment-3.png';
import photo4 from '../../public/Assignment-4.png';

export default function Portfolio() {
  return (
    <main>
      <h1 className={styles.title}>My projects</h1>

      <div className={styles['projects-image-container']}>
        <div className={styles['image-container']}>
          <p className={styles['project-title']}>Assignment 1</p>
          <a href="https://react-assignment-1-beryl.vercel.app/" target="blank">
            <Image
              className={styles['project-image1']}
              src={photo1}
              alt="portfolio"
            />
          </a>
          <h3 className={styles['project-description-title']}>Description:</h3>
          <p className={styles['project-description']}>
            This was my first React project where the idea was to plan what I
            wanted to do for my first personal project, which you can see in
            Assignment-3. I used Vite to create this basic website. Click on the
            image to visit the site.
          </p>{' '}
          <br></br>
          <a
            className={styles['github-links']}
            href="https://github.com/DavidDyberg/React-Assignment-1.git"
            target="blank"
          >
            Click this link to get to my github repository.
          </a>
        </div>

        <div className={styles['image-container']}>
          <p className={styles['project-title']}>Assignment 2</p>
          <Image
            className={styles['project-image2']}
            src={photo2}
            alt="portfolio"
          />
          <h3 className={styles['project-description-title']}>Description:</h3>
          <p className={styles['project-description']}>
            This assignment was a terminal-based project with the goal of
            displaying specific information when running npm run start. It was
            supposed to display my name, the current date, the current GitHub
            and Node versions, and the number of days until the course started.
            In the image above, you can see the result.
          </p>
          <br></br>
          <a
            className={styles['github-links']}
            href="https://github.com/DavidDyberg/React-Assignment2.git"
            target="blank"
          >
            Click this link to get to my github repository.
          </a>
        </div>

        <div className={styles['image-container']}>
          <p className={styles['project-title']}>Assignment 3</p>
          <a href="https://react-assignment-3-rose.vercel.app/" target="blank">
            <Image
              className={styles['project-image3']}
              src={photo3}
              alt="portfolio"
            />
          </a>
          <h3 className={styles['project-description-title']}>Description:</h3>
          <p className={styles['project-description']}>
            This is the final product of my first personal project in React.
            Thegoal of the assignment was to choose a design style and then make
            apixel-perfect recreation of it, but with my own content. I also
            added interactivity in the form of a countdown timer for a rocket
            launch. Click on the image to read more!
          </p>
          <br></br>
          <a
            className={styles['github-links']}
            href="https://github.com/DavidDyberg/React-Assignment-3.git"
            target="blank"
          >
            Click this link to get to my github repository.
          </a>
        </div>

        <div className={styles['image-container']}>
          <p className={styles['project-title']}>Assignment 4</p>
          <a
            href="https://react-assignment-4-6yd4k9j8l-daviddyberg.vercel.app/"
            target="blank"
          >
            <Image
              className={styles['project-image4']}
              src={photo4}
              alt="portfolio"
            />
          </a>
          <h3 className={styles['project-description-title']}>Description:</h3>
          <p className={styles['project-description']}>
            In this project, I have fetched my Vite project to a Star Wars API.
            Take a look and learn about different Star Wars characters!
          </p>
          <br></br>
          <a
            className={styles['github-links']}
            href="https://github.com/DavidDyberg/React-Assignment-4.git"
            target="blank"
          >
            Click this link to get to my github repository.
          </a>
        </div>
      </div>
    </main>
  );
}
