import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import AnonUserMenu from './AnonUserMenu';
import AuthUserMenu from './AuthUserMenu';
import MainMenu from './MainMenu';
import AccountNav from './AccountNav';
import CoursesNav from './CoursesNav';

import GymSettings from '../data/settings';
const settings = await GymSettings();

const LinkedLogo = ({
  href,
  src,
  srcSet,
  alt,
  ...attributes
}) => (
  <a href={href} {...attributes}>
    <img src={src} srcSet={srcSet} alt={alt} />
  </a>
);

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const GymHeader = ({
  secondaryNav,
  courseOrg, courseNumber, courseTitle, intl, showUserDropdown,
}) => {
  const { authenticatedUser } = useContext(AppContext);

  const headerLogo = (
    <LinkedLogo
      className="logo"
      href={`${getConfig().MARKETING_SITE_BASE_URL}`}
      src={`${settings.cms_url}${settings.logos.main.white.src}`}
      srcSet={`${settings.cms_url}${settings.logos.main.white.srcset}`}
      alt={getConfig().SITE_NAME}
    />
  );



  return (
    <header className="site-header">
      <div className="container bg-dark-100">
        <nav className="main" role="navigation" aria-label="Main">
          {headerLogo}
          <div className="wrapper">
            <ul>
              <MainMenu />
            </ul>
            {showUserDropdown && authenticatedUser && (
              <AuthUserMenu
                username={authenticatedUser.username}
              />
            )}
            {showUserDropdown && !authenticatedUser && (
              <AnonUserMenu />
            )}
          </div>
        </nav>
        {secondaryNav && (
          <div className="container bg-neutral-900">
            <nav className="secondary" role="navigation" aria-label="Secondary">
              {secondaryNav === `account` && authenticatedUser && (
                <AccountNav
                  username={authenticatedUser.username}
                />
              )}
              {secondaryNav === `courses` && (
                <CoursesNav />
              )}
            </nav>
          </div>
        )}
      </div>
      <div className="course-header">
        <div className="container">
          <span className="d-block small m-0">{courseOrg} {courseNumber}</span>
          <span className="d-block m-0 font-weight-bold course-title">{courseTitle}</span>
        </div>
      </div>
    </header>
  );
};

GymHeader.propTypes = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool,
};

GymHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true,
};

export default injectIntl(GymHeader);
