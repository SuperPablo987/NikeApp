import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Navigation from './src/components/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { StripeProvider } from '@stripe/stripe-react-native';

const STRIPE_KEY = 'pk_test_51NIzRCALuumpFykvQvLmMcX20waeckSrZKQO1lqehT9BLJnk96sz17bzlHgPZv9McqWS9r3BAZyE964PziMooktZ00gknzEAv4';

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <Navigation />
      </StripeProvider>
      
      <StatusBar style="auto" />


    </Provider>
  );
}


