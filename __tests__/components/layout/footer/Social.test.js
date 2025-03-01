import { SlSocialVkontakte, SlSocialYoutube } from 'react-icons/sl';
import { screen, render } from '@testing-library/react';
import Social from '@/components/layout/footer/social/Social';
import SocialItem from '@/components/layout/footer/social/SocialItem';

describe('Social', () => {
  it('social renders correctly', () => {
    render(<Social />);
    expect(screen.getByTestId('social')).toMatchSnapshot();
  });
  it('socialItem renders correctly with 2 elements', () => {
    render(
      <SocialItem
        socialData={[
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
        ]}
      />
    );
    expect(screen.getAllByTestId('social-item')).toHaveLength(2);
  });
  it('socialItem renders correctly with 0 elements', () => {
    render(<SocialItem socialData={[]} />);
    const socialItems = screen.queryAllByTestId('social-item');
    expect(socialItems).toHaveLength(0);
  });
});
