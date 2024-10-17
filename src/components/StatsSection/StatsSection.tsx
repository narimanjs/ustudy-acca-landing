import styles from "./StatsSection.module.scss";

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.card}>
        <img
          src='/graduates.png'
          alt='Graduates'
        />
        <h3>10 000 успешных студентов</h3>
        <p>
          Более 10,000 студентов успешно прошли курс и поступили в топовые ВУЗы
          страны.
        </p>
      </div>

      <div className={styles.card}>
        <img
          src='/teachers.png'
          alt='Teachers'
        />
        <h3>100 опытных преподавателей</h3>
        <p>
          В курсе участвуют 100+ преподавателей с 10-летним опытом подготовки к
          ЕНТ, что гарантирует качество обучения.
        </p>
      </div>

      <div className={styles.card}>
        <img
          src='/tasks.png'
          alt='Test tasks'
        />
        <h3>Доступ к 2000 тестовым заданиям</h3>
        <p>
          Студенты получают доступ к более чем 2000 тестовым заданиям и
          практическим работам.
        </p>
      </div>

      <div className={styles.card}>
        <img
          src='/online.png'
          alt='Online classes'
        />
        <h3>2000 часов онлайн-занятий</h3>
        <p>
          Курс включает 5000+ часов материалов и занятий, охватывающих все
          важные темы.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
