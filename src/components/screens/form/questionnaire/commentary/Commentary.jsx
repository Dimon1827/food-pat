import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import './Commentary.scss';

function Commentary() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [remainLetters, setRemainLetters] = useState('');
  const numberLetters = 200;
  const remainNumbersLetters = numberLetters - remainLetters.length;

  return (
    <div className="container">
      <div className="questionnaire__field commentary">
        <h2 className="commentary__title form-title">Комментарий</h2>
        <textarea
          className="commentary__text"
          {...register('comment', {
            maxLength: {
              value: numberLetters,
              message: 'Сообщение превысило кол-во допустимых букв',
            },
          })}
          value={remainLetters}
          onChange={(e) => setRemainLetters(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Расскажите о вас. Что предпочитаете и т.д"
        ></textarea>
        {remainNumbersLetters >= 0 ? (
          <span className="commentary__counter">
            Осталось букв: {remainNumbersLetters}
          </span>
        ) : (
          errors.comment && (
            <div className="information__error">{errors.comment.message}</div>
          )
        )}
      </div>
    </div>
  );
}

export default Commentary;
