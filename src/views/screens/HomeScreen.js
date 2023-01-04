import React from "react";
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
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import products from "../../consts/products";
import blogs from "../../consts/blogs";

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
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

  const Card = ({ place }) => {
    return (
      <View style={style.cardImage}>
        <View style={style.cardText}>
          <Icon
            name={place.icon}
            size={25}
            color={COLORS.sky}
            style={{ paddingTop: 2, paddingLeft: 2 }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontWeight: "bold",
              padding: 5,
            }}
          >
            {place.name}
          </Text>
        </View>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 12,
            fontWeight: "regular",
            marginTop: 24,
          }}
        >
          {place.details}
        </Text>
        <TouchableOpacity
          activeOpacity={1.8}
          onPress={() => navigation.navigate("OlympiadScreen", place)}
        >
          <View style={{ width: "50%", flexDirection: "row", marginTop: 15 }}>
            <View style={style.butn}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Explore
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const RecommendedCard = ({ place, blogs }) => {
    return (
      <ImageBackground
        style={[style.rmCardImage, style.shadowProp]}
        source={place.image}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{ color: COLORS.black, fontSize: 13, fontWeight: "bold" }}
          >
            {place.details}
          </Text>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
          <View style={style.btn}>
            <Text style={{ fontWeight: "bold" }}>Read More</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.dark} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={{ width: 120, height: 80, marginTop: -20 }}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.dark,
          height: 40,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={style.inputContainer}>
            <Icon name="search" size={28} />
            <TextInput placeholder="Search" style={{ color: COLORS.grey }} />
          </View>
        </View>
      </View>
      {/* <ListCategories /> */}

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 0 }}>
        <Text style={style.sectionTitle}>Our Mission</Text>
        <Text style={style.headerPara}>
          Education is an essential element of our 2035 programme . Our aim is
          to provide free quality education to the last sector of society
          irrespective of their socio-economic condition.’ with an aim of
          transforming India with resource-based learning as opposed to the
          traditional teaching methodologies. We have envisioned a society where
          individuals and entire communities have access to the knowledge,
          resources and opportunities necessary to build a more prosperous
          future
        </Text>

        <Text style={style.sectionTitle2}>Our Vision</Text>
        <Text style={style.headerPara}>
          Our vision is shaping global priorities for the future with a belief
          of experiential learning for the prehensive role and scope of
          education. We have the vision of free quality education for every
          sector of society. With this mission of empowering the community with
          exponential growth of resource-based learning, based on a sense of
          developing economic independence in Education. We aim to work directly
          with the schools to achieve this objective.teaching methodologies. We
          have envisioned a society where individuals and entire communities
          have access to the knowledge, resources and opportunities necessary to
          build a more prosperous future.
        </Text>

        <Text style={style.sectionTitle3}>Our Products</Text>
        <Text style={style.headerPara}>
          IATSAT is building and connecting some of the best products in the
          educational domain, portable and accessible across the globe.
        </Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Latest Blogs</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={blogs}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.dark,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  butn: {
    height: 30,
    width: 100,
    backgroundColor: COLORS.sky,
    color: COLORS.white,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  headerPara: {
    color: COLORS.grey,
    fontWeight: "light",
    fontSize: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    top: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginTop: 40,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  sectionTitle2: {
    marginHorizontal: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 20,
  },
  sectionTitle3: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  cardImage: {
    height: 200,
    width: 200,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 3,
    backgroundColor: COLORS.deepgrey,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
  },
  cardText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
});
export default HomeScreen;
