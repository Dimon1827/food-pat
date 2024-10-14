import InformationItem from './InformationItem';
import './Information.scss';

function Information({
  fieldCatInformation = null,
  contactsData = null,
  register,
  errors
}) {
  const foundInformation = fieldCatInformation || contactsData;
  return (
    <>
      {foundInformation.map((field, index) => {
        return <InformationItem register={register} errors = {errors} key={index} {...field} />;
      })}
    </>
  );
}

export default Information;
