import { MenuItem } from '../../libs/api/lib/types';
import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { Sizing, Typography } from '../../styles';

interface MenuListItemProps {
  item: MenuItem;
}

const menu = [
  {
    title: 'Måndag',
    description: 'Kebabgryta ris<br/>Ratatouille med kikärter',
  },
  {
    title: 'Tisdag',
    description: 'Ost-broccolisås pasta Fusilli',
  },
  {
    title: 'Onsdag',
    description: 'Köttbullar potatis gräddsås lingon<br/>Falafel',
  },
  {
    title: 'Torsdag',
    description: 'Prinskorv potatis rödbetssallad +<br/>Inlagd och senapssill',
  },
  {
    title: 'Fredag',
    description:
      'Avslutning  Varmkorv bröd ketchup senap<br/>( F-3 i matsalen från 10:30 )',
  },
];

export const MenuListItem = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      {menu.map(item => (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <Text category="p1">{item.description}</Text>
        </>
      ))}
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
