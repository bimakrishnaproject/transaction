import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { TransactionCard } from '../../../Components';

interface ContentProps {
  data: any[];
  onDetail: (data: any) => void;
  isLoading?: boolean;
}

const Content: React.FC<ContentProps> = ({ data, onDetail, isLoading }) => {
  const renderItem = ({ item, index }: any) => {
    return (
      <TransactionCard
        index={index}
        onDetail={() => onDetail(item)}
        data={data}
        item={item}
      />
    );
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: { id: string }) => item.id}
    />
  );
};

export default Content;
