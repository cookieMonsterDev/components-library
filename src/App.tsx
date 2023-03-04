import Select from 'react-select';
import { useFormik } from 'formik';

interface Options {
  value: string;
  label: string;
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
function App() {
  const formik = useFormik({
    initialValues: {
      sth: 'test',
      test: 'chocolate',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });


  return (
    <div className="page_wrapper">
      <form onSubmit={formik.handleSubmit}>
        <Select
          options={options}
          name="test"
          onChange={(option) => formik.setFieldValue('test', option?.value)}
        />
        <input name='sth' onChange={formik.handleChange} value={formik.values.sth}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
