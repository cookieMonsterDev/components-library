import { AlertPopUp } from '@components/AlertPopUp';
import { Button } from '@components/Button';
import { useState } from 'react';

export const AlertPopUpPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button text="Show popUp" onClick={() => setShow(true)} />
      {show && (
        <AlertPopUp
          title="Вы  хотите увеличить количество?"
          message="Позиция уже существует в проекте."
          acceptButtonText="Да, увеличить"
          rejectButtonText="Отменить"
          closeButtonHandler={() => setShow(false)}
        />
      )}
    </div>
  );
};
