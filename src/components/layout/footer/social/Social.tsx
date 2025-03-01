import SocialItem from './SocialItem';
import './Social.scss';
import socialData from './socialData';

function Social() {
  return (
    <ul className="social social--wrapper" data-testid="social">
      <SocialItem socialData={socialData} />
    </ul>
  );
}

export default Social;
