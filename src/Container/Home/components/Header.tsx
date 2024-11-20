import React from 'react';
import { TextInput, Pressable, Text, View } from 'react-native';
import { Icon } from '../../../Components';

interface HeaderProps {
  query: string;
  onSearch: (text: string) => void;
  onFilter: () => void;
  selectedSort?: any;
}

const Header: React.FC<HeaderProps> = ({
  query,
  onSearch,
  onFilter,
  selectedSort,
}) => {
  return (
    <View
      style={{
        borderRadius: 8,
        padding: 5,
        backgroundColor: 'white',
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}
    >
      <Icon name="search" style={{ paddingHorizontal: 5 }} color="#BDBDBD" />
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={{ flex: 1 }}
        value={query}
        onChangeText={onSearch}
        numberOfLines={1}
      />
      <Pressable
        onPress={onFilter}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ flexShrink: 1, fontWeight: 'bold', color: '#f16b4b' }}>
          {selectedSort?.name}
        </Text>
        <Icon
          name="chevron-down"
          style={{ paddingHorizontal: 5 }}
          color="#f16b4b"
        />
      </Pressable>
    </View>
  );
};

export default Header;
