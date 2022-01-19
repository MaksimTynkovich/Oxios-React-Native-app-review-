import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {mainStyles, normalize} from "../../styles/mainStyles";
import Svg, {Path} from "react-native-svg";
import CheckBox from "../../components/CheckBox/CheckBox";
import {LinearGradient} from "expo-linear-gradient";

const PlaylistBlock = ({playlist}) => {
  const [onEdit, setOnEdit] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])
  return (
    <View style={mainStyles.blockContainer}>
      <View style={[mainStyles.row, {justifyContent: 'space-between'}]}>
        <Text style={mainStyles.blockTitle}>My playlist 2</Text>
      </View>
      <View style={[mainStyles.row,
        {justifyContent: 'space-between', marginBottom: normalize(19), marginTop: normalize(10)}]}>
        <TextInput id={'registration'}
                   style={[mainStyles.blockInput, {
                     width: '50%',
                     paddingVertical: normalize(5),
                     fontSize: normalize(16),
                     marginBottom: 0,
                   }]}
                   placeholder={'Type name here'} placeholderTextColor={'#525252'}/>
        <View style={mainStyles.row}>
          {!onEdit ? <TouchableOpacity onPress={() => setOnEdit(true)}
                                       style={[mainStyles.blockButton, {backgroundColor: '#6DAA90'}]}>
            <Text style={mainStyles.blockButton__label}>Edit</Text>
          </TouchableOpacity> : <TouchableOpacity onPress={() => setOnEdit(false)}
                                                  style={[mainStyles.blockButton, {backgroundColor: '#6DAA90'}]}>
            <Text style={mainStyles.blockButton__label}>Save</Text>
          </TouchableOpacity>}
          <TouchableOpacity onPress={() => setOnEdit(false)}
                                                  style={[mainStyles.blockButton,
                                                    {backgroundColor: '#DA8181', marginLeft: normalize(6)}]}>
            <Text style={mainStyles.blockButton__label}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      {[10, 20, 10].map((item, index) => (
        <View style={[mainStyles.row, {justifyContent: "space-between", marginTop: normalize(5)}]}>
          {onEdit && <CheckBox isChecked={selectedItems.indexOf(index) !== -1}
                               setIsChecked={() => {
                                 if(selectedItems.indexOf(index) !== -1) {
                                   setSelectedItems([...selectedItems].filter(s => s !== index))
                                 } else {
                                   setSelectedItems([...selectedItems, index])
                                 }
                               }} />}
          <Text style={styles.name}>350 ETHERIC BODY</Text>
          <View style={mainStyles.row}>
            <TouchableOpacity style={[mainStyles.blockButton, {backgroundColor: "#37A7A0", marginRight: normalize(6)}]}>
              <Text style={mainStyles.blockButton__label}>
                {item} min
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M2.8125 9H15.1875" stroke="#37A7A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M9 2.8125V15.1875" stroke="#37A7A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M1 1H13" stroke="#37A7A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
      )) }
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 31,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D5EBE9',
    borderRadius: 6,
    marginLeft: normalize(6)
  }
})

export default PlaylistBlock;
