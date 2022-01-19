import React from 'react';
import {TouchableOpacity, View, StyleSheet} from "react-native";
import Svg, {Path} from "react-native-svg";

const CheckBox = ({isChecked, setIsChecked}) => {
  return (
    <TouchableOpacity onPress={setIsChecked} activeOpacity={0.6} style={[styles.check, isChecked && {backgroundColor: '#77B9E3'}]}>
      {isChecked && <Svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.1875 2.06299L6.3125 9.93764L2.375 6.00049" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>

      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  check: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#77B9E3',
    width: 21,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  }
})

export default CheckBox;
