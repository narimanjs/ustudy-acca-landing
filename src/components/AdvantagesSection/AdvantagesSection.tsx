import styles from "./AdvantagesSection.module.scss";

const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.vector1}>
        <img
          src='/assets/img/adv-vector1.png'
          alt='background vector 1'
        />
      </div>
      <div className={styles.vector2}>
        <img
          src='/assets/img/adv-vector2.png'
          alt='background vector 2'
        />
      </div>
      <h2>Как проходят уроки в Ustudy</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src='/assets/img/AdvantagesSection.png'
            alt='Working on laptop'
          />
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src='/assets/icons/Homework-icon.svg'
              alt='Homework'
            />
            <h3>Домашние задания и тесты</h3>
          </div>
          <div className={styles.card}>
            <img
              src='/assets/icons/online-icon.svg'
              alt='online conference'
            />
            <h3>Онлайн конференции</h3>
          </div>
          <div className={styles.card}>
            <img
              src='/assets/icons/progress-icon.svg'
              alt='progress report'
            />
            <h3>Отчет о прогрессе</h3>
          </div>
          <div className={styles.card}>
            <img
              src='/assets/icons/phone-desktop-icon.svg'
              alt='mobile learning'
            />
            <h3>Мобильное обучение</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
