import { IcontactsData } from "@/types";

const fieldPersonInformation: IcontactsData[] = [
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
      regex: /^[а-яёa-z]{2,24}/i,
      message: 'Ваше имя введено неверно',
      required: 'Введите имя',
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
      max: 200,
      numberMessage: 'Ваше число должно быть от 0 до 200',
      className: 'text-input--error',
      placeholder: '70',
      required: 'Введите вес',
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
      min: 14,
      max: 100,
      numberMessage: 'Ваш возраст должен быть от 14 до 100',
      placeholder: '35',
      required: false,
    },
  },
];

export default fieldPersonInformation;
