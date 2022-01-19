import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {mainStyles, normalize} from "../../styles/mainStyles";
import {Formik} from "formik";
import {normalizeText} from "react-native-elements/dist/helpers";

const IndividualRecordBlock = () => {
  return (
    <View style={mainStyles.blockContainer}>
      <View style={[mainStyles.row, {justifyContent: 'space-between'}]}>
        <Text style={mainStyles.blockTitle}>User card</Text>
        <View style={mainStyles.row}>
          <TouchableOpacity style={[mainStyles.blockButton, {backgroundColor: '#6DAA90', marginRight: 5}]}>
            <Text style={mainStyles.blockButton__label}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[mainStyles.blockButton, {backgroundColor: '#DC6068'}]}>
            <Text style={mainStyles.blockButton__label}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Formik
        initialValues={{
          registration: '',
          name: '',
          address: '',
          phone: '',
          email: '',
          birthDate: '',
          other: ''
        }}
      >
        {({values, handleChange, handleSubmit}) => {
          return <View style={{marginTop: 15}}>
            <TextInput value={values.registration} id={'registration'} onChangeText={handleChange}
                       style={mainStyles.blockInput}
                       placeholder={'Registration date'} placeholderTextColor={'#525252'}/>
            <TextInput value={values.name} id={'name'} onChangeText={handleChange} style={mainStyles.blockInput}
                       placeholder={'Name'} placeholderTextColor={'#525252'}/>
            <TextInput value={values.address} id={'address'} onChangeText={handleChange}
                       style={mainStyles.blockInput}
                       placeholder={'Address'} placeholderTextColor={'#525252'}/>
            <TextInput value={values.phone} id={'phone'} onChangeText={handleChange} style={mainStyles.blockInput}
                       placeholder={'Phone'} placeholderTextColor={'#525252'}/>
            <TextInput value={values.email} id={'email'} onChangeText={handleChange} style={mainStyles.blockInput}
                       placeholder={'Mail'} placeholderTextColor={'#525252'}/>
            <TextInput value={values.birthDate} id={'birthDate'} onChangeText={handleChange}
                       style={mainStyles.blockInput}
                       placeholder={'Birth date'} placeholderTextColor={'#525252'}/>
            <TextInput value={values.other} id={'other'} onChangeText={handleChange} style={mainStyles.blockInput}
                       placeholder={'Other'} placeholderTextColor={'#525252'}/>
            <Text style={styles.history}>Therapy history</Text>
            <View style={[{alignItems: 'flex-start'}]}>
              <View style={mainStyles.row}>
                <Text style={styles.text}>Category:</Text><Text style={[styles.text, {marginLeft: 3, color: '#64C89D'}]}>Energy</Text>
              </View>
              <View style={mainStyles.row}>
                <Text style={styles.text}>Course:</Text><Text style={[styles.text, {marginLeft: 3, color: '#64C89D'}]}>Meridian</Text>
              </View>
              <View style={mainStyles.row}>
                <Text style={styles.text}>Program:</Text><Text style={[styles.text, {marginLeft: 3, color: '#64C89D'}]}>Meridian 106 LUNG</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={handleSubmit}
                                style={[mainStyles.blockButton, {backgroundColor: '#8EA9FF', marginTop: 10}]}>
                <Text style={mainStyles.blockButton__label}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    color: 'black',
    fontSize: normalize(20),
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'Roboto'
  },
  text: {
    color: '#525252',
    fontSize: normalize(18),
    fontFamily: 'Roboto',
    fontWeight: '700'
  }
})

export default IndividualRecordBlock;
