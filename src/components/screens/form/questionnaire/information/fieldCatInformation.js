const fieldCatInformation = [
  {
    label: {
      htmlFor: 'name',
      name: 'ИМЯ:*',
    },
    input: {
      id: 'name',
      name: 'name',
      type: 'text',
      className: 'text-input--error',
      placeholder: 'Елена',
      required: true,
    },
  },
  {
    label: {
      htmlFor: 'weight',
      name: 'Вес (кг):*',
    },
    input: {
      id: 'weight',
      name: 'weight',
      type: 'number',
      min: 0,
      max: 100,
      className: 'text-input--error',
      placeholder: '70',
      required: true,
    },
  },
  {
    label: {
      htmlFor: 'age',
      name: 'Возраст (лет):',
    },
    input: {
      id: 'age',
      name: 'age',
      type: 'number',
      min: 0,
      max: 100,
      placeholder: '35',
      required: false,
    },
  },
];

export default fieldCatInformation;
