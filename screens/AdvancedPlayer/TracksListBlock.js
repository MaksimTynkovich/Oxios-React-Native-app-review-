import React from 'react';
import {mainStyles, normalize} from "../../styles/mainStyles";
import {Text, TextInput, TouchableOpacity, View} from "react-native";

const TracksListBlock = () => {
  return (
    <View style={mainStyles.blockContainer}>
      <View style={[mainStyles.row, {justifyContent: 'space-between'}]}>
        <Text style={mainStyles.blockTitle}>Tracks list</Text>
        <TextInput style={[mainStyles.blockInput, {
                     width: '45%',
                     paddingVertical: normalize(5),
                     fontSize: normalize(16),
                     marginBottom: 0,
                   }]}
                   placeholder={'Search by name'} placeholderTextColor={'#525252'}/>
        <TouchableOpacity style={[mainStyles.blockButton, {backgroundColor: '#EEA942'}]}>
          <Text style={mainStyles.blockButton__label}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TracksListBlock;
