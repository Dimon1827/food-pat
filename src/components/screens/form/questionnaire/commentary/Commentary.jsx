import './Commentary.scss';

function Commentary() {
  return (
    <div className="container">
      <div className="questionnaire__field commentary">
        <h2 className="commentary__title form-title">Комментарий</h2>
        <textarea
          className="commentary__text"
          name="comment"
          cols="30"
          rows="10"
          placeholder="Расскажите о вас. Что предпочитаете и т.д"
        ></textarea>
      </div>
    </div>
  );
}

export default Commentary;
