import styles from "./OurAdvantagesSection.module.scss";

const OurAdvantagesSection = () => {
  return (
    <section
      className={styles.advantagesSection}
      id='advantages'
    >
      <div className={styles.content}>
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
        <h2>Наши преимущества</h2>
        <ol className={styles.advantagesList}>
          <li>
            <p>Практические задания, основанные на актуальных вопросах ЕНТ</p>
          </li>
          <li>
            <p>Круглосуточный доступ к учебным материалам</p>
          </li>
          <li>
            <p>Глубокое освоение ключевых предметов</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
