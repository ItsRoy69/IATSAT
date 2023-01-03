import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import places from '../../consts/places';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  // const categoryIcons = [
  //   <Icon name="settings" size={25} color={COLORS.primary} />,
  //   <Icon name="beach-access" size={25} color={COLORS.primary} />,
  //   <Icon name="near-me" size={25} color={COLORS.primary} />,
  //   <Icon name="place" size={25} color={COLORS.primary} />,
  // ];
  // const ListCategories = () => {
  //   return (
  //     <View style={style.categoryContainer}>
  //       {categoryIcons.map((icon, index) => (
  //         <View key={index} style={style.iconContainer}>
  //           {icon}
  //         </View>
  //       ))}
  //     </View>
  //   );
  // };

  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={1.8}
        onPress={() => navigation.navigate('DetailsScreen', place)}>
        <View style={style.cardImage}>
          <View style={style.cardText}>
            <Icon name={place.icon} size={25} color={COLORS.sky} style={{paddingTop:2, paddingLeft:2 }}/>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: 'regular',  
              }}>
              {place.name}
            </Text>
          </View>
          <Text style={{
                color: COLORS.white,
                fontSize: 14,
                fontWeight: 'regular',
                marginTop: 24,
              }}>
            {place.details}
          </Text>
        </View>
        
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({place}) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          <Text style={{color: COLORS.white, fontSize: 13}}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.dark} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.dark,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>Our Products</Text>
            <Text style={style.headerPara}>IATSAT is building and connecting some of the best products in the educational domain, portable and accessible across the globe.</Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search "
                style={{color: COLORS.grey}}
              />
            </View>
          </View>
        </View>
        {/* <ListCategories /> */}
        <Text style={style.sectionTitle}>Products</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.dark,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  headerPara: {
    color: COLORS.grey,
    fontWeight: 'light',
    fontSize: 12,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // iconContainer: {
  //   height: 60,
  //   width: 60,
  //   backgroundColor: COLORS.secondary,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  // },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
  },
  cardImage: {
    height: 230,
    width: 190,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 3,
    backgroundColor: COLORS.deepgrey,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  cardText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default HomeScreen;
