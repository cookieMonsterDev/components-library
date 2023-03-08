import { useState } from 'react';
import { dataInput, dataSelect } from './InputsFakeData';
import styles from './Inputs.module.scss';
import { TextInput } from '@components/TextInput';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { SelectInput } from '@components/SelectInput';

export const InputsPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="page_wrapper">
      <section className={styles.container}>
        {dataInput.map((e, i) => {
          if (e.type === 'password') {
            return (
              <TextInput
                key={i}
                {...e}
                icon={
                  <SvgIcon
                    src={IconsEnum.hideShow}
                    size={18}
                    color={'ultra-light-gray'}
                    onClick={() => setShow((prev) => !prev)}
                  />
                }
                type={show ? 'text' : 'password'}
              />
            );
          }

          return <TextInput key={i} {...e} />;
        })}
        {dataSelect.map((e) => (
          <SelectInput key={e.id} {...e} />
        ))}
      </section>
    </div>
  );
};
