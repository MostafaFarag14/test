import {Button, Heading, VStack} from 'native-base';
import React from 'react';
import {I18nManager} from 'react-native';
import {useTranslation} from './contexts/IntlContext';
import RNRestart from 'react-native-restart';

function Layout() {
  const {translate} = useTranslation();
  return (
    <VStack>
      <Button
        onPress={() => {
          I18nManager.forceRTL(!I18nManager.isRTL);
          RNRestart.Restart();
        }}>
        7awel
      </Button>
      <Heading>{translate('welcomeToAwasalak')}</Heading>
    </VStack>
  );
}

export default Layout;
