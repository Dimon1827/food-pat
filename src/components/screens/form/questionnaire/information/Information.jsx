import InformationItem from './InformationItem';
import './Information.scss';

function Information({ fieldCatInformation = null, contactsData = null }) {
  const foundInformation = fieldCatInformation || contactsData;
  return (
    <>
      {foundInformation.map((field,index) => {
        return <InformationItem key={index} {...field} />;
      })}
    </>
  );
}

export default Information;
