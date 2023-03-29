import { Avatar } from '@components/Avatar';
import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

export const CardComponent: React.FC<CardProps> = ({ img, title, des }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Avatar src={img} text="Mykhailo Toporkov" size='lg'/>
        <span className={styles.title}>{title}</span>
      </header>
      <span className={styles.des}>{des}</span>
    </section>
  );
};

export default CardComponent;
