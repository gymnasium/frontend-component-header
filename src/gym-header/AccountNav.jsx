import React from 'react';
import PropTypes from 'prop-types';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import messages from './messages';

const AccountNav = ({ intl, username }) => {
  return (
    <ul>
      <li><a href={`${getConfig().ACCOUNT_PROFILE_URL}/u/${username}`}>
        {intl.formatMessage(messages.profile)}
      </a></li>
      <li><a href={getConfig().ACCOUNT_SETTINGS_URL}>
        {intl.formatMessage(messages.account)}
      </a></li>
    </ul>
  );
};

AccountNav.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired,
};

export default injectIntl(AccountNav);
