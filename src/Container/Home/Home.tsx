import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { sort } from '../../Constants';
import { useFetchFlipData } from '../../Hooks/useFetchFlipData';
import { navigate } from '../../Navigators/utils';
import { sortData } from '../../Utils';
import { Content, FilterModal, Header } from './components';
import { styles } from '../../Style';

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
      const lowercasedQuery = query.toLowerCase();
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

      const sortedData = sortData(selectedSort, filtered);
      setFilteredData(sortedData);
    }
  }, [selectedSort, query, data]);

  const onChangeModal = (key: string, value: boolean) => {
    setModal((prevState: any) => ({ ...prevState, [key]: value }));
  };

  const onDetail = (data: any) => {
    navigate('TransactionDetailScreen', { data });
  };

  return (
    <>
      <View style={[styles.homeWrap]}>
        <Header
          selectedSort={selectedSort}
          query={query}
          onSearch={(text) => setQuery(text)}
          onFilter={() => onChangeModal('filter', true)}
        />

        <Content
          data={filteredData}
          onDetail={onDetail}
          isLoading={isLoading}
        />
        <FilterModal
          isVisible={modal?.filter}
          selectedSort={selectedSort}
          onSelectSort={setSelectedSort}
          onClose={() => onChangeModal('filter', false)}
        />
      </View>
    </>
  );
}
