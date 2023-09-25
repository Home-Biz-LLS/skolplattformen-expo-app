import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import { MenuListItem } from './components/lunch/MenuListItem';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider
      {...eva}
      // @ts-expect-error Unknown error
      // customMapping={customMapping}
      theme={'#fff'}
    >
      <MenuListItem />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
