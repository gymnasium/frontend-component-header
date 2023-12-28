import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import GymSettings from '../data/settings';
const settings = await GymSettings();

const MainMenu = ({ intl }) => {
  return ( 
    <ul>
      {settings.navigation.main.map(item => {
        return (
          <li><a key={`item-${item.title}`} href={item.href}>{item.title}</a></li>
        );
      })}
    </ul>
  )
};

MainMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MainMenu);