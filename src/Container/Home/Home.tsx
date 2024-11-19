import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { navigate } from '../../Navigators/utils';

export default function Home() {
  const [modal, setModal] = useState({
    filter: false,
  });

  const onChangeModal = (key: string, value: boolean) => {
    setModal((prevState: any) => ({ ...prevState, [key]: value }));
  };

  const onDetail = (data: any) => {
    navigate('TransactionDetailScreen', { data });
  };

  return (
    <View style={[{ backgroundColor: '#f5faf8', flex: 1, padding: 10 }]}>
      <View
        style={[
          {
            borderRadius: 8,
            padding: 5,
            backgroundColor: 'white',
            elevation: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        ]}
      >
        <TextInput
          placeholder="Cari nama, bank, atau normal"
          style={{ flex: 1 }}
        />
        <Pressable
          onPress={() => onChangeModal('filter', true)}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ flexShrink: 1, fontWeight: 'bold', color: '#f16b4b' }}>
            URUTKAN
          </Text>
        </Pressable>
      </View>

      <ScrollView>
        <FlatList data={['cek', 'success']} renderItem={renderItem} />
      </ScrollView>
      {renderModal()}
    </View>
  );

  function renderModal() {
    return (
      <>
        <ReactNativeModal
          isVisible={modal?.filter}
          onBackButtonPress={() => onChangeModal('filter', false)}
          onBackdropPress={() => onChangeModal('filter', false)}
        >
          <View
            style={[
              {
                backgroundColor: 'white',
                borderRadius: 8,
                paddingHorizontal: 15,
              },
            ]}
          >
            {[
              'URUTKAN',
              'Nama A-Z',
              'Nama Z-A',
              'Tanggal Terbaru',
              'Tanggal Terlama',
            ]?.map((el, i) => {
              return (
                <View
                  style={[
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 30,
                      marginBottom: i === 4 ? 30 : 0,
                    },
                  ]}
                >
                  <Text style={[{ marginLeft: 10 }]}>{el}</Text>
                </View>
              );
            })}
          </View>
        </ReactNativeModal>
      </>
    );
  }

  function renderItem({ item }: any) {
    return (
      <Pressable
        onPress={() => onDetail(item)}
        style={[{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }]}
      >
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: item === 'cek' ? '#f16b4b' : '#5ab385',
              borderRadius: 8,
            },
          ]}
        >
          <View style={[{ width: 10 }]} />
          <View
            style={[
              {
                padding: 15,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              },
            ]}
          >
            <View>
              <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={{ fontWeight: 'bold' }}>Permata</Text>
                <Text style={{ fontWeight: 'bold' }}>BNI</Text>
              </View>
              <Text>- SYIFA SALSABYLA</Text>
              <Text>Rp10.082 • 8 April 2020</Text>
            </View>
            {item === 'cek' ? (
              <View>
                <View
                  style={[
                    {
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor: '#f16b4b',
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    },
                  ]}
                >
                  <Text style={{ fontWeight: 'bold' }}>Pengecekan</Text>
                </View>
              </View>
            ) : (
              <View
                style={[
                  {
                    backgroundColor: '#5ab385',
                    borderRadius: 8,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                  },
                ]}
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
}
