import styles from './Cards.module.scss';
import { Card } from '@components/Card';
import { fakeData } from './Cards.fakeData';

const CardsPage = () => {
  return (
    <main className={styles.container}>
      {fakeData.map((e, i) => (
        <Card key={i} {...e} />
      ))}
    </main>
  );
};

export default CardsPage;
