import React, {useState} from 'react';
import {mainStyles, normalize, windowHeight, windowWidth} from "../styles/mainStyles";
import {ImageBackground, ScrollView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import HeaderPlayer from "../components/HeaderPlayer/HeaderPlayer";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import i18n from '../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';
import {connect} from "react-redux";
import {getCourseInfo} from "../redux/subscribtion/subscription-thunks";


const CourseList = ({navigation, categoryInfo, ...props}) => {
  const [pressedItem, setPressedItem] = useState(null)
  const {t, i18n}=useTranslation();
  console.log(categoryInfo)
  return (
    <ImageBackground source={require('../assets/ChangeLanguage/background.png')} style={mainStyles.background__image}>
      <View style={[mainStyles.container, {paddingVertical: 0, alignItems: 'flex-start'}]}>
        <HeaderPlayer/>
        <View style={[mainStyles.row, mainStyles.content]}>
          <View>
            <Text style={mainStyles.underTitle}>{t('CourseList.category')}</Text>
            <LinearGradient colors={['#50A3EF', '#5A58DE', '#247BFF']}
                            style={[mainStyles.category, {marginTop: 40}]}>
              <TouchableOpacity style={mainStyles.category__inner}>
                <Text style={mainStyles.category__label}>{categoryInfo.Name}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View>
            <View style={{width: windowWidth / 1.5}}>
              <View>
                <Text style={[mainStyles.underTitle, {textAlign: 'center', width: windowWidth / 2.5}]}>{t('CourseList.course')}</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: windowWidth / 2.5}}>
                  <ScrollView style={{marginBottom: windowHeight / 5.5}}>
                      <View style={[styles.courses]}>
                        {categoryInfo.Courses.map((course, index) => <TouchableOpacity
                          style={[mainStyles.course, pressedItem === course.id ? {backgroundColor: '#D9C490'} : mainStyles.course]}
                          onPress={() => setPressedItem(course.id)}>
                          <Text style={mainStyles.course__label}>{course.name}</Text>
                        </TouchableOpacity>)}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 2 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(2)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 3 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(3)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 4 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(4)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 5 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(5)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 6 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(6)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 7 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(7)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 8 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(8)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 9 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(9)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 10 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(10)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      {/*  <TouchableOpacity style={[mainStyles.course, pressedItem == 11 ? {backgroundColor: '#D9C490'} : mainStyles.course]} onPress={() => setPressedItem(11)}>*/}
                      {/*    <Text style={mainStyles.course__label}>Course name</Text>*/}
                      {/*  </TouchableOpacity>*/}
                      </View>
                      </ScrollView>
                  </View>
                  {pressedItem !== null && <View style={{marginLeft: 30}}>
                    <TouchableOpacity onPress={() => props.getCourseInfo(pressedItem, navigation)}
                                      style={[mainStyles.course, {backgroundColor: '#8EAAFF'}]}>
                      <Text style={mainStyles.course__label}>{t('CourseList.list')}</Text>
                    </TouchableOpacity>
                  </View>}
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  courses: {
    marginBottom: 40,
    paddingHorizontal: 10
  },
})

const mapStateToProps = (state) => ({
  categoryInfo: state.subscriptionReducer.categoryInfo
})

export default connect(mapStateToProps, {getCourseInfo})(CourseList)
