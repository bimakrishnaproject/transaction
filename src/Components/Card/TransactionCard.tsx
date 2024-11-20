import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Icon } from '../Icon';
import { formatCurrency, formatDate } from '../../Utils';

export default function TransactionCard({ index, onDetail, data, item }: any) {
  return (
    <Pressable
      key={index}
      onPress={onDetail}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: index > 0 ? 10 : 0,
        paddingBottom: index === data?.length - 1 ? 10 : 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: item?.status === 'PENDING' ? '#f16b4b' : '#5ab385',
          borderRadius: 8,
        }}
      >
        <View style={{ width: 6 }} />
        <View
          style={{
            padding: 15,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold' }}>
                {item?.sender_bank?.toUpperCase()}
              </Text>
              <Icon
                name="arrow-right"
                size={10}
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ fontWeight: 'bold' }}>
                {item?.beneficiary_bank?.toUpperCase()}
              </Text>
            </View>
            <View>
              <Text>{item?.beneficiary_name?.toUpperCase()}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>{formatCurrency(item?.amount)}</Text>
              <Icon
                name="circle-filled"
                size={6}
                style={{ paddingHorizontal: 5 }}
              />
              <Text>{formatDate(item?.created_at)}</Text>
            </View>
          </View>
          {item?.status === 'PENDING' ? (
            <View
              style={{
                borderRadius: 8,
                borderWidth: 2,
                borderColor: '#f16b4b',
                paddingHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Pengecekan</Text>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: '#5ab385',
                borderRadius: 8,
                paddingHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text style={{ fontWeight: 'bold', color: 'white' }}>
                Berhasil
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}
