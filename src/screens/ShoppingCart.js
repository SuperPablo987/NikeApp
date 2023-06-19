import { Text, View, FlatList, StyleSheet, Pressable, ActivityIndicator, Alert } from 'react-native';
// import cart from '../data/cart'; //dummy data
import CartListItem from '../components/CartListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubtotal, selectTotalPrice, cartSlice } from '../store/cartSlice';
import { useCreateOrderMutation } from '../store/apiSlice';

const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const totalCost = useSelector(selectTotalPrice);

    return (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>US$ {subtotal}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>US$ {deliveryFee} </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>US$ {totalCost} </Text>
            </View>
        </View>
    );
};

const ShoppingCart = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const totalCost = useSelector(selectTotalPrice);
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    const [createOrder, {data, error, isLoading}] = useCreateOrderMutation();

    const onCreateOrder = async () => {
        const result = await createOrder({
            items: cartItems,
            subtotal,
            deliveryFee,
            totalCost,
            customer: {
                name: "Vadim",
                address: "My Home",
                email: 'vadim@notjust.dev',
            },
        });

        if (result.data?.status === 'OK'){
            Alert.alert(
                "Order has been submitted",
                `Your order reference is: ${result.data.data.ref}`
            );
            dispatch(cartSlice.actions.clear());
        }
    };

    return (
        <>
        <FlatList 
            data={cartItems} 
            renderItem={({ item }) => <CartListItem cartItem={item} />}
            ListFooterComponent={ShoppingCartTotals}
        />
        <Pressable onPress={onCreateOrder}
            style={styles.button}>
                <Text style={styles.buttonText}>
                    Checkout 
                    {isLoading && <ActivityIndicator />}
                </Text>
        </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text:{
        fontSize: 16,
        color: 'gray',
    },
    textBold:{
        fontSize: 16,
        fontWeight: '500',
    },
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: "center",
      },
      buttonText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
      },
});

export default ShoppingCart;