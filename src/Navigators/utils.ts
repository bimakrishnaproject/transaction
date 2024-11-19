import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  TransactionDetailScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function navigateBack() {
  navigationRef.dispatch(CommonActions.goBack());
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index,
        routes,
      })
    );
  }
}
