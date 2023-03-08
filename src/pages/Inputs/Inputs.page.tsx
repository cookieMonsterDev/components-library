import { useState } from 'react';
import { dataInput } from './InputsFakeData';
import { TextInput } from '@components/TextInput';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

export const InputsPage = () => {
  const [show, setShow] = useState(false);
 
  return (
    <div className="page_wrapper">
      <section className="container">
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
      </section>
    </div>
  );
};
