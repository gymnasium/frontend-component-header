import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import GymSettings from '../data/settings';
const settings = await GymSettings();

const CoursesNav = ({ intl }) => {
  return ( 
    <ul>
      {settings.navigation.courses.map(item => {
        return (
          <li><a key={`item-${item.title}`} href={item.href}>{item.title}</a></li>
        );
      })}
    </ul>
  )
};

CoursesNav.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CoursesNav);