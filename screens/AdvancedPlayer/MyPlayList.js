import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import {mainStyles, normalize} from "../../styles/mainStyles";
import {Feather} from '@expo/vector-icons';
import CheckBox from "../../components/CheckBox/CheckBox";

const MyPlayList = ({setPressedPlaylist}) => {

    const [selectPlayList, setSelectPlayList] = useState(null)
    const [onEdit, setOnEdit] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])

    return (
        <View style={mainStyles.blockContainer}>
            <View style={[mainStyles.row, {justifyContent: 'space-between', marginBottom: normalize(19)}]}>
                <TextInput id={'registration'}
                           style={[mainStyles.blockInput, {
                               width: '50%',
                               paddingVertical: normalize(5),
                               fontSize: normalize(16),
                               marginBottom: 0,
                           }]}
                           placeholder={'Type name here'} placeholderTextColor={'#525252'}/>
                <View style={mainStyles.row}>
                    <TouchableOpacity style={[mainStyles.blockButton, {backgroundColor: '#6DAA90', marginRight: 5}]}>
                        <Text style={mainStyles.blockButton__label}>Create</Text>
                    </TouchableOpacity>
                  {!onEdit ? <TouchableOpacity onPress={() => setOnEdit(true)}
                                     style={[mainStyles.blockButton, {backgroundColor: '#8EA9FF'}]}>
                    <Text style={mainStyles.blockButton__label}>Edit</Text>
                  </TouchableOpacity> : <TouchableOpacity onPress={() => setOnEdit(false)}
                                                          style={[mainStyles.blockButton, {backgroundColor: '#DA8181'}]}>
                    <Text style={mainStyles.blockButton__label}>Delete</Text>
                  </TouchableOpacity>}
                </View>
            </View>

            <View>
                {[1, 2, 3].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[mainStyles.row, {
                            justifyContent: 'space-between',
                            width: '100%',
                            marginBottom: normalize(5)
                        }]}
                        onPress={() => {
                          if(!onEdit) setSelectPlayList(index)
                        }}
                    >
                        <View style={mainStyles.row}>
                            {onEdit && <CheckBox isChecked={selectedItems.indexOf(index) !== -1}
                                                 setIsChecked={() => {
                                                   if(selectedItems.indexOf(index) !== -1) {
                                                     setSelectedItems([...selectedItems].filter(s => s !== index))
                                                   } else {
                                                     setSelectedItems([...selectedItems, index])
                                                   }
                                                 }} />}
                            {selectPlayList === index &&
                            <Feather style={{marginRight: normalize(8), marginLeft: normalize(5)}} name="play-circle" size={20} color="#6DAA90"/>}
                            <Text
                                style={[selectPlayList === index ? {
                                    color: "#6DAA90",
                                    fontWeight: 'bold'
                                } : {color: '#000'}, onEdit && {marginLeft: 5}]}
                            >
                                My playlist 1321
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => setPressedPlaylist(index)} style={[mainStyles.blockButton, {backgroundColor: "#37A7A0"}]}>
                            <Text style={mainStyles.blockButton__label}>
                                Total 40 min
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({})

export default MyPlayList;
