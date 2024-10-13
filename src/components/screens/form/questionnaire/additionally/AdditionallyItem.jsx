function AdditionallyItem({ id, name, checked = false }) {
  return (
    <li className="additionally__item">
      <input
        id={id}
        type="checkbox"
        name={id}
        className="additionally__input visually-hidden control-input"
        checked={checked}
      />
      <label htmlFor={id} className="additionally__label label">
        {name}
      </label>
    </li>
  );
}

export default AdditionallyItem;
