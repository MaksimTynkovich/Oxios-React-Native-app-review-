import React, { useState } from "react";
import Background from "../../components/Background";
import HeaderPlayer from "../../components/HeaderPlayer/HeaderPlayer";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { mainStyles, normalize } from "../../styles/mainStyles";
import { LinearGradient } from "expo-linear-gradient";
import {
  CHANGE_LANGUAGE,
  INDIVIDUAL,
  INDIVIDUAL_RECORD,
  MY_PAGE,
  MY_PLAYLIST,
  TONE_GENERATOR_LIST,
} from "../../redux/types";
import RecordBlock from "./RecordBlock";
import IndividualRecordBlock from "./IndividualRecordBlock";
import MyPlayList from "./MyPlayList";
import PlaylistBlock from "./PlaylistBlock";
import CheckBox from "../../components/CheckBox/CheckBox";
import ToneListBlock from "./ToneListBlock";
import TracksListBlock from "./TracksListBlock";
import i18n from '../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';

const AdvancedPlayer = ({navigation, ...props}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentBlock, setCurrentBlock] = useState(null);
  const [pressedPlaylist, setPressedPlaylist] = useState(null);
  const [isProgramEdit, setIsProgramEdit] = useState(false);
  const [programSelectedItems, setProgramSelectedItems] = useState([]);
  const [isSoundError, setIsSoundError] = useState(true);
  const [isConnectionError, setIsConnectionError] = useState(false);
  const {t, i18n}=useTranslation();
  let categories = ["Mental health", "Beauty", "Energy"];
  let courses = ["Whitening", "Whiteting standart", "Diet"];
  let programs = [
    "128 ETHERIC BODY",
    "128 ETHERIC BODY",
    "128 ETHERIC BODY",
    "128 ETHERIC BODY",
    "128 ETHERIC BODY",
  ];
  return (
    <>
      <Background>
        <HeaderPlayer isSmall={true} />
        <View style={styles.content}>
          <View style={styles.column}>
            <View style={styles.form}>
              <TextInput
                placeholder={t('AdvancedPlayer.placeholder')}
                placeholderTextColor={"#696969"}
                style={styles.form__input}
              />
              <View>
                <LinearGradient
                  colors={["rgba(255, 255, 255, 0.3)", "#668bff"]}
                  style={[styles.form__smallButton, { marginBottom: 4 }]}
                >
                  <TouchableOpacity>
                    <Text style={styles.form__smallButtonLabel}>{t('AdvancedPlayer.create')}</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["rgba(255, 255, 255, 0.3)", "#668bff"]}
                  style={styles.form__smallButton}
                >
                  <TouchableOpacity>
                    <Text style={styles.form__smallButtonLabel}>{t('AdvancedPlayer.edit')}</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.items}>
              <ScrollView>
                <View style={styles.items__title}>
                 <Text style={styles.items__underTitle}>{t('AdvancedPlayer.category')}</Text>
                  <TouchableOpacity
                    style={[
                      styles.items__button,
                      { backgroundColor: "#E07171" },
                    ]}
                  >
                    <Text style={styles.items__buttonLabel}>{t('AdvancedPlayer.delete')}</Text>
                  </TouchableOpacity>
                </View>
                {categories.map((category, index) => (
                  <TouchableOpacity
                    onPress={() => setSelectedCategory(index)}
                    key={index}
                    style={styles.item}
                  >
                    <Text
                      style={[
                        styles.item__label,
                        selectedCategory === index && {
                          fontWeight: "700",
                          color: "#6DAA90",
                        },
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.form}>
              <TextInput
                placeholder={t('AdvancedPlayer.placeholder')}
                placeholderTextColor={"#696969"}
                style={styles.form__input}
              />
              <View>
                <LinearGradient
                  colors={["rgba(255, 255, 255, 0.3)", "#668bff"]}
                  style={[styles.form__smallButton, { marginBottom: 4 }]}
                >
                  <TouchableOpacity>
                    <Text style={styles.form__smallButtonLabel}>{t('AdvancedPlayer.create')}</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={["rgba(255, 255, 255, 0.3)", "#668bff"]}
                  style={styles.form__smallButton}
                >
                  <TouchableOpacity>
                    <Text style={styles.form__smallButtonLabel}>{t('AdvancedPlayer.edit')}</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.items}>
              <ScrollView>
                <View style={styles.items__title}>
                  <Text style={styles.items__underTitle}>{t('AdvancedPlayer.course')}</Text>
                  <TouchableOpacity
                    style={[
                      styles.items__button,
                      { backgroundColor: "#EEA942" },
                    ]}
                  >
                    <Text style={styles.items__buttonLabel}>{t('AdvancedPlayer.done')}</Text>
                  </TouchableOpacity>
                </View>
                {courses.map((course, index) => (
                  <TouchableOpacity
                    onPress={() => setSelectedCourse(index)}
                    key={index}
                    style={styles.item}
                  >
                    <Text
                      style={[
                        styles.item__label,
                        selectedCourse === index && {
                          fontWeight: "700",
                          color: "#6DAA90",
                        },
                      ]}
                    >
                      {course}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.column}>
            <View style={[styles.form, { justifyContent: "space-between" }]}>
              <LinearGradient
                colors={["rgba(252, 213, 155, 0.86)", "#EEA942"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#EBBC73", width: "48%" },
                ]}
              >
                <TouchableOpacity
                  style={styles.linearButton__inner}
                >
                  <Text style={styles.linearButton__label}>{t('AdvancedPlayer.copy')}</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={["#64C89D", "#70c69c", "#64C89D"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#4EC190", width: "48%" },
                ]}
              >
                <TouchableOpacity
                  style={styles.linearButton__inner}
                >
                  <Text style={styles.linearButton__label}>{t('AdvancedPlayer.paste')}</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.items}>
              <ScrollView>
                <View style={styles.items__title}>
                  <Text style={styles.items__underTitle}>{t('AdvancedPlayer.course')}</Text>
                  <TouchableOpacity
                    onPress={() => setIsProgramEdit(!isProgramEdit)}
                    style={[
                      styles.items__button,
                      { backgroundColor: "#8EA9FF" },
                    ]}
                  >
                    <Text style={styles.items__buttonLabel}>{t('AdvancedPlayer.edit')}</Text>
                  </TouchableOpacity>
                </View>
                {programs.map((program, index) => (
                  <View
                    key={index}
                    style={[
                      mainStyles.row,
                      {
                        justifyContent: "flex-start",
                        marginBottom: 15,
                        marginLeft: 20,
                      },
                    ]}
                  >
                    {isProgramEdit && (
                      <CheckBox
                        isChecked={programSelectedItems.indexOf(index) !== -1}
                        setIsChecked={() => {
                          if (programSelectedItems.indexOf(index) !== -1) {
                            setProgramSelectedItems(
                              [...programSelectedItems].filter(
                                s => s !== index,
                              ),
                            );
                          } else {
                            setProgramSelectedItems([
                              ...programSelectedItems,
                              index,
                            ]);
                          }
                        }}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => setSelectedProgram(index)}
                      key={index}
                      style={{ marginLeft: normalize(7) }}
                    >
                      <Text
                        style={[
                          styles.item__label,
                          selectedProgram === index && {
                            fontWeight: "700",
                            color: "#6DAA90",
                          },
                        ]}
                      >
                        {program}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={[styles.column, { width: "35%" }]}>
            <View style={[styles.form, { justifyContent: "space-between" }]}>
              <LinearGradient
                colors={["#AC91FA", "#C8B5FF", "#AC91FA"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#A58CEE", width: "30%" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => setCurrentBlock(INDIVIDUAL)}
         
                  style={styles.linearButton__inner}
                >
                  <Text style={styles.linearButton__label}>{t('AdvancedPlayer.individual')}</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={["#37A59E", "#3DC6AF", "#37A59E"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#4EC190", width: "30%" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserScreen')}
          
                  style={styles.linearButton__inner}
                >
                  <Text style={styles.linearButton__label}>{t('AdvancedPlayer.page')}</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={["#EFC17B", "#FFD28B", "#EFC17B"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#EBBC73", width: "30%" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => setCurrentBlock(CHANGE_LANGUAGE)}
            
                  style={styles.linearButton__inner}
                >
                  <Text style={styles.linearButton__label}>
                    {t('AdvancedPlayer.change')}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={[styles.form, { justifyContent: "space-between" }]}>
              <LinearGradient
                colors={["#64C89D", "#70c69c", "#64C89D"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#5FC298", width: "30%" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => setCurrentBlock(MY_PLAYLIST)}
                  style={styles.linearButton__inner}
                >
                  <Text style={styles.linearButton__label}>{t('AdvancedPlayer.playlist')}</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={["#8EA9FF", "#8EA9FF"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#A3B9FF", width: "30%" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => setCurrentBlock(TONE_GENERATOR_LIST)}
                
                  style={styles.linearButton__inner}
                >
                  <Text
                    style={[
                      styles.linearButton__label,
                      { fontSize: normalize(19) },
                    ]}
                  >
                    {t('AdvancedPlayer.playlist')}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={["#1DCDC2", "rgba(136, 233, 222, 0.6)", "#1DCDC2"]}
                style={[
                  styles.linearButton,
                  { borderColor: "#28DBCE", width: "30%" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => setCurrentBlock(INDIVIDUAL_RECORD)}
                  style={styles.linearButton__inner}
                >
                  <Text style={styles.linearButton__label}>
                    {t('AdvancedPlayer.list')}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={[styles.items, { flex: 0.56 }]}>
              <ScrollView>
                {currentBlock === INDIVIDUAL && <RecordBlock />}
                {currentBlock === INDIVIDUAL_RECORD && (
                  <IndividualRecordBlock />
                )}
                {currentBlock === MY_PLAYLIST && pressedPlaylist === null && (
                  <MyPlayList setPressedPlaylist={setPressedPlaylist} />
                )}
                {pressedPlaylist !== null && (
                  <PlaylistBlock playlist={pressedPlaylist} />
                )}
                {currentBlock === TONE_GENERATOR_LIST && <ToneListBlock />}
                {currentBlock === MY_PAGE && <TracksListBlock />}
              </ScrollView>
            </View>
          </View>
        </View>
      </Background>
      {(isSoundError || isConnectionError) && (
        <View style={mainStyles.popup__overlay} />
      )}
      {isSoundError && (
        <View style={mainStyles.popup}>
          <Text style={mainStyles.errorMessage}>
          {t('AdvancedPlayer.sound_error1')}{" "}
          </Text>
          <Text style={[mainStyles.errorMessage, { fontWeight: "700" }]}>
          {t('AdvancedPlayer.sound_error2')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsSoundError(false);
              setIsConnectionError(true);
            }}
            style={mainStyles.agreeButton}
          >
            <Text style={mainStyles.agreeButton__label}>{t('AdvancedPlayer.btn_accept')}</Text>
          </TouchableOpacity>
        </View>
      )}
      {isConnectionError && (
        <View style={mainStyles.popup}>
          <Text style={mainStyles.errorMessage}>{t('AdvancedPlayer.sound_failed1')}</Text>
          <Text style={[mainStyles.errorMessage, { fontWeight: "700" }]}>
          {t('AdvancedPlayer.sound_failed2')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsConnectionError(false);
            }}
            style={mainStyles.agreeButton}
          >
            <Text style={mainStyles.agreeButton__label}>{t('AdvancedPlayer.btn_accept')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 15,
    height: "100%",
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  column: {
    width: "20%",
    marginRight: 9,
    // flex: 1,
  },
  form: {
    flexDirection: "row",
    marginBottom: 13,
  },
  form__input: {
    height: 58,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    marginRight: 9,
    width: "64%",
  },
  form__smallButton: {
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#829EF4",
    paddingHorizontal: 5,
    height: 27,
  },
  form__smallButtonLabel: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize:  normalize(14),
    color: "white",
    textAlign: "center",
  },
  items: {
    backgroundColor: "white",
    flex: 0.6,
    borderRadius: 8,
    paddingVertical: 12,
  },
  items__title: {
    borderRadius: 13,
    marginTop: 1,
    backgroundColor: "#F1F4F5",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowRadius: 2.22,
    // elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 11,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginBottom: 15,
  },
  items__underTitle: {
    color: "#525252",
    fontSize: normalize(20),
    fontFamily: "Roboto",
  },
  items__button: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  items__buttonLabel: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: normalize(16),
  },
  item: {
    marginBottom: 15,
    marginLeft: 20,
  },
  item__label: {
    color: "#525252",
    fontFamily: "Roboto",
    fontSize: normalize(20),
  },
  linearButton: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    // shadowColor: "rgba(0, 0, 0, 0.25)",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowRadius: 2.22,
    // elevation: 10,
    height: 58,
  },
  linearButton__inner: {
    paddingVertical: 13,
    paddingHorizontal: 7,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  linearButton__label: {
    textAlign: "center",
    color: "white",
    fontSize: normalize(20),
    fontWeight: "700",
  },
});

export default AdvancedPlayer;
