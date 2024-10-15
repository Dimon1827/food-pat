import InformationItem from './InformationItem';
import './Information.scss';

function Information({ fieldPersonInformation = null, contactsData = null }) {
  const foundInformation = fieldPersonInformation || contactsData;
  return (
    <>
      {foundInformation.map((field, index) => {
        return <InformationItem key={index} {...field} />;
      })}
    </>
  );
}

export default Information;
