import React from 'react';
import { TextInput, Pressable, Text, View, Platform } from 'react-native';
import { Icon } from '../../../Components';
import { styles } from '../../../Style';

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
      style={[
        styles.headerWrap,
        {
          marginTop: Platform.OS === 'ios' ? 15 : 0,
          paddingVertical: Platform.OS === 'ios' ? 20 : 5,
          padding: Platform.OS === 'android' ? 5 : 0,
        },
      ]}
    >
      <Icon
        name="search"
        style={{ paddingHorizontal: Platform.OS === 'ios' ? 10 : 5 }}
        color="#BDBDBD"
      />
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={{ flex: 1 }}
        value={query}
        onChangeText={onSearch}
        numberOfLines={1}
      />
      <Pressable
        onPress={onFilter}
        style={[styles.rowCenter, styles.smallXPadding, styles.justifyCenter]}
      >
        <Text style={styles.filterText}>{selectedSort?.name}</Text>
        <Icon
          name="chevron-down"
          style={styles.smallXPadding}
          color="#f16b4b"
        />
      </Pressable>
    </View>
  );
};

export default Header;
