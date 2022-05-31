import {IntlShape} from 'react-intl';

export interface IntlCustomShape extends IntlShape {
  locale: Locale;
}

export type Locale = 'AR' | 'EN';
