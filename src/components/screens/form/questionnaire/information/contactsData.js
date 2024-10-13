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
      required: true,
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
      required: true,
    },
  },
];

export default contactsData;
