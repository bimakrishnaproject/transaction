import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../Style';

interface TransactionInfoItemProps {
  label: string;
  value: string | number;
  style?: any;
}

const TransactionInfoItem: React.FC<TransactionInfoItemProps> = ({
  label,
  value,
  style,
}) => (
  <View style={style}>
    <Text style={styles.itemLabel}>{label}</Text>
    <Text>{value}</Text>
  </View>
);

export default TransactionInfoItem;
