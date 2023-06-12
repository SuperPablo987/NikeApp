import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Navigation from './src/components/navigation';

export default function App() {
  return (
    <Navigation />
    // <View style={styles.container}>
      

    //   <StatusBar style="auto" />
    // </View>
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
