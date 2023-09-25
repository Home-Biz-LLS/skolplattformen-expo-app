// import { Classmate } from '@skolplattformen/api';
import { Classmate } from '../libs/api/lib/types';
// import { useClassmates } from '@skolplattformen/hooks';
import {
  Divider,
  Icon,
  IconProps,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import { ListRenderItemInfo, RefreshControl, StyleSheet } from 'react-native';
import { fullName, guardians, sortByFirstName } from '../utils/peopleHelpers';
// import { translate } from '../utils/translation';
// import { useChild } from './childContext.component';
// import { ContactMenu } from './contactMenu.component';

interface ClassmatesProps {
  setSelected: (value?: number | null) => void;
}

export const Classmates = () => {
  // const child = useChild();

  // const { data, status, reload } = useClassmates(child);
  // const renderItemIcon = (props: IconProps) => (
  //   <Icon {...props} name="people-outline" />
  // );
  const [selected, setSelected] = React.useState<Classmate>();
  const renderItem = ({ item, index }: ListRenderItemInfo<Classmate>) => (
    <ListItem
      accessibilityLabel={`classmates.child ${index + 1}`}
      accessibilityHint={`classmates.contactsForGuardianFor', ${fullName(
        item,
      )}`}
      title={fullName(item)}
      onPress={() => setSelected(item)}
      description={guardians(item.guardians)}
      // accessoryLeft={renderItemIcon}
      // accessoryRight={() => (
      //   <ContactMenu
      //     contact={item}
      //     selected={item === selected}
      //     setSelected={() => setSelected(undefined)}
      //   />
      // )}
    />
  );

  const data = [
    {
      sisId: 'd004a-98d965a-45174-d2894ca2-f74ebcb',
      firstname: 'Darion',
      lastname: 'Gustafsson',
      guardians: [
        {
          email: 'Mike_Svensson@example.net',
          firstname: 'Tad',
          lastname: 'Eriksson',
          mobile: '07074791613',
          address: 'Martinvägen 50',
        },
      ],
      className: '2B',
    },
    {
      sisId: '54075-284de06-5664c-750b7b13-520fb61',
      firstname: 'Brock',
      lastname: 'Andersson',
      guardians: [
        {
          email: 'Brad56@example.org',
          firstname: 'Camren',
          lastname: 'Eriksson',
          mobile: '07075129297',
          address: undefined,
        },
      ],
      className: '2B',
    },
    {
      sisId: 'c1fc7-285f95d-c0f37-ea48a297-281e985',
      firstname: 'Eloy',
      lastname: 'Karlsson',
      guardians: [
        {
          email: 'Samara.Larsson@example.net',
          firstname: 'Ike',
          lastname: 'Gustafsson',
          mobile: '07077667407',
          address: undefined,
        },
      ],
      className: '2B',
    },
    {
      sisId: '212e9-8a2609c-b29c1-97a32bd8-5f84645',
      firstname: 'Kristina',
      lastname: 'Eriksson',
      guardians: [
        {
          email: 'Doug57@example.com',
          firstname: 'Rollin',
          lastname: 'Olsson',
          mobile: '07071720107',
          address: 'Höckertsvägen 2',
        },
      ],
      className: '2B',
    },
    {
      sisId: '01d21-ebc6f8b-526f8-7cfba0ab-26b9956',
      firstname: 'Cydney',
      lastname: 'Larsson',
      guardians: [
        {
          email: 'Davon6@example.org',
          firstname: 'Oleta',
          lastname: 'Svensson',
          mobile: '07079762186',
          address: undefined,
        },
      ],
      className: '2B',
    },
    {
      sisId: 'a45bb-8a481af-0ad12-7bd1fa4c-1eed4b1',
      firstname: 'Berneice',
      lastname: 'Persson',
      guardians: [
        {
          email: 'Milford_Johansson72@example.com',
          firstname: 'Arely',
          lastname: 'Johansson',
          mobile: '07071926019',
          address: 'Roslinvägen 36',
        },
      ],
      className: '2B',
    },
    {
      sisId: '32f31-039fbed-9060b-2d857c46-e47177d',
      firstname: 'Emory',
      lastname: 'Svensson',
      guardians: [
        {
          email: 'Alfredo_Nilsson96@example.org',
          firstname: 'Dolores',
          lastname: 'Andersson',
          mobile: '070752561937',
          address: 'Börjesonsvägen 6',
        },
      ],
      className: '2B',
    },
    {
      sisId: 'c9d0a-28c371d-e7be2-9781386b-6841eb0',
      firstname: 'Maryjane',
      lastname: 'Eriksson',
      guardians: [
        {
          email: 'Eula_Olsson@example.net',
          firstname: 'Wendy',
          lastname: 'Andersson',
          mobile: '07078513037',
          address: undefined,
        },
        {
          email: 'Lesley_Persson45@example.org',
          firstname: 'Erich',
          lastname: 'Persson',
          mobile: '070788191316',
          address: undefined,
        },
      ],
      className: '2B',
    },
    {
      sisId: 'e0f51-3fbd0be-5a8c3-ded7bbed-1d655d5',
      firstname: 'Rosendo',
      lastname: 'Eriksson',
      guardians: [
        {
          email: 'Mitchell.Gustafsson84@example.org',
          firstname: 'Mariam',
          lastname: 'Johansson',
          mobile: '07074537423',
          address: 'Molinvägen 29',
        },
        {
          email: 'Rachelle_Olsson@example.net',
          firstname: 'Shaniya',
          lastname: 'Persson',
          mobile: '070765878480',
          address: 'Molinvägen 29',
        },
      ],
      className: '2B',
    },
    {
      sisId: '298c2-46a24d4-548b9-3d1f90ee-4fae0ab',
      firstname: 'Sammy',
      lastname: 'Persson',
      guardians: [
        {
          email: 'Gloria_Svensson@example.com',
          firstname: 'Simeon',
          lastname: 'Olsson',
          mobile: '070753525610',
          address: 'Börjesonsvägen 43',
        },
      ],
      className: '2B',
    },
    {
      sisId: 'e7628-09352ea-b5d19-1af845b7-63b3e08',
      firstname: 'Abraham',
      lastname: 'Svensson',
      guardians: [
        {
          email: 'Erica_Johansson40@example.net',
          firstname: 'Carlotta',
          lastname: 'Nilsson',
          mobile: '070737951712',
          address: 'Aroseniusvägen 27',
        },
        {
          email: 'Malcolm_Gustafsson55@example.org',
          firstname: 'Ramon',
          lastname: 'Persson',
          mobile: '07070395626',
          address: 'Aroseniusvägen 27',
        },
      ],
      className: '2B',
    },
    {
      sisId: 'ae315-4696438-b3db6-8f0a5b39-74e34bd',
      firstname: 'Devante',
      lastname: 'Olsson',
      guardians: [
        {
          email: 'Alf.Johansson39@example.com',
          firstname: 'Schuyler',
          lastname: 'Gustafsson',
          mobile: '07070724289',
          address: undefined,
        },
      ],
      className: '2B',
    },
    {
      sisId: '0d812-350f1d5-323aa-d5d93cdd-406e337',
      firstname: 'Tyrell',
      lastname: 'Eriksson',
      guardians: [
        {
          email: 'Brennon.Svensson@example.com',
          firstname: 'Belle',
          lastname: 'Nilsson',
          mobile: '07070137347',
          address: undefined,
        },
      ],
      className: '2B',
    },
  ];

  return (
    <List
      style={styles.container}
      data={sortByFirstName(data)}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={
        <Text category="h5" style={styles.listHeader}>
          {data?.length
            ? `classmates.class ${data[0].className}`
            : 'classmates.class'}
        </Text>
      }
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
      // refreshControl={
      //   <RefreshControl refreshing={status === 'loading'} onRefresh={reload} />
      // }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    margin: 10,
    justifyContent: 'flex-start',
  },
  topContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listHeader: {
    paddingTop: 10,
    paddingLeft: 15,
  },
});
