import { IconType } from 'react-icons';

export interface ISocialData {
  name: string;
  href: string;
  component: IconType;
}

export interface SocialItemProps {
  socialData: ISocialData[];
}