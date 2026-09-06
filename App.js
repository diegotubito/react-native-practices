import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import PackingList from './exercises/02-packing-list/PackingList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PackingList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
});
