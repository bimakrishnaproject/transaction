import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Icon } from '../../Components';
import { TransactionDetailProps } from '../../Interface';
import { navigateBack } from '../../Navigators/utils';
import { styles } from '../../Style';
import { formatCurrency, formatDate } from '../../Utils';
import { DynamicTransactionInfo } from './components';

const TransactionDetail: React.FC<TransactionDetailProps> = ({ route }) => {
  const { data } = route.params;

  const onHandleCopy = () => {
    Clipboard.setString(data?.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.textBold}>ID TRANSAKSI: #{data?.id}</Text>
          <Pressable onPress={onHandleCopy}>
            <Icon name="copy" color="#f16b4b" style={styles.smallMarginLeft} />
          </Pressable>
        </View>
        <View
          style={[
            styles.header,
            styles.spaceBetween,
            { borderColor: '#E6E6E6' },
          ]}
        >
          <Text style={{ fontWeight: 'bold' }}>DETAIL TRANSAKSI</Text>
          <Pressable onPress={navigateBack} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Tutup</Text>
          </Pressable>
        </View>
        <View style={styles.regularPadding}>
          <View style={styles.rowCenter}>
            <Text style={styles.textBold}>
              {data?.sender_bank?.toUpperCase()}
            </Text>
            <Icon name="arrow-right" size={10} style={styles.smallXPadding} />
            <Text style={styles.textBold}>
              {data?.beneficiary_bank?.toUpperCase()}
            </Text>
          </View>
          <DynamicTransactionInfo
            items={[
              {
                label: `- ${data?.beneficiary_name?.toUpperCase()}`,
                value: data?.account_number,
              },
              { label: 'NOMINAL', value: formatCurrency(data?.amount) },
              { label: 'BERITA TRANSFER', value: data?.remark },
              { label: 'KODE UNIK', value: data?.unique_code },
              { label: 'WAKTU DIBUAT', value: formatDate(data?.created_at) },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;
