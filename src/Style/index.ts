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
  textBold: {
    fontWeight: '800',
  },
  smallMarginLeft: {
    marginLeft: 10,
  },
  regularPadding: {
    padding: 15,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallXPadding: {
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
  largeMarginTop: {
    marginTop: 20,
  },
  fill: {
    flex: 1,
  },
  regularFill: {
    flex: 1.5,
  },
  rowWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  halfWidth: { width: '50%' },
  filterText: { flexShrink: 1, fontWeight: 'bold', color: '#f16b4b' },
  justifyCenter: { justifyContent: 'center' },
  headerWrap: {
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  homeWrap: {
    backgroundColor: '#f5faf8',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  smallBorderRadius: {
    borderRadius: 8,
  },
  leftIconCard: { width: 6 },
  contentCard: {
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  pending: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#f16b4b',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  success: {
    backgroundColor: '#5ab385',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  filterModalWrap: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  xlargeMarginTop: {
    marginTop: 30,
  },
});
