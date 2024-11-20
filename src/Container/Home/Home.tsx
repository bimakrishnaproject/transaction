import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { sort } from '../../Constants';
import { useFetchFlipData } from '../../Hooks/useFetchFlipData';
import { navigate } from '../../Navigators/utils';
import { sortData } from '../../Utils';
import { Content, FilterModal, Header } from './components';

export default function Home() {
  const { data, isLoading, error } = useFetchFlipData();
  const [modal, setModal] = useState({
    filter: false,
  });
  const [selectedSort, setSelectedSort] = useState(sort[0]);
  const [filteredData, setFilteredData] = useState(data);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (data) {
      const sortedData = sortData(selectedSort, data);
      setFilteredData(sortedData);
    }
  }, [selectedSort, data]);

  const onChangeModal = (key: string, value: boolean) => {
    setModal((prevState: any) => ({ ...prevState, [key]: value }));
  };

  const onDetail = (data: any) => {
    navigate('TransactionDetailScreen', { data });
  };

  const onHandleSearch = (text: string) => {
    setQuery(text);
    setSelectedSort(sort[0]);
    const lowercasedQuery = text.toLowerCase();
    const filtered = data.filter((item) => {
      const beneficiaryName = item?.beneficiary_name?.toLowerCase() || '';
      const beneficiaryBank = item?.beneficiary_bank?.toLowerCase() || '';
      const senderBank = item?.sender_bank?.toLowerCase() || '';
      const amount = item?.amount?.toString() || '';

      return (
        beneficiaryName.includes(lowercasedQuery) ||
        beneficiaryBank.includes(lowercasedQuery) ||
        senderBank.includes(lowercasedQuery) ||
        amount.includes(lowercasedQuery)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <View
      style={[
        {
          backgroundColor: '#f5faf8',
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 10,
        },
      ]}
    >
      <Header
        selectedSort={selectedSort}
        query={query}
        onSearch={onHandleSearch}
        onFilter={() => onChangeModal('filter', true)}
      />

      <Content data={filteredData} onDetail={onDetail} />
      <FilterModal
        isVisible={modal?.filter}
        selectedSort={selectedSort}
        onSelectSort={setSelectedSort}
        onClose={() => onChangeModal('filter', false)}
      />
    </View>
  );
}
