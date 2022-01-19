import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import {mainStyles, normalize} from "../../styles/mainStyles";
import {Formik} from "formik";

const RecordBlock = () => {
  const [isAddCard, setIsAddCard] = useState(false)
  const users = ['Ivan Ivanov', 'Ivan Ivanov', 'Ivan Ivanov']
  return (
    <View style={mainStyles.blockContainer}>
      <View style={[mainStyles.row, {justifyContent: 'space-between'}]}>
        <Text style={mainStyles.blockTitle}>User card</Text>
        <TouchableOpacity onPress={() => setIsAddCard(!isAddCard)}
                          style={[mainStyles.blockButton, {backgroundColor: isAddCard ? '#5A80F8' : '#8EA9FF'}]}>
          <Text style={mainStyles.blockButton__label}>Add card</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        {isAddCard ? <>
          <Formik
            initialValues={{
              name: '',
              address: '',
              phone: '',
              email: '',
              birthDate: '',
              other: ''
            }}
            onSubmit={() => {
              setIsAddCard(false)
            }}
          >
            {({values, handleChange, handleSubmit}) => {
              return <View>
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
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <TouchableOpacity onPress={handleSubmit}
                                    style={[mainStyles.blockButton, {backgroundColor: '#8EA9FF', marginTop: 10}]}>
                    <Text style={mainStyles.blockButton__label}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }}
          </Formik>
        </> : <>
          {users.map((user, index) => <TouchableOpacity style={styles.user}>
            <Text style={styles.user__number}>{index + 1}</Text>
            <Text style={styles.user__label}>{user}</Text>
          </TouchableOpacity>)}
        </>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    marginBottom: 5,
    backgroundColor: '#F1F4F5',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9FB8BB'
  },
  user__number: {
    color: '#A4C6FF',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: normalize(24),
    marginRight: 11
  },
  user__label: {
    fontFamily: 'Roboto',
    fontSize: normalize(22),
    color: '#525252'
  }
})

export default RecordBlock;
