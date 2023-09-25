// import { useNews } from '@skolplattformen/hooks'
import {
  Input,
  List,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import React, { useMemo, useState } from 'react';
import { TouchableOpacity, View, RefreshControl } from 'react-native';
import { Sizing } from '../styles';
// import {
//   renderSearchResultPreview,
//   useNewsListSearchResults,
// } from '../utils/search'
// import { translate } from '../utils/translation'
// import { useChild } from './childContext.component'
// import { CloseOutlineIcon, SearchIcon } from './icon.component'
import { NewsListItem } from './NewsListItem.component';

export const NewsList = () => {
  const styles = useStyleSheet(themedStyles);
  // const child = useChild()
  // const { data, status, reload } = useNews(child)

  // const [searchQuery, setSearchQuery] = useState('');

  const data = [
    {
      id: 'asdfasdfasdfa',
      author: 'Rektor Gustavsson',
      header: 'Välkommen till skolan!',
      intro:
        'Hej alla barn och föräldrar och välkomna till Storskolan! Här kommer en del information som kan vara bra att känna till inför första dagen.',
      body: '## Information till föräldrar \n\nSkolan börjar kl 08.00 och slutar 18.00. Kommer man sent eller blir sjuk så ska det anmälas via Skolplattformen. Se till så att dina barn har ätit frukost. Frukt är nyttigt! \n\n## Information till barn\n\nLek är tillåtet på rasterna men enbart på skolgården. Medtag ej egna leksaker. Tvätta händerna.',
      imageUrl: '6607f9b923edb6f85aa4417bab43c0f8.jpg',
      fullImageUrl:
        'https://timbro.se/app/uploads/2020/10/broman-skolplattformen-1280x752.jpg',
      imageAltText: 'Nyhetsbild. Bildtext ej tillgänglig.',
      published: 'dates.oneWeekAgo.toISO()',
      modified: 'dates.oneWeekAgo.toISO()',
    },
    {
      id: 'asdfabbuasdfs',
      author: 'Ada L.',
      header: 'App, App, App',
      intro: 'Denna vecka bygger vi appar!',
      body: '## Appar med öppen data \n\nDenna vecka har vi förmånen att få besök av några föräldrar som visar hur vi enkelt kan skapa appar som visar information ifrån öppna datakällor.\n\nEn fantastisk möjlighet att lära oss hur digitalisering skapar nya möjligheter i såväl skolan som arbetslivet.',
      imageUrl: '6607f9b923edb6f85aa4417bab43c0f8.jpg',
      fullImageUrl:
        'https://live.staticflickr.com/4063/4369776892_5cd42d27ba.jpg',
      imageAltText: 'Nyhetsbild. Bildtext ej tillgänglig.',
      published: 'dates.fourDaysAgo.toISO()',
      modified: 'dates.fourDaysAgo.plus({ minutes: 45 }).toISO()',
    },
    {
      id: 'asdfasdfasdfs',
      author: 'Magister Svensson',
      header: 'Läxor i veckan',
      intro: 'Alla elever måste göra sina läxor!',
      body: '## Läxor vecka 6 \n\nFöljande läxor är obligatoriska:\n\n- Antikens historia\n- Svenska stormaktstiden\n- Statistik A\n- Flerdimensionell analys, del 1',
      imageUrl: '6607f9b923edb6f85aa4417bab43c0f8.jpg',
      fullImageUrl:
        'https://www.mitti.se/_internal/cimg!0/ejf8efxee735ymm8tm40q3hhkl36sdt.jpeg',
      imageAltText: 'Nyhetsbild. Bildtext ej tillgänglig.',
      published: 'dates.oneWeekAgo.toISO()',
      modified: 'dates.oneWeekAgo.toISO()',
    },
    {
      id: 'asdfasdfasdfd',
      author: 'Information från Förskoleklass',
      header: 'Vinteraktiviteter',
      intro:
        'Vi kommer efter att förskoleklassen är slut arrangera olika vinteraktiviteter genom fridtidsverksamheten.',
      body: '##  Vänligen ta med hjälm, skridskor eller stjärtlapp.\n\n ![Bild](https://images.unsplash.com/photo-1495377701095-00261b767581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80)\n\n Alla barn måste ha hjälm på sig samt varma kläder. Vi kommer åka i backen bakom skolbyggnaden samt använda isen som spolats vid Mullsjöskolan. Personal kommer finnas på plats samt att vi erbjuda varm dryck, frukt och lek för de barn som ej har hjälm eller lämpligt åkdon.',
      imageUrl: '6607f9b923edb6f85aa4417bab43c0f8.jpg',
      fullImageUrl: 'https://unsplash.com/photos/yB_aiAWkm40',
      imageAltText: 'Nyhetsbild. Bildtext ej tillgänglig.',
      published: 'dates.oneWeekAgo.minus({ weeks: 2 }).toISO()',
      modified: 'dates.oneWeekAgo.minus({ weeks: 1 }).toISO()',
    },
    {
      id: 'asdfasdfasdfdsa',
      author: 'Köket',
      header: 'Ekologisk vecka i matsalen',
      intro: 'Ekologiska veckan i matsalen vecka 11',
      body: '##  Vi kommer ha tema jorden i matsalen och servera ekologisk mat från hela världen med tema jorden. Detta för att belysa att man kan använda alla delar av råvaorna. Det kommer erbjudas rätter från alla världsdelar som är producerat för jordens bästa. Smaklig spis hälsar Gunnel i köket med personal.',
      imageUrl: '6607f9b923edb6f85aa4417bab43c0f8.jpg',
      fullImageUrl: 'https://unsplash.com/photos/7K17MvT8qBg',
      imageAltText: 'Nyhetsbild. Bildtext ej tillgänglig.',
      published: 'dates.oneWeekAgo.minus({ weeks: 3 }).toISO()',
      modified: 'dates.oneWeekAgo.minus({ days: 2 }).toISO()',
    },
    {
      id: 'asdfasdfasdfbvdsa',
      author: 'Vaktmästaren',
      header: 'Klotter i korridoren (igen)',
      intro:
        'Ännu en gång har vi råka ut för skadegörelse i korridorerna vid åk 5',
      body: '##  Tyvärr har flera elever klottat på skåp och väggar vid åk5 skåpen. Detta är helt oacceptablet beteende och kostar skolan stora belopp att åtgärda. Vi ber alla föräldrar prata med sina barn om klotter samt att det var väldigt grovt spårkbruk. Personalen på skolan kommer att hålla extra uppsikt och vi har även pratat med en del av de inblandade eleverna i denna skadegörelse.\n\nPersonalen har även börjat forska på vad vissa av de skrivna orden betyder och Eva-Britt är förfasad över språkbruket samt vad de innebär. Bernt kommer att påbörja saneringen och återställningen av skadegörelsen samt vakta korridorerna nogrannare för att säkerställa att detta ej kommer ske igen.\n\n      Klotter\n\nUPPDATERING: Det som är skrivet om Sara är inte sant! ',
      imageUrl: '6607f9b923edb6f85aa4417bab43c0f8.jpg',
      fullImageUrl: 'https://unsplash.com/photos/SkbEZ16VywM',
      imageAltText: 'Nyhetsbild. Bildtext ej tillgänglig.',
      published: 'dates.oneWeekAgo.minus({ weeks: 4 }).toISO()',
      modified: 'dates.oneWeekAgo.minus({ weeks: 2 }).toISO()',
    },
  ];
  // const searchResults = useNewsListSearchResults(searchQuery)

  // const header = useMemo(
  //   () => (
  //     <Input
  //       accessibilityHint={translate('news.search.placeholder', {
  //         defaultValue: 'Sök alla nyheter...',
  //       })}
  //       placeholder={translate('news.search.placeholder', {
  //         defaultValue: 'Sök alla nyheter...',
  //       })}
  //       returnKeyType="search"
  //       status="basic"
  //       accessoryLeft={SearchIcon}
  //       onChangeText={setSearchQuery}
  //       value={searchQuery}
  //       style={styles.search}
  //       accessoryRight={(props) =>
  //         searchQuery.length > 0 ? (
  //           <TouchableOpacity onPress={() => setSearchQuery('')}>
  //             <CloseOutlineIcon {...props} />
  //           </TouchableOpacity>
  //         ) : (
  //           <View />
  //         )
  //       }
  //     />
  //   ),
  //   [searchQuery, styles.search]
  // )

  // if (searchQuery) {
  //   return (
  //     <List
  //       style={styles.container}
  //       contentContainerStyle={styles.contentContainer}
  //       keyboardDismissMode="on-drag"
  //       data={searchResults}
  //       ListHeaderComponent={header}
  //       renderItem={({ item: searchResult }) => (
  //         <NewsListItem key={searchResult.item.id} item={searchResult.item}>
  //           {renderSearchResultPreview(searchResult)}
  //         </NewsListItem>
  //       )}
  //       refreshControl={
  //         <RefreshControl
  //           refreshing={status === 'loading'}
  //           onRefresh={reload}
  //           tintColor={'color-basic-100'}
  //         />
  //       }
  //     />
  //   )
  // }

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardDismissMode="on-drag"
      data={data}
      // ListHeaderComponent={header}
      renderItem={({ item }) => <NewsListItem key={item.id} item={item} />}
      // refreshControl={
      // <RefreshControl
      //   refreshing={status === 'loading'}
      //   onRefresh={reload}
      //   tintColor={'color-basic-100'}
      // />
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
    paddingVertical: Sizing.t3,
    paddingHorizontal: Sizing.t3,
  },
  search: {
    backgroundColor: 'background-basic-color-1',
    borderRadius: 40,
    marginBottom: Sizing.t2,
  },
});
