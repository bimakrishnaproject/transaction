import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../../Style';

interface StatusItemProps {
  status: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ status }) => {
  const statusStyles = status === 'PENDING' ? styles.pending : styles.success;
  const statusText = status === 'PENDING' ? 'Pengecekan' : 'Berhasil';
  const textColor = status === 'PENDING' ? 'black' : 'white';

  return (
    <View style={statusStyles}>
      <Text style={[styles.textBold, { color: textColor }]}>{statusText}</Text>
    </View>
  );
};

export default StatusItem;
