import InformationItem from './InformationItem';
import './Information.scss';
import { IcontactsData } from '@/types';

interface InformationProps {
  fieldPersonInformation?: IcontactsData[];
  contactsData?: IcontactsData[];
}

function Information({
  fieldPersonInformation,
  contactsData,
}: InformationProps) {
  const foundInformation = fieldPersonInformation || contactsData;
  return (
    <>
      {foundInformation?.map((field, index) => {
        return <InformationItem key={index} {...field} />;
      })}
    </>
  );
}

export default Information;
