import { CheckBox } from '@components/CheckBox';
import styles from './CheckBoxes.module.scss';
import {
  fakeCheckBoxes,
  fakeRadioRound,
  fakeRadioSquare,
  fakeRadioToggle,
} from './CheckBoxesFackData';

export const CheckBoxesPage = () => {
  return (
    <div className="page_wrapper">
      <section className={styles.container}>
        {fakeCheckBoxes.map((e, i) => (
          <CheckBox key={i} {...e} />
        ))}
      </section>
      <section className={styles.radios}>
        {fakeRadioRound.map((e, i) => (
          <CheckBox key={i} {...e} />
        ))}
      </section>
      <section className={styles.radios}>
        {fakeRadioSquare.map((e, i) => (
          <CheckBox key={i} {...e} />
        ))}
      </section>
      <section className={styles.radios}>
        {fakeRadioToggle.map((e, i) => (
          <CheckBox key={i} {...e} />
        ))}
      </section>
    </div>
  );
};
