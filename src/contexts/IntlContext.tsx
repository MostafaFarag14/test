import React, {ReactNode} from 'react';
import {IntlProvider, useIntl} from 'react-intl';
import Arabic from '../../languages/ar.json';
import English from '../../languages/en.json';
import {IntlCustomShape, Locale} from '../utils/types';

export type IntlId = keyof typeof English;

export function useTranslation() {
  const {formatMessage, locale} = useIntl() as IntlCustomShape;

  return {
    translate: (id: IntlId) => formatMessage({id: id}),
    locale,
  };
}

function IntlWrapper({
  locale = 'AR',
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  let messages: Record<string, string>;

  switch (locale) {
    case 'AR':
      messages = Arabic;
      break;
    case 'EN':
      messages = English;
      break;

    default:
      break;
  }

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      onError={() => {
        return; // To elemenate [missing message translation] errors in console when changing to arabic
      }}>
      {children}
    </IntlProvider>
  );
}

export default IntlWrapper;
