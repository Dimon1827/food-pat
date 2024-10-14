const contactsData = [
  {
    label: {
      htmlFor: 'email',
      name: 'E-mail:*',
    },
    input: {
      id: 'email',
      name: 'email',
      type: 'email',
      className: 'text-input--error',
      placeholder: 'a.drogalov2015@yandex.ru',
      regex: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
      required: 'Введи email',
    },
  },
  {
    label: {
      htmlFor: 'telephone',
      name: 'Телефон:*',
    },
    input: {
      id: 'telephone',
      name: 'telephone',
      type: 'tel',
      className: 'text-input--error',
      placeholder: '8 (909) 512-34-21',
      required: 'Введи телефон',
    },
  },
];

export default contactsData;
