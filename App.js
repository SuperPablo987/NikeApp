import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from './src/data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Image 
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            }}
            style={styles.image}
          />
        )}
      />
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: "100%", 
  aspectRatio: 1,
  },
});
