import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../consts/colors';
const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/onboardImage.jpeg')}>
        <View style={style.details}>
        <Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={{ width: 300, height: 85, marginBottom: 50 }}
        />
          <Text style={{color: COLORS.white, fontSize: 25, fontWeight: 'bold'}}>
          It Is Not Just A Mission
          </Text>
          <Text style={{color: COLORS.white, fontSize: 25, fontWeight: 'bold'}}>
          It Is A Revolution
          </Text>
          <Text style={{color: COLORS.white, lineHeight: 15, marginTop: 15}}>
          IATSAT is a product of one alphabet  educational society  is world’s first 100% philanthropy  EduTech  company  based in India & Australia, bringing Innovation in education & social development.
          </Text>
          <View style={style.icons}>

            <View style={style.icons1}>
              <Image
                source={require('../../assets/sicons1.png')}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={{fontWeight: 'light'}}>Inspiration</Text>
            </View>

            <View style={style.icons1}>
              <Image
                source={require('../../assets/sicons2.png')}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={{fontWeight: 'light'}}>Innovation</Text>
            </View>

            <View style={style.icons1}>
              <Image
                source={require('../../assets/sicons3.png')}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={{fontWeight: 'light'}}>Discovery</Text>
            </View>
          </View>
          
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold'}}>Get Started</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '70%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 30,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  icons: {
    height: 40,
    flexDirection: 'row',
  },
  icons1: {
    height: 30,
    width: 100,
    backgroundColor: COLORS.sky,
    borderRadius: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 5,
  },
});
export default OnBoardScreen;
