import { useState } from 'react';
import { dataSelect } from './InputsFakeData';
import { SelectInput } from '@components/SelectInput';
import { DateInput, DateInputProps } from '@components/DateInput';

export const InputsPage = () => {
  const [date, setDate] = useState(new Date());

  const dataDate: DateInputProps[] = [
    {
      id: '1',
      placeholder: 'Виберіть дату',
      onChange: (date) => setDate(date),
      value: date,
    },
    {
      id: '2',
      placeholder: 'Виберіть дату',
      helperText: 'Всі білети куплені',
      onChange: (date) => setDate(date),
      value: date,
    },
    {
      id: '3',
      placeholder: 'Виберіть дату',
      helperText: 'Another picker placement',
      onChange: (date) => setDate(date),
      value: date,
      placement: 'top-end'
    },
    {
      id: '4',
      placeholder: 'Виберіть дату',
      helperText: 'Всі білети куплені',
      onChange: (date) => setDate(date),
      value: date,
      error: true,
      direction: 'rtl',
    },
  ];

  return (
    <div className="page_wrapper">
      <section className="container">
        {dataSelect.map((e) => (
          <SelectInput key={e.id} {...e} />
        ))}
        {dataDate.map((e) => (
          <DateInput {...e} key={e.id}/>
        ))}
      </section>
    </div>
  );
};
