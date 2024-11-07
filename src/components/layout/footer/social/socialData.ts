import { SlSocialVkontakte, SlSocialYoutube } from 'react-icons/sl';
import { PiTelegramLogo } from 'react-icons/pi';
import { ISocialData } from './social.types';


const socialData: ISocialData[] = [
  {
    name: 'ВКонтакте',
    href: 'https://vk.com/id361320319',
    component: SlSocialVkontakte,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/watch?v=QykPk380FkU',
    component: SlSocialYoutube,
  },
  {
    name: 'Telegram',
    href: 'https://www.youtube.com/watch?v=QykPk380FkU',
    component: PiTelegramLogo,
  },
];

export default socialData;
