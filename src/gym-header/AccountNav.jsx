import React from 'react';
import PropTypes from 'prop-types';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

const AccountNav = ({ intl, username }) => {
  return (
    <ul role="list">
      <li key="item-1"><a href={`${getConfig().ACCOUNT_PROFILE_URL}/u/${username}`}>
        Profile
      </a></li>
      <li key="item-2"><a href={getConfig().ACCOUNT_SETTINGS_URL}>
        Account
      </a></li>
    </ul>
  );
};

AccountNav.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired,
};

export default injectIntl(AccountNav);
