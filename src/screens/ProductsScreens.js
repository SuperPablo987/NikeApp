import { StyleSheet, Text, View, Image, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
import { useGetProductsQuery } from '../store/apiSlice';

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();

    const dispatch = useDispatch();

    // dummy data
    // const products = useSelector((state) => state.products.products);

    const { data, isLoading, error } = useGetProductsQuery();

    if (isLoading) {
        return <ActivityIndicator />;
      }

    if (error) {
      return <Text>Error fetching products: {error.error}</Text>;
    }

    // console.log(data); // initial testing
    const products = data.data;

    return (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Pressable 
              onPress={() => {
                // update selectedProduct (dummy data method commented out)
                // dispatch(productsSlice.actions.setSelectedProduct(item.id));

                navigation.navigate('Product Details', {id: item._id});
              }}
              style={styles.itemContainer}
            >
              <Image source={{ uri: item.image}} style={styles.image} />
            </Pressable>
          )}
          numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
      width: "50%",
      padding: 1,
    },
    image: {
      width: "100%", 
      aspectRatio: 1,
    },
  });

  export default ProductsScreen;