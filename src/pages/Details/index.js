import React from 'react';
import { ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
  screenWidth, 
  screenHeigth, 
  RootContainer, 
  TopContainer, 
  BottomContainer, 
  CurvedContainer,
  SymptompsContainer,
  ContagionContainer,
  SymptompsCard,
  Title,
  SubTitle,
  SectionTitle,
} from './styles';

import ContagionItem from '../../components/ContagionItem';

function Details({navigation}){
  return (
    <RootContainer>
      <TopContainer>
        <CurvedContainer>
          <TouchableOpacity
            style={{ alignSelf: "auto", marginLeft: -340, marginTop: 20, marginBottom: -10 }}
            onPress={() => navigation.navigate('Main')}
          >
            <Icon name="home" size={25} color="#f5f5f5" />
          </TouchableOpacity>
          <ImageBackground
            style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%', height: '100%' }}
            resizeMode='contain'
            source={require('../../assets/images/virus.png')} >
            <Image
              style={{ width: '60%', height: '60%', marginLeft: -screenWidth / 3, marginTop: screenWidth / 5.5 }}
              source={require('../../assets/images/doctor.png')}
              resizeMode='contain' />
            <Title>Take cover, {'\n'}stay safe</Title>
          </ImageBackground>
        </CurvedContainer>
      </TopContainer>
      <BottomContainer>
        <SectionTitle>Symptomps</SectionTitle>
        <SymptompsContainer>
          <ScrollView style={{ padding: 5 }} horizontal showsHorizontalScrollIndicator={false} >
            <SymptompsCard
            resizeMode='contain'
            source={require('../../assets/images/cough.png')}
            color='#5e35b1'>
              <SubTitle>Cough</SubTitle>
            </SymptompsCard>
            <SymptompsCard 
            resizeMode='contain'
            source={require('../../assets/images/sneeze.png')}
            color='#e64a19'>
              <SubTitle>Sneeze</SubTitle>
            </SymptompsCard>
            <SymptompsCard 
            resizeMode='contain'
            source={require('../../assets/images/tired.png')}
            color='#2962ff'>
              <SubTitle>Tired</SubTitle>
            </SymptompsCard>
            <SymptompsCard 
            resizeMode='contain'
            source={require('../../assets/images/fever.png')}
            color='#b71c1c'>
              <SubTitle>Fever</SubTitle>
            </SymptompsCard>
          </ScrollView>
        </SymptompsContainer>
        <SectionTitle>Contagion</SectionTitle>
        <ContagionContainer>
          <ContagionItem />
        </ContagionContainer>
      </BottomContainer>
    </RootContainer>
  );
}

export default Details;