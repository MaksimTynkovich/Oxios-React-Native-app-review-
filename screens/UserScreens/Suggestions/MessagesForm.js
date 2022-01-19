import React, {useEffect, useState} from 'react';
import {
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    KeyboardAvoidingView, Keyboard, BackHandler
} from "react-native";
import {SendIcon} from "../../../components/Icons/Icons";
import {normalize, windowHeight} from "../../../styles/mainStyles";

const MessagesForm = ({setOpenKeyBoard, openKeyBoard}) => {

    const initialMessages = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name: "Ivan Ivanov"
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name: "Support"
        }
    ]

    const [messages, setMessages] = useState(initialMessages)
    const [message, setMessage] = useState('')


    const sendMessage = () => {
        setOpenKeyBoard(false)
        Keyboard.dismiss()
        if (!message) return null

        const newMessage = {
            name: "Support",
            text: message
        }
        setMessages(prev => [
            ...prev,
            newMessage
        ])
        setMessage('')
    }

    return (
        <View style={{maxHeight: openKeyBoard ? "94%" : "73%"}}>
            <ScrollView>
                {messages.map((msg, index) => (
                    <View key={index} style={{
                        ...styles.message__block,
                        flexDirection: msg.name === "Support" ? "row-reverse" : "row"
                    }}>
                        <Image
                            style={styles.avatar}
                            source={{uri: 'https://sun9-66.userapi.com/impg/wSTlyAOW8jHJi1Qx_nfjSNYf3H18yiJCdBQIJA/z3pcxJ4TP5Q.jpg?size=1080x810&quality=96&sign=bb1992ceee6626e21b58f29619becdba&type=album'}}
                        />
                        <View>
                            <Text
                                style={{...styles.message__name, textAlign: msg.name === "Support" ? "right" : "left"}}>
                                {msg.name}
                            </Text>
                            <Text style={styles.message__text}>
                                {msg.text}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.input}>
                <TextInput
                    style={styles.input__form}
                    value={message}
                    onChangeText={setMessage}
                    onSubmitEditing={sendMessage}
                    onFocus={() => setOpenKeyBoard(true)}
                    onTouchCancel={() => setOpenKeyBoard(false)}
                    onBlur={() => setOpenKeyBoard(false)}
                />

                <TouchableOpacity onPress={sendMessage} style={styles.input__button}>
                    <SendIcon/>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    test: {},


    message__block: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: normalize(50)
    },
    avatar: {
        width: normalize(50),
        height: normalize(50),
        borderRadius: 100
    },
    message__text: {
        maxWidth: normalize(505),
        backgroundColor: '#D9E7E6',
        paddingVertical: normalize(15),
        paddingHorizontal: normalize(30),
        borderRadius: normalize(24),
        marginHorizontal: normalize(12)
    },
    message__name: {
        textAlign: 'left',
        color: '#25847E',
        fontSize: normalize(18),
        marginBottom: normalize(10),
        marginHorizontal: normalize(12)
    },

    input__form: {
        width: '92%',
        fontSize: normalize(18),
        fontWeight: 'bold',
        color: '#667288'
    },
    input: {
        width: '100%',
        height: normalize(53),
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: normalize(45),
        paddingRight: normalize(15),

        borderRadius: normalize(38),
        backgroundColor: '#F4F4F4',
        borderColor: '#D2D2D2'
    },

})

export default MessagesForm;