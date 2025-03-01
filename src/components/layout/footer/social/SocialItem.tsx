import { SocialItemProps } from './social.types';

function SocialItem({ socialData }: SocialItemProps) {
  return (
    <>
      {socialData.map((social, index) => {
        return (
          <li key={index} className="social__item" data-testid="social-item">
            <a href={social.href} className="social__link">
              {<social.component />}
              <span className="visually-hidden">{social.name}.</span>
            </a>
          </li>
        );
      })}
    </>
  );
}

export default SocialItem;
