import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import GymSettings from '../data/settings';
const settings = await GymSettings();

const AnonUserMenu = ({ intl }) => (
  <ul className="auth" role="list">
    <li key="unauth-item-1"><a
      href={`${getLoginRedirectUrl(global.location.href)}`}
    >
      {settings.navigation.auth.public[0].title}
    </a></li>
    <li key="unauth-item-2"><a className={settings.navigation.auth.public[1].type}
      href={`${getConfig().LMS_BASE_URL}/register?next=${encodeURIComponent(global.location.href)}`}
    >
      {settings.navigation.auth.public[1].title}
    </a></li>
  </ul>
);

AnonUserMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AnonUserMenu);
