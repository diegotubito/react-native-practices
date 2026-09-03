import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import UserDirectory from './exercises/01-user-directory/UserDirectory';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UserDirectory />
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
