import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { navigateBack } from '../../Navigators/utils';

export default function TransactionDetail(props: any) {
  return (
    <View style={[{ backgroundColor: '#f5faf8', flex: 1, padding: 10 }]}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 9,
          elevation: 2,
          paddingVertical: 5,
        }}
      >
        <View
          style={{ padding: 15, borderBottomWidth: 1, borderColor: 'grey' }}
        >
          <Text style={{ fontWeight: 'bold' }}>
            ID TRANSAKSI: #FT4923647392643
          </Text>
        </View>
        <View
          style={[
            {
              padding: 15,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderColor: 'grey',
            },
          ]}
        >
          <Text style={{ fontWeight: 'bold' }}>DETAIL TRANSAKSI</Text>
          <Pressable
            onPress={navigateBack}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}
          >
            <Text
              style={{ flexShrink: 1, fontWeight: 'bold', color: '#f16b4b' }}
            >
              Tutup
            </Text>
          </Pressable>
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>Permata - BNI</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <View style={{ flex: 1.5 }}>
              <Text style={{ fontWeight: 'bold' }}>- SYIFA SALSABYLA</Text>
              <Text>03493049304930</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>NOMINAL</Text>
              <Text>Rp10.838</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <View style={{ flex: 1.5 }}>
              <Text style={{ fontWeight: 'bold' }}>BERITA TRANSFER</Text>
              <Text>coba mbanking yey</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>KODE UNIK</Text>
              <Text>50</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>WAKTU DIBUAT</Text>
              <Text>8 April 2020</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
