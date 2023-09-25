// import { useNotifications } from '@skolplattformen/hooks';
import { List, StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { RefreshControl } from 'react-native';
import { Sizing } from '../styles';
// import { useChild } from './childContext.component';
import { Notification } from './Notification.component';

export const NotificationsList = () => {
  const styles = useStyleSheet(themedStyles);
  // const child = useChild();
  // const { data, status, reload } = useNotifications(child);

  const data = [
    {
      id: 'bfe19b-766db3-b38d99d321-bbed3d-506',
      sender: 'Planering och Bedömning',
      dateCreated: 'oneDayAgo.minus({ months: 6 }).toISO()',
      dateModified: 'fourDaysAgo.toISO()',
      message: 'Ett nytt inlägg i en lärlogg har skapats.',
      url: 'https://www.breakit.se/artikel/21423/har-ar-it-bolaget-bakom-haveriet-pa-skolplattformen',
      category: 'Lärlogg',
      type: 'avisering',
    },
    {
      id: '9025f9-a1e685-d7c4668f09-e14bc5-0ab',
      sender: 'Elevdokumentation',
      dateCreated: '2020-12-10T14:31:29.966Z',
      message:
        'Nu kan du ta del av ditt barns dokumentation av utvecklingssamtal',
      url: 'https://www.breakit.se/artikel/21404/kodaren-slog-larm-nu-akutstoppas-skolplattformen-i-stockholm',
      category: null,
      type: 'webnotify',
    },
    {
      id: 'a24061-1c9a4e-83dc479d7c-f44fe9-376',
      sender: 'Planering och Bedömning',
      dateCreated: '2020-06-10T12:18:00.000Z',
      message: 'Nu finns det en bedömning att titta på.',
      url: 'https://www.svt.se/nyheter/lokalt/stockholm/skolplattformen-i-stockholm-beratta-om-era-erfarenheter',
      category: 'Bedömning',
      type: 'avisering',
    },
    {
      id: '79d65c-1f8240-35c94296ec-9f4bdc-cea',
      sender: 'Planering och Bedömning',
      dateCreated: '2020-03-24T14:28:00.000Z',
      message: 'Nu finns det en bedömning att titta på.',
      url: 'https://www.breakit.se/artikel/18120/skolplattformen-kostade-700-miljoner-strid-med-entreprenor-om-varumarket',
      category: 'Bedömning',
      type: 'avisering',
    },
    {
      id: '9c5b7b-52c16d-b9fc2e8248-e4de76-279',
      sender: 'Planering och Bedömning',
      dateCreated: '2020-03-24T13:48:00.000Z',
      message: 'Nu finns det en bedömning att titta på.',
      url: 'https://www.mitti.se/nyheter/forskolans-tur-att-fa-kritiserade-skolplattformen-app/lmsau!5338007/',
      category: 'Bedömning',
      type: 'avisering',
    },
  ];

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={info => <Notification key={info.item.id} item={info.item} />}
      // refreshControl={
      //   <RefreshControl refreshing={status === 'loading'} onRefresh={reload} />
      // }
    />
  );
};

const themedStyles = StyleService.create({
  container: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: Sizing.t3,
    paddingVertical: Sizing.t3,
  },
});
