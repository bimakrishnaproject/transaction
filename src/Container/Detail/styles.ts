import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5faf8',
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 9,
    elevation: 2,
    paddingVertical: 5,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#F9F9F9',
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIdText: {
    fontWeight: '800',
  },
  icon: {
    marginLeft: 10,
  },
  infoContainer: {
    padding: 15,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankText: {
    fontWeight: '800',
  },
  iconArrow: {
    paddingHorizontal: 5,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  itemLabel: {
    fontWeight: '800',
    flexShrink: 1,
  },
  itemValue: {
    flexShrink: 1,
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  closeButtonText: {
    fontWeight: '800',
    color: '#f16b4b',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
