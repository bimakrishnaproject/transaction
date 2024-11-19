import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Home } from '../Container/Home';
import { TransactionDetail } from '../Container/Detail';

interface INavigationOption {
  name: string;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}

export const authorizedScreen: Array<INavigationOption> = [
  {
    name: 'HomeScreen',
    component: Home,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'TransactionDetailScreen',
    component: TransactionDetail,
    options: {
      headerShown: false,
    },
  },
];
