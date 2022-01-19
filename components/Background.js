import React from 'react';
import styled from "styled-components/native";

const Background = ({children}) => {
    return (
        <BackgroundImage source={require('../assets/ChangeLanguage/background.png')}>
            <BackgroundColor>
                <Container>
                    {children}
                </Container>
            </BackgroundColor>
        </BackgroundImage>
    );
};

const Container = styled.View`
  padding-top: 20px
  position: relative
`

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
const BackgroundColor = styled.View`
  background-color: #599D8D;
  opacity: 0.93;
  width: 100%;
  height: 100%;
`

export default Background;
