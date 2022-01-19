import {Dimensions, PixelRatio, Platform, StyleSheet} from "react-native";

export const {
  width: windowWidth,
  height: windowHeight
} = Dimensions.get("window")

export const scale = windowWidth / 1200;

export const normalize = (size) => {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
export const getPixel = (size) => {
  return PixelRatio.getPixelSizeForLayoutSize(size)
}

export const mainStyles = StyleSheet.create({
  background__image: {
    width: windowWidth,
    height: windowHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#599D8D',
    opacity: 0.85,
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
    paddingVertical: 60,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: "700",
    color: '#FFF',
    fontSize: normalize(50)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row__logo: {
    marginRight: 35
  },
  underTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: "700",
    color: '#FFF',
    fontSize: normalize(45)
  },
  category: {
    width: 153,
    height: 153,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    marginBottom: 26
  },
  category__inner: {
    width: '100%',
    height: '100%',
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  category__label: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: normalize(26),
    color: 'white',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingHorizontal: 40
  },
  course: {
    marginBottom: 20,
    backgroundColor: '#37A7A0',
    borderRadius: 17,
    width: '100%',
    paddingVertical: 17,
    paddingHorizontal: 20,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 22,
    },
    shadowRadius: 12.22,
    elevation: 0,
  },
  course__label: {
    color: '#E3FFF8',
    fontSize: normalize(26),
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',

  },
  blockTitle: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: normalize(22),
    fontWeight: '700'
  },
  blockButton: {
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 15
  },
  blockButton__label: {
    color: 'white',
    fontSize: normalize(18),
    fontWeight: '700',
    fontFamily: 'Roboto'
  },
  blockContainer: {
    paddingHorizontal: 15
  },
  blockInput: {
    width: '100%',
    backgroundColor: 'rgba(57, 102, 109, 0.04)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9FB8BB',
    paddingVertical: 7,
    paddingHorizontal: 14,
    color: '#525252',
    fontSize: normalize(18),
    fontFamily: 'Roboto',
    borderRadius: 8,
    marginBottom: 5
  },
  popup: {
    width: '60%',
    borderRadius: 26,
    backgroundColor: 'white',
    paddingTop: 38,
    paddingBottom: 25,
    paddingHorizontal: 100,
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
    alignItems: 'center',
    zIndex: 1000
  },
  errorMessage: {
    color: '#DA8181',
    fontSize: normalize(35),
    marginBottom: normalize(19),
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  agreeButton: {
    backgroundColor: '#6DAA90',
    borderRadius: 53,
    width: '40%',
    paddingVertical: normalize(15),
    marginTop: normalize(40)
  },
  agreeButton__label: {
    textAlign: 'center',
    fontSize: normalize(28),
    color: 'white',
    fontWeight: '700'
  },
  popup__overlay: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'rgba(37, 64, 57, 0.61)'
  }
})
