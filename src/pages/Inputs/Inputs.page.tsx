import { data } from './InputsFakeData';
import styles from './Inputs.module.scss';
import { TextInput } from '@components/TextInput';

export const InputsPage = () => {
  return (
    <div className="page_wrapper">
      <section className={styles.container}>
        {data.map((e, i) => (
          <TextInput key={i} {...e} />
        ))}
      </section>
    </div>
  );
};
