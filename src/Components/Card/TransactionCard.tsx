import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Icon } from '../Icon';
import { formatCurrency, formatDate } from '../../Utils';
import { styles } from '../../Style';
import StatusItem from './TransactionItem';

export default function TransactionCard({ index, onDetail, data, item }: any) {
  return (
    <Pressable
      key={index}
      onPress={onDetail}
      style={[
        styles.rowCenter,
        {
          marginTop: index > 0 ? 10 : 0,
          paddingBottom: index === data?.length - 1 ? 10 : 0,
        },
      ]}
    >
      <View
        style={[
          styles.rowCenter,
          styles.smallBorderRadius,
          {
            backgroundColor: item?.status === 'PENDING' ? '#f16b4b' : '#5ab385',
          },
        ]}
      >
        <View style={styles.leftIconCard} />
        <View style={styles.contentCard}>
          <View style={styles.fill}>
            <View style={styles.rowCenter}>
              <Text style={styles.textBold}>
                {item?.sender_bank?.toUpperCase()}
              </Text>
              <Icon name="arrow-right" size={10} style={styles.smallXPadding} />
              <Text style={styles.textBold}>
                {item?.beneficiary_bank?.toUpperCase()}
              </Text>
            </View>
            <View>
              <Text>{item?.beneficiary_name?.toUpperCase()}</Text>
            </View>
            <View style={styles.rowCenter}>
              <Text>{formatCurrency(item?.amount)}</Text>
              <Icon
                name="circle-filled"
                size={6}
                style={styles.smallXPadding}
              />
              <Text>{formatDate(item?.created_at)}</Text>
            </View>
          </View>
          {item?.status === 'PENDING' ? (
            <StatusItem status={item?.status} />
          ) : (
            <StatusItem status={item?.status} />
          )}
        </View>
      </View>
    </Pressable>
  );
}
