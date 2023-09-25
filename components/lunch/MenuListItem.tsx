import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { Sizing, Typography } from '../../styles';

export const MenuListItem = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEST TITLE</Text>
      <Text category="p1">TEST DESCRIPTION</Text>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    width: '100%',
    paddingVertical: Sizing.t3,
  },
  topContainer: {
    margin: Sizing.t1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...Typography.header,
    marginBottom: Sizing.t1,
  },
});
