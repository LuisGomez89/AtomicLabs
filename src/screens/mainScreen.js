import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, CustomImage} from './styled';
import AtomicLogo from '../components/Logo/AtomicLogo';
import PotencialTitle from '../components/Titles/Potencial';
import { TouchableOpacity } from 'react-native';
import {KnowMoreButton} from '../helpers/Buttons/KnowMoreButton/KnowMoreButton';
import CustomButton from '../helpers/Buttons/CustomButton/CustomButton';
import RightArmTitle from '../components/Titles/RightArm';
import WorkWithUs from '../components/Titles/WorkWithUs';
import OurTeam from '../components/Titles/OurTeam';
import { PrincipalCards } from '../components/Cards/Index';
import { useNavigation } from '@react-navigation/native';
import TeamImage from '../components/TeamImage/TeamImage';

export default function MainScreen() {
  const navigation = useNavigation()
  return (
    <Container>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{flex: 1, marginLeft: -10, marginTop: -60}}>
        <SafeAreaView>
          <AtomicLogo />
        
            <PotencialTitle />
      
          <KnowMoreButton />

          <CustomImage
          marginTop={'100px'}
          source={require ('../assets/PaqueteAtomic/astronauta1.png')}
          />
          <CustomButton
           onPress={() => navigation.navigate('WantToKnowYou')} />
          <RightArmTitle />
          <PrincipalCards />
          <WorkWithUs />
          <TeamImage />
          
          <CustomButton
           onPress={() => navigation.navigate('WantToKnowYou')} />
          <OurTeam />
        </SafeAreaView>
      </ImageBackground>
     
    </Container>   
  );
}
