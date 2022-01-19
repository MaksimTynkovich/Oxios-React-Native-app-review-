import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import BackButton from "../BackButton/BackButton";
import Svg, {Circle, Path} from "react-native-svg";
import {mainStyles, normalize, windowWidth} from "../../styles/mainStyles";
import Player from "../Player/Player";
import { connect } from 'react-redux';


const HeaderPlayer = ({isSmall, soundInfo, ...props}) => {
  const [date, setDate] = useState(new Date());
  const [pressedTime, setPressedTime] = useState(null)
  const [pressedMin, setPressedMin] = useState(null)
  console.log(soundInfo?.Name)
  return (
    <View style={styles.header}>
      <View style={mainStyles.row}>
        <BackButton size={isSmall ? 67 : null} forContainer={true}/>
        <Svg style={[styles.logo]} width={isSmall ? 67 : 88} height={isSmall ? 67 : 88} viewBox="0 0 88 88" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <Circle cx="44" cy="44" r="44" fill="white"/>
          <Path fill-rule="evenodd" clip-rule="evenodd"
                d="M42.4334 18.0121C40.3736 18.3167 38.5421 19.2732 36.8599 20.9229C33.3696 24.3456 31.1478 30.0677 30.6943 36.8017C30.6143 37.9894 30.6618 40.859 30.7807 42.0245C31.4185 48.2753 33.5852 53.5158 36.8546 56.7154C39.9557 59.7502 43.6094 60.4915 47.0935 58.7929C49.7841 57.4811 52.2283 54.5915 53.849 50.8063C56.5882 44.4086 56.9296 36.1717 54.7426 29.2465C53.0005 23.73 49.7353 19.6681 46.0286 18.4063C45.1274 18.0996 44.6854 18.0268 43.5984 18.0063C43.0492 17.996 42.525 17.9986 42.4334 18.0121ZM44.6323 19.5311C45.3418 19.6451 45.9536 19.8486 46.7606 20.239C50.7778 22.1822 53.8987 27.5546 54.9125 34.272C55.2067 36.2218 55.3073 39.2908 55.1424 41.29C54.8379 44.9813 53.9569 48.2947 52.524 51.137C51.2901 53.5848 49.6561 55.5835 47.9728 56.704C47.7333 56.8634 47.6372 56.9132 47.7592 56.8146C50.9972 54.2004 53.125 49.3128 53.6177 43.3573C53.7032 42.3243 53.6519 39.1895 53.5336 38.2162C52.8304 32.4313 50.6706 27.8997 47.497 25.5507C45.1257 23.7956 42.2683 23.6636 39.7847 25.1944C38.1464 26.2041 36.4679 28.2146 35.3815 30.4682C34.26 32.7947 33.5603 35.3476 33.2132 38.3794C33.0765 39.5738 33.0768 42.9368 33.2138 44.1624C33.8035 49.4409 35.7013 53.8288 38.4983 56.3807L38.9384 56.7822L38.485 56.4451C35.04 53.883 32.5301 48.6641 31.7853 42.5141C31.5771 40.795 31.5148 38.194 31.6425 36.5569C31.9481 32.6396 32.8836 29.1783 34.4357 26.2224C35.9621 23.3154 37.8464 21.3062 40.0479 20.2378C41.039 19.7569 41.8737 19.5268 42.9882 19.4271C43.3279 19.3967 44.0997 19.4456 44.6323 19.5311ZM44.2711 25.3492C44.8167 25.4359 45.5749 25.6777 46.0711 25.9231C47.4656 26.6128 49.0348 28.1579 50.0697 29.8604C51.3187 31.9151 52.2292 34.5633 52.6618 37.4002C52.8791 38.8249 52.9187 39.4458 52.9149 41.3716C52.9111 43.3996 52.8288 44.3744 52.5255 45.9918C51.756 50.0947 49.9272 53.69 47.6601 55.5569C46.9429 56.1475 46.7705 56.2352 47.303 55.7385C51.8098 51.5347 52.9247 41.754 49.6445 35.1968C48.3501 32.6092 46.592 30.9577 44.5693 30.429C43.9093 30.2566 42.8579 30.2565 42.1838 30.4289C41.6003 30.578 40.6197 31.0485 40.1034 31.4268C37.5832 33.2736 35.783 37.1475 35.3304 41.698C35.2317 42.6902 35.2183 44.8632 35.305 45.8055C35.6937 50.0283 37.2135 53.6666 39.4565 55.7441C39.7208 55.9888 39.8371 56.1191 39.715 56.0336C37.9373 54.7886 36.4154 52.6577 35.3436 49.9129C33.9703 46.3959 33.4925 42.0293 34.0301 37.9085C34.3765 35.2533 35.095 32.8767 36.1821 30.7901C38.2123 26.8933 41.2276 24.8651 44.2711 25.3492ZM44.208 31.5323C46.4 31.9099 48.4671 34.0931 49.6808 37.3128C50.0904 38.3993 50.4656 39.9522 50.6482 41.3172C50.7873 42.3565 50.817 44.7168 50.7049 45.819C50.3305 49.4994 49.0426 52.649 47.15 54.5128C46.9053 54.7537 46.5928 55.0348 46.4555 55.1375C46.264 55.2807 46.3202 55.2041 46.6973 54.8085C49.5881 51.776 50.5473 45.6264 48.8967 40.7096C47.9333 37.8399 46.1592 35.8079 44.2271 35.3612C43.7782 35.2575 42.9214 35.257 42.4747 35.3603C41.5907 35.5647 40.794 36.0455 40.0069 36.8497C36.728 40.1997 35.9696 47.5212 38.3893 52.4669C38.7762 53.2576 39.3046 54.078 39.7164 54.5272C39.8586 54.6823 39.9494 54.8093 39.9181 54.8093C39.8294 54.8093 39.0876 53.9838 38.7053 53.4598C37.4893 51.7931 36.6437 49.627 36.227 47.1112C36.0128 45.8185 35.9506 44.8347 35.9882 43.3341C36.0314 41.6078 36.1764 40.5026 36.5527 39.0323C37.419 35.6479 39.1445 33.0566 41.2407 31.992C42.2399 31.4844 43.1297 31.3466 44.208 31.5323ZM43.9531 36.4742C46.2917 36.9091 48.2225 39.7642 48.8174 43.6672C48.9382 44.4593 48.9826 46.3671 48.9003 47.2273C48.5989 50.3791 47.4025 53.0621 45.7193 54.3612C45.2079 54.7558 45.1697 54.7576 45.5437 54.3695C46.6591 53.2122 47.3409 51.4359 47.5187 49.2238C47.7036 46.9239 47.0916 44.4535 45.9701 42.9729C44.5802 41.1378 42.7445 40.9209 41.2035 42.4096C39.9069 43.6621 39.1325 45.9084 39.1325 48.4169C39.1325 50.8548 39.7966 52.8793 41.0682 54.318L41.3794 54.67L41.1092 54.4813C40.7298 54.2161 39.9884 53.4368 39.6596 52.9575C38.7586 51.6446 38.0864 49.7454 37.8212 47.764C37.693 46.8062 37.6935 44.8714 37.8221 43.9014C38.3951 39.5793 40.6725 36.4553 43.2719 36.4254C43.4889 36.4229 43.7954 36.4449 43.9531 36.4742ZM43.7483 42.6288C45.649 43.0188 47.0285 45.9696 46.7842 49.1229C46.5465 52.1914 44.9875 54.3975 43.1628 54.2475C42.2207 54.17 41.3153 53.4225 40.6894 52.2051C40.4375 51.7152 40.1006 50.6842 39.9936 50.0762C39.7787 48.8544 39.8317 47.3404 40.1296 46.1863C40.4411 44.9801 40.8698 44.1422 41.5161 43.4765C41.9487 43.0309 42.3525 42.7715 42.794 42.6557C43.1704 42.557 43.3705 42.5513 43.7483 42.6288ZM15.139 64.0254L15 64.1617V67.6213V71.0808L15.1362 71.2143C15.3329 71.4073 15.6245 71.3967 15.8364 71.1889L15.9986 71.0299V69.7472V68.4645L16.7059 68.4653L17.4133 68.4662L18.2942 69.8545C18.7787 70.6181 19.2202 71.2664 19.2753 71.2953C19.5548 71.442 19.9532 71.2684 20.0198 70.9708C20.0645 70.7714 20.0165 70.6809 19.1372 69.3078L18.4405 68.2197L18.5648 68.1383C18.9144 67.9094 19.2321 67.5507 19.4256 67.1664C19.625 66.7708 19.6323 66.7354 19.6323 66.1793C19.6323 65.6231 19.625 65.5879 19.4256 65.1925C19.1729 64.6911 18.8038 64.3359 18.2855 64.0951L17.9125 63.9218L16.5952 63.9055L15.2779 63.8891L15.139 64.0254ZM20.9488 63.931C20.91 63.9464 20.8413 64.0289 20.7962 64.1145C20.7264 64.2468 20.7141 64.7701 20.7141 67.6221C20.7141 71.0649 20.7172 71.117 20.9312 71.2781C20.9972 71.3278 21.6194 71.3448 23.4155 71.3462L25.8118 71.3479L25.9663 71.2177C26.1693 71.0464 26.1837 70.7031 25.9956 70.5185C25.8708 70.3962 25.865 70.3958 23.7916 70.3803L21.7127 70.3648V69.2515V68.1381H23.1191C24.0053 68.1381 24.5908 68.1158 24.7019 68.0778C24.8751 68.0186 25.0414 67.795 25.0414 67.6213C25.0414 67.4475 24.8751 67.2239 24.7019 67.1647C24.5908 67.1267 24.0053 67.1044 23.1191 67.1044H21.7127V65.9892V64.8739H23.7073C25.8527 64.8739 25.929 64.8649 26.0718 64.594C26.1855 64.3784 26.1702 64.2519 26.0073 64.062L25.8636 63.8946L23.4415 63.8989C22.1092 63.9013 20.9875 63.9157 20.9488 63.931ZM28.5299 63.9698C28.0665 64.1321 27.6056 64.5362 27.3651 64.9909C27.1773 65.3458 27.152 66.0963 27.3136 66.517C27.5605 67.1594 28.1962 67.6293 28.9971 67.7616C29.507 67.8457 29.8394 68.0675 30.0509 68.4645C30.4766 69.2635 29.9545 70.2449 29.0477 70.3502C28.5744 70.4051 28.2861 70.2927 27.8824 69.8957C27.5713 69.5898 27.5096 69.5526 27.3138 69.5526C26.9741 69.5526 26.7532 69.8412 26.8383 70.1738C26.9338 70.5469 27.7105 71.1305 28.3276 71.2926C28.7407 71.4011 29.4411 71.3439 29.828 71.17C30.5286 70.8552 31.1061 70.1006 31.1967 69.3818C31.2899 68.6424 31.0802 68.0234 30.5531 67.4814C30.1742 67.0919 29.7275 66.8643 29.1728 66.7784C28.5608 66.6836 28.2038 66.3267 28.2037 65.8096C28.2034 65.1677 28.8973 64.7037 29.5175 64.9312C29.6034 64.9627 29.8 65.1218 29.9544 65.2848C30.2953 65.6447 30.4976 65.6792 30.7598 65.4221C30.9725 65.2135 30.9724 64.9926 30.7594 64.6891C30.4092 64.1899 29.811 63.8965 29.1467 63.8983C28.9178 63.8989 28.6403 63.9311 28.5299 63.9698ZM34.7056 64.0016C33.398 64.3473 32.3099 65.4579 31.9973 66.7655C31.9338 67.0311 31.9163 67.3109 31.9335 67.7845C31.971 68.8196 32.2656 69.4939 33.0023 70.2312C33.4297 70.6589 33.9738 71.0019 34.5279 71.1927C34.8413 71.3006 34.9976 71.317 35.7207 71.3176C36.4834 71.3182 36.5868 71.3063 36.9598 71.1737C37.5511 70.9636 37.9335 70.7213 38.4077 70.2563C38.8817 69.7915 39.1288 69.4166 39.3436 68.8364C39.4778 68.4737 39.4914 68.3653 39.4923 67.6485C39.4932 66.7408 39.4012 66.3558 39.0372 65.7469C38.7681 65.2965 38.0907 64.6324 37.632 64.3692C37.0511 64.0359 36.6585 63.9366 35.8316 63.9141C35.2434 63.8982 35.0358 63.9143 34.7056 64.0016ZM40.4338 64.0282L40.2976 64.1617V67.5679C40.2976 71.067 40.3005 71.1169 40.5146 71.2781C40.6741 71.3982 40.9894 71.3619 41.1494 71.205L41.2951 71.0621L41.3095 68.4542L41.3239 65.8463L43.4246 68.4921C44.5801 69.9473 45.5771 71.1852 45.6403 71.2429C45.7708 71.3621 46.101 71.3816 46.2384 71.2781C46.4526 71.117 46.4555 71.0666 46.4555 67.5784V64.1825L46.3195 64.0386C46.1504 63.8597 45.8146 63.8407 45.6156 63.9986L45.4847 64.1026L45.4569 66.7508L45.4292 69.399L43.3219 66.7459C42.163 65.2867 41.1659 64.0482 41.1063 63.9937C40.9436 63.8451 40.6026 63.8626 40.4338 64.0282ZM49.91 64.017C49.7662 64.1696 47.1767 70.6978 47.1767 70.9078C47.1767 71.1364 47.4179 71.3479 47.6786 71.3479C47.9892 71.3479 48.0921 71.1889 48.5873 69.9437L49.0241 68.8453H50.2526H51.4812L51.945 70.0179C52.2448 70.7756 52.4495 71.2183 52.5235 71.2692C52.5866 71.3125 52.7303 71.3479 52.8428 71.3479C53.0032 71.3479 53.0785 71.3117 53.191 71.1805C53.27 71.0884 53.3349 70.9599 53.3351 70.8949C53.3358 70.7122 50.7279 64.1556 50.5995 64.017C50.5166 63.9276 50.4239 63.8946 50.2557 63.8946C50.088 63.8946 49.994 63.9279 49.91 64.017ZM54.1921 64.0282L54.0559 64.1617V67.6109V71.06L54.1919 71.2039C54.38 71.4029 54.7034 71.4046 54.8923 71.2075L55.0267 71.0672L55.0545 68.4611L55.0822 65.8549L57.1626 68.4779C58.3068 69.9205 59.298 71.1564 59.3653 71.2244C59.5553 71.4162 59.8856 71.3957 60.0702 71.1805L60.2138 71.0131V67.6407C60.2138 64.1768 60.2108 64.1255 59.9967 63.9644C59.8611 63.8623 59.5222 63.8809 59.374 63.9986L59.243 64.1026L59.2152 66.7527L59.1875 69.4028L57.1626 66.8528C56.0489 65.4503 55.0536 64.2109 54.9509 64.0987C54.7952 63.9286 54.7279 63.8946 54.5462 63.8946C54.3887 63.8946 54.2904 63.9317 54.1921 64.0282ZM63.7928 63.9824C62.7968 64.2185 61.7965 65.0162 61.3176 65.9562C60.8063 66.9595 60.8107 68.2997 61.3285 69.299C61.7794 70.1691 62.616 70.8818 63.5425 71.1851C64.0591 71.3541 64.9944 71.393 65.5627 71.2691C66.3814 71.0905 67.3149 70.5213 67.3149 70.2009C67.3149 69.9948 67.1566 69.7812 66.9556 69.7162C66.739 69.6461 66.7083 69.6568 66.1309 70.0041C65.7696 70.2213 65.2079 70.3686 64.7409 70.3686C63.5631 70.3686 62.4983 69.6316 62.0883 68.5325C61.9222 68.0872 61.9222 67.1553 62.0883 66.7101C62.5291 65.5284 63.6402 64.8164 64.9294 64.8894C65.4822 64.9208 65.8914 65.0576 66.3543 65.366C66.5317 65.4842 66.7347 65.5809 66.8054 65.581C66.9581 65.5811 67.15 65.488 67.2438 65.3682C67.3324 65.255 67.3335 64.9172 67.2456 64.8108C67.0244 64.5433 66.2005 64.1164 65.647 63.9826C65.1953 63.8735 64.253 63.8734 63.7928 63.9824ZM68.1977 63.9644C67.9837 64.1255 67.9806 64.1768 67.9806 67.6407V71.0131L68.1243 71.1805L68.2679 71.3479H70.6805H73.0931L73.262 71.1822C73.4081 71.0389 73.4266 70.989 73.3984 70.815C73.3788 70.6947 73.3077 70.564 73.222 70.491C73.0786 70.3689 73.0747 70.3686 71.0288 70.3686H68.9792V69.2534V68.1381H70.3856C71.2718 68.1381 71.8573 68.1158 71.9684 68.0778C72.2439 67.9836 72.3878 67.6246 72.2507 67.3735C72.1167 67.1279 71.9571 67.1044 70.4244 67.1044H68.9792V65.9911V64.8777L71.0581 64.8622C73.0723 64.8472 73.1406 64.8432 73.2512 64.7346C73.3141 64.673 73.3796 64.537 73.3969 64.4324C73.4224 64.2785 73.4 64.2091 73.2792 64.0684L73.1301 63.8946L70.7079 63.8964C68.8914 63.8977 68.2637 63.9146 68.1977 63.9644ZM17.7461 64.9338C18.0602 65.0178 18.5063 65.4765 18.6028 65.8148C18.7828 66.4451 18.4618 67.0913 17.8293 67.372C17.6162 67.4666 17.4641 67.483 16.7891 67.4841L15.9986 67.4852V66.1796V64.8739L16.7614 64.8742C17.181 64.8744 17.6241 64.9012 17.7461 64.9338ZM36.44 64.9573C36.9245 65.0811 37.287 65.2931 37.6909 65.6892C38.2667 66.2538 38.5223 66.8479 38.5223 67.6213C38.5223 69.416 36.8367 70.7019 35.031 70.2845C34.5506 70.1735 34.1243 69.9267 33.7235 69.5274C33.3302 69.1357 33.1196 68.775 33.0046 68.2966C32.7658 67.3029 33.0274 66.3845 33.7474 65.6899C34.3398 65.1184 34.9011 64.8843 35.6952 64.8775C35.9252 64.8755 36.2604 64.9114 36.44 64.9573ZM50.6952 66.8591C50.8959 67.3662 51.0601 67.8001 51.0601 67.8235C51.0601 67.8469 50.6981 67.8661 50.2557 67.8661C49.8133 67.8661 49.4513 67.8445 49.4513 67.8181C49.4513 67.7917 49.604 67.3816 49.7906 66.9068C49.9773 66.4321 50.1538 65.9824 50.1829 65.9076C50.251 65.7323 50.244 65.7192 50.6952 66.8591Z"
                fill="#301718"/>
        </Svg>
      </View>
      <View style={[mainStyles.row]}>
        <View>
          {!isSmall && <Text style={styles.playingNow}>Now playing</Text>}
          <View style={styles.currentSound}>
            <Text style={styles.currentSound__label}>{soundInfo?.Name}</Text>
          </View>
        </View>
        {isSmall && <View style={styles.timeWrapper}>
          <ScrollView style={{maxHeight: 60}} showsVerticalScrollIndicator={false}>
            <Text style={[styles.time, pressedTime == 0 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(0)}>0 hour</Text>
            <Text style={[styles.time, pressedTime == 1 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(1)}>1 hour</Text>
            <Text style={[styles.time, pressedTime == 2 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(2)}>2 hour</Text>
            <Text style={[styles.time, pressedTime == 3 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(3)}>3 hour</Text>
            <Text style={[styles.time, pressedTime == 4 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(4)}>4 hour</Text>
            <Text style={[styles.time, pressedTime == 5 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(5)}>5 hour</Text>
            <Text style={[styles.time, pressedTime == 6 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(6)}>6 hour</Text>
            <Text style={[styles.time, pressedTime == 7 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(7)}>7 hour</Text>
            <Text style={[styles.time, pressedTime == 8 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(8)}>8 hour</Text>
            <Text style={[styles.time, pressedTime == 9 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(9)}>9 hour</Text>
            <Text style={[styles.time, pressedTime == 10 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(10)}>10 hour</Text>
            <Text style={[styles.time, pressedTime == 11 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(11)}>11 hour</Text>
            <Text style={[styles.time, pressedTime == 12 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(12)}>12 hour</Text>
            <Text style={[styles.time, pressedTime == 13 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(13)}>13 hour</Text>
            <Text style={[styles.time, pressedTime == 14 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(14)}>14 hour</Text>
            <Text style={[styles.time, pressedTime == 15 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(15)}>15 hour</Text>
            <Text style={[styles.time, pressedTime == 16 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(16)}>16 hour</Text>
            <Text style={[styles.time, pressedTime == 17 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(17)}>17 hour</Text>
            <Text style={[styles.time, pressedTime == 18 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(18)}>18 hour</Text>
            <Text style={[styles.time, pressedTime == 19 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(19)}>19 hour</Text>
            <Text style={[styles.time, pressedTime == 20 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(20)}>20 hour</Text>
            <Text style={[styles.time, pressedTime == 21 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(21)}>21 hour</Text>
            <Text style={[styles.time, pressedTime == 22 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(22)}>22 hour</Text>
            <Text style={[styles.time, pressedTime == 23 ? styles.selectedTime : styles.time]} onPress={() => setPressedTime(23)}>23 hour</Text>
          </ScrollView>
          <ScrollView style={{maxHeight: 60}} showsVerticalScrollIndicator={false}>
            <Text style={[styles.time, pressedMin == 1 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(1)}>1 minutes</Text>
            <Text style={[styles.time, pressedMin == 2 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(2)}>2 minutes</Text>
            <Text style={[styles.time, pressedMin == 3 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(3)}>3 minutes</Text>
            <Text style={[styles.time, pressedMin == 4 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(4)}>4 minutes</Text>
            <Text style={[styles.time, pressedMin == 5 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(5)}>5 minutes</Text>
            <Text style={[styles.time, pressedMin == 6 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(6)}>6 minutes</Text>
            <Text style={[styles.time, pressedMin == 7 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(7)}>7 minutes</Text>
            <Text style={[styles.time, pressedMin == 8 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(8)}>8 minutes</Text>
            <Text style={[styles.time, pressedMin == 9 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(9)}>9 minutes</Text>
            <Text style={[styles.time, pressedMin == 10 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(10)}>10 minutes</Text>
            <Text style={[styles.time, pressedMin == 11 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(11)}>11 minutes</Text>
            <Text style={[styles.time, pressedMin == 12 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(12)}>12 minutes</Text>
            <Text style={[styles.time, pressedMin == 13 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(13)}>13 minutes</Text>
            <Text style={[styles.time, pressedMin == 14 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(14)}>14 minutes</Text>
            <Text style={[styles.time, pressedMin == 15 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(15)}>15 minutes</Text>
            <Text style={[styles.time, pressedMin == 16 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(16)}>16 minutes</Text>
            <Text style={[styles.time, pressedMin == 17 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(17)}>17 minutes</Text>
            <Text style={[styles.time, pressedMin == 18 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(18)}>18 minutes</Text>
            <Text style={[styles.time, pressedMin == 19 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(19)}>19 minutes</Text>
            <Text style={[styles.time, pressedMin == 20 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(20)}>20 minutes</Text>
            <Text style={[styles.time, pressedMin == 21 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(21)}>21 minutes</Text>
            <Text style={[styles.time, pressedMin == 22 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(22)}>22 minutes</Text>
            <Text style={[styles.time, pressedMin == 23 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(23)}>23 minutes</Text>
            <Text style={[styles.time, pressedMin == 24 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(24)}>24 minutes</Text>
            <Text style={[styles.time, pressedMin == 25 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(25)}>25 minutes</Text>
            <Text style={[styles.time, pressedMin == 26 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(26)}>26 minutes</Text>
            <Text style={[styles.time, pressedMin == 27 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(27)}>27 minutes</Text>
            <Text style={[styles.time, pressedMin == 28 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(28)}>28 minutes</Text>
            <Text style={[styles.time, pressedMin == 29 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(29)}>29 minutes</Text>
            <Text style={[styles.time, pressedMin == 30 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(30)}>30 minutes</Text>
            <Text style={[styles.time, pressedMin == 31 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(31)}>31 minutes</Text>
            <Text style={[styles.time, pressedMin == 32 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(32)}>32 minutes</Text>
            <Text style={[styles.time, pressedMin == 33 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(33)}>33 minutes</Text>
            <Text style={[styles.time, pressedMin == 34 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(34)}>34 minutes</Text>
            <Text style={[styles.time, pressedMin == 35 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(35)}>35 minutes</Text>
            <Text style={[styles.time, pressedMin == 36 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(36)}>36 minutes</Text>
            <Text style={[styles.time, pressedMin == 37 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(37)}>37 minutes</Text>
            <Text style={[styles.time, pressedMin == 38 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(38)}>38 minutes</Text>
            <Text style={[styles.time, pressedMin == 39 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(39)}>39 minutes</Text>
            <Text style={[styles.time, pressedMin == 40 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(40)}>40 minutes</Text>
            <Text style={[styles.time, pressedMin == 41 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(41)}>41 minutes</Text>
            <Text style={[styles.time, pressedMin == 42 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(42)}>42 minutes</Text>
            <Text style={[styles.time, pressedMin == 43 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(43)}>43 minutes</Text>
            <Text style={[styles.time, pressedMin == 44 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(44)}>44 minutes</Text>
            <Text style={[styles.time, pressedMin == 45 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(45)}>45 minutes</Text>
            <Text style={[styles.time, pressedMin == 46 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(46)}>46 minutes</Text>
            <Text style={[styles.time, pressedMin == 47 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(47)}>47 minutes</Text>
            <Text style={[styles.time, pressedMin == 48 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(48)}>48 minutes</Text>
            <Text style={[styles.time, pressedMin == 49 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(49)}>49 minutes</Text>
            <Text style={[styles.time, pressedMin == 50 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(50)}>50 minutes</Text>
            <Text style={[styles.time, pressedMin == 51 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(51)}>51 minutes</Text>
            <Text style={[styles.time, pressedMin == 52 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(52)}>52 minutes</Text>
            <Text style={[styles.time, pressedMin == 53 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(53)}>53 minutes</Text>
            <Text style={[styles.time, pressedMin == 54 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(54)}>54 minutes</Text>
            <Text style={[styles.time, pressedMin == 55 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(55)}>55 minutes</Text>
            <Text style={[styles.time, pressedMin == 56 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(56)}>56 minutes</Text>
            <Text style={[styles.time, pressedMin == 57 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(57)}>57 minutes</Text>
            <Text style={[styles.time, pressedMin == 58 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(58)}>58 minutes</Text>
            <Text style={[styles.time, pressedMin == 59 ? styles.selectedTime : styles.time]} onPress={() => setPressedMin(59)}>59 minutes</Text>
          </ScrollView>
        </View>}
        <View style={{marginLeft: 24}}>
        <Player isSmall={true}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.27)',
    marginBottom: 14
  },
  logo: {
    marginRight: 27,
    marginLeft: 30
  },
  playingNow: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'white',
    marginBottom: 17,
    fontSize: normalize(30)
  },
  currentSound: {
    backgroundColor: '#fff',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 317,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.22,
    elevation: 19,
    paddingHorizontal: 7,
    paddingVertical: 15,
    borderRadius: 12,
    marginRight: 0,
  },
  currentSound__label: {
    fontFamily: 'Roboto',
    paddingStart: 40,
    fontWeight: '700',
    fontSize: normalize(20),
    color: '#3E7964'
  },
  timeWrapper: {
    borderRadius: 13,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: 240
  },
  time: {
    color: '#B2C9C0',
    fontFamily: 'Roboto',
    fontSize: normalize(18),
    lineHeight: 24,
    textAlign: 'center'
  },
  selectedTime: {
    color: 'white',
    fontSize: normalize(18)
  }
})

const mapStateToProps = (state) => ({
  soundInfo: state.subscriptionReducer.soundInfo
})

export default connect(mapStateToProps, {})(HeaderPlayer)
