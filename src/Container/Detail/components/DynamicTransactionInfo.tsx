import React from 'react';
import { View } from 'react-native';
import { styles } from '../../../Style';
import TransactionInfoItem from './TransactionInfoItem';

const DynamicTransactionInfo = ({
  items,
}: {
  items: { label: string; value: string | number }[];
}) => {
  return (
    <>
      <View style={[styles.rowWrap]}>
        {items.map((item, index) => (
          <TransactionInfoItem
            label={item.label}
            value={item.value}
            style={[styles.largeMarginTop, styles.halfWidth]}
          />
        ))}
      </View>
    </>
  );
};

export default DynamicTransactionInfo;
