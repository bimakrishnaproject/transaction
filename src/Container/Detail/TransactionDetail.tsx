import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { navigateBack } from '../../Navigators/utils';
import { Icon } from '../../Components';
import { styles } from './styles';
import { TransactionDetailProps } from '../../Interface';
import TransactionInfoItem from './components/TransactionInfoItem';
import Clipboard from '@react-native-clipboard/clipboard';
import { formatCurrency, formatDate } from '../../Utils';

const TransactionDetail: React.FC<TransactionDetailProps> = ({ route }) => {
  const { data } = route.params;

  const onHandleCopy = () => {
    Clipboard.setString(data?.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.transactionIdText}>
            ID TRANSAKSI: #{data?.id}
          </Text>
          <Pressable onPress={onHandleCopy}>
            <Icon name="copy" color="#f16b4b" style={styles.icon} />
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
        <View style={styles.infoContainer}>
          <View style={styles.rowCenter}>
            <Text style={styles.bankText}>
              {data?.sender_bank?.toUpperCase()}
            </Text>
            <Icon name="arrow-right" size={10} style={styles.iconArrow} />
            <Text style={styles.bankText}>
              {data?.beneficiary_bank?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.transactionItem}>
            <TransactionInfoItem
              label={`- ${data?.beneficiary_name?.toUpperCase()}`}
              value={data?.account_number}
              style={{ flex: 1.5 }}
            />
            <TransactionInfoItem
              label={'NOMINAL'}
              value={formatCurrency(data?.amount)}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles.transactionItem}>
            <TransactionInfoItem
              label={'BERITA TRANSFER'}
              value={data?.remark}
              style={{ flex: 1.5 }}
            />
            <TransactionInfoItem
              label={'KODE UNIK'}
              value={data?.unique_code}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles.transactionItem}>
            <TransactionInfoItem
              label={'WAKTU DIBUAT'}
              value={formatDate(data?.created_at)}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;
