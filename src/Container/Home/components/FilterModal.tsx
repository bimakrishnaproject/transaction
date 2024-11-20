import React from 'react';
import { Pressable, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { sort } from '../../../Constants';
import { Icon } from '../../../Components';

interface FilterModalProps {
  isVisible: boolean;
  selectedSort: any;
  onSelectSort: (sort: any) => void;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isVisible,
  selectedSort,
  onSelectSort,
  onClose,
}) => {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          paddingHorizontal: 15,
        }}
      >
        {sort?.map((el, i) => (
          <Pressable
            key={i}
            onPress={() => {
              onSelectSort(el);
              onClose();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: i === 4 ? 30 : 0,
            }}
          >
            <Icon
              name={el?.id === selectedSort?.id ? 'radio-active' : 'radio'}
              color="#f16b4b"
            />
            <Text style={{ marginLeft: 10 }}>{el?.name}</Text>
          </Pressable>
        ))}
      </View>
    </ReactNativeModal>
  );
};

export default FilterModal;
