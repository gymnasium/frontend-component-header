import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import GymSettings from '../data/settings';
const settings = await GymSettings();

const MainMenu = ({ intl }) => {
  return ( 
    <ul role="list">
      {settings.navigation.main.map((item, index) => {
        return (
          <li key={`item-${index}`}><a href={item.href}>{item.title}</a></li>
        );
      })}
    </ul>
  )
};

MainMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MainMenu);