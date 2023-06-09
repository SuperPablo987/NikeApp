import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "../screens/ProductsScreens";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ShoppingCart from "../screens/ShoppingCart";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductsScreen} />
            </Stack.Navigator>
                
        </NavigationContainer>
    );
};

export default Navigation;