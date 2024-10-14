import { Controller } from 'react-hook-form';

function SelectInput({ control, id, name, type }) {
  return (
    <>
      <Controller
        name={type === 'checkbox' ? id : 'task'}
        control={control}
        defaultValue={type === 'checkbox' ? false : ''}
        render={({ field }) => (
          <input
            id={id}
            type={type}
            name={id}
            className={`visually-hidden control-input ${
              type === 'checkbox' ? 'additionally__input' : 'task__input'
            }`}
            {...field}
            value={id}
          />
        )}
      />
      <label
        htmlFor={id}
        className={`label ${
          type === 'checkbox' ? 'additionally__label' : 'task__label'
        }`}
      >
        {name}
      </label>
    </>
  );
}

export default SelectInput;
