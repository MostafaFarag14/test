/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// Fix Intl issue
import 'intl';
import 'intl/locale-data/jsonp/en';

import React from 'react';
import {I18nManager} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import IntlWrapper from './src/contexts/IntlContext';
import Layout from './src/Layout';

const App = () => {
  console.log(I18nManager.isRTL);
  return (
    <NativeBaseProvider>
      <IntlWrapper locale={I18nManager.isRTL ? 'AR' : 'EN'}>
        <Layout />
      </IntlWrapper>
    </NativeBaseProvider>
  );
};

export default App;
