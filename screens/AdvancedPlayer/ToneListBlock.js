import React, {useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import {mainStyles, normalize} from "../../styles/mainStyles";
import CheckBox from "../../components/CheckBox/CheckBox";
import i18n from '../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';


const ToneListBlock = () => {
  const {t, i18n}=useTranslation();
  const [selectedTones, setSelectedTones] = useState([])
  return (
    <View style={mainStyles.blockContainer}>
      <View style={[mainStyles.row, {justifyContent: 'space-between'}]}>
        <Text style={mainStyles.blockTitle}>{t('CourseList.beauty')}Tone list</Text>
      </View>
      {[1, 2, 3].map((_, index) => (
        <View style={[mainStyles.row, {justifyContent: 'flex-start', marginTop: normalize(15)}]}>
          <CheckBox isChecked={selectedTones.indexOf(index) !== -1}
                    setIsChecked={() => {
                      if(selectedTones.indexOf(index) !== -1) {
                        setSelectedTones([...selectedTones].filter(s => s !== index))
                      } else {
                        setSelectedTones([...selectedTones, index])
                      }
                    }} />
          <Text style={styles.text}>350 ETHERIC BODY</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#525252',
    fontSize: normalize(18),
    marginLeft: normalize(9)
  }
})

export default ToneListBlock;
