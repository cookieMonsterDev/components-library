import React from 'react';
import { Text, TextVariantsEnum } from '@components/Text';
import styles from './Typography.module.scss';
import { data } from './FakeData';

export const TypographyPage = () => {
  return (
    <fieldset className={styles.container}>
      <legend>
        <Text variant={TextVariantsEnum.Heading_3}>Typography</Text>
      </legend>
      {data.map((e) => (
        <section className={styles.section} key={e.id}>
          <Text variant={e.text_variant} className={styles.firstItem}>{e.text}</Text>
          <Text variant={e.text_variant_des}>{e.type}</Text>
          <Text variant={e.text_variant_des}>{e.font_size}</Text>
          <Text variant={e.text_variant_des}>{e.line_height}</Text>
        </section>
      ))}
    </fieldset>
  );
};
