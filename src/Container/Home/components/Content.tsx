import React from 'react';
import { FlatList } from 'react-native';
import { TransactionCard } from '../../../Components';

interface ContentProps {
  data: any[];
  onDetail: (data: any) => void;
}

const Content: React.FC<ContentProps> = ({ data, onDetail }) => {
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
