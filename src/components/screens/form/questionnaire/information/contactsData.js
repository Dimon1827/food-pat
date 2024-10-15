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
      required: 'Введите email',
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
      regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      message: 'Ваш телефон введен неверно',
      required: 'Введите телефон',
    },
  },
];

export default contactsData;
