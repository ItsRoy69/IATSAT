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
import olympiads from "../../consts/olympiads";
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

        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              fontWeight: "regular",
              marginTop: 24,
            }}
          >
            {place.details1}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              fontWeight: "regular",
            }}
          >
            {place.details2}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              fontWeight: "regular",
            }}
          >
            {place.details3}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              fontWeight: "regular",
            }}
          >
            {place.details4}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={1.8}
          onPress={() => navigation.navigate("OlympiadScreen", place)}
        >
          <View style={{ width: "50%", flexDirection: "row", marginTop: 5 }}>
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
        <Text style={style.headerPara0}>
          An Olympiad represent an opportunities at all ages. It empowers
          students with knowledge , skills and confidence . IATSAT is one of the
          fastest growing Olympiad among the students and academic fraternities.
          Our Olympiad is designed to identify the best talents across the globe
          and nurture them for future .
        </Text>
        <Text style={style.sectionTitle2}>
          The longer you wait for future the shorter it will be
        </Text>

        <Text style={style.headerPara2}>
          Here at IATSAT we help students to compete with students on a similar
          educational level with clarity of concepts. It helps to identify a
          child’s capability and real potential that will help him survive
          better in today’s competitive world. Our Olympiads motivate students
          to endeavour for better and deeper understanding of scientific and
          rational facts so as to enhance their reasoning, analytical and
          problem solving skills.We have designed our Olympiad keeping a
          futuristic approach in mind that will also help the student to prepare
          themselves better for further competitive exams .
        </Text>

        <Text style={style.headerPara3}>
          IATSAT believes in creating a community of lifelong learners,
          responsible global citizens, and champions of our own success.{" "}
        </Text>

        <Text style={style.sectionTitle3}>
          The IATSAT is divided into National and International Olympiad
        </Text>
        <Text style={style.headerPara}>
          IATSAT is building and connecting some of the best products in the
          educational domain, portable and accessible across the globe.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              JUNIOR OLYMPIAD
            </Text>
            <Text style={style.headerPara5}>Grade 3 to 9</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              YOUNG MIND OLYMPIAD
            </Text>
            <Text style={style.headerPara5}>Grade 10 to 12</Text>
          </View>
        </View>
        <Text style={style.sectionTitle3}>Olympiad Stages</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={olympiads}
            renderItem={({ item }) => <Card place={item} />}
          />
        </View>
        <Text style={style.sectionTitle4}>Why choose IATSAT Olympiad</Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={style.headerPara6}>
            • Boost Students Reasoning Abilities.
          </Text>
          <Text style={style.headerPara6}>
            • The question asked in IATSAT International Olympiad able students
            to reinforce the concept taught in the class
          </Text>
          <Text style={style.headerPara6}>
            • Challenge students’ intellectual skills in such a way that it
            promote deeper understanding of scientific facts.
          </Text>
          <Text style={style.headerPara6}>
            • Understand their shortcomings which can be worked upon then.
          </Text>
          <Text style={style.headerPara6}>
            • Sharpen students’ Analytic Skills have a better idea of their
            potential.
          </Text>
          <Text style={style.headerPara6}>
            • Competing at National and International level provide students’ a
            different volume of exposure.
          </Text>
        </View>
        <Text style={style.sectionTitle4}>Skills IATSAT focusing on:</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              Listening Skills
            </Text>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              General Knowledge
            </Text>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              Verbal Ability
            </Text>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              Science
            </Text>
          </View>

          <View style={{ flexDirection: "column" }}>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              Logical Reasoning
            </Text>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              Marketing Skills
            </Text>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              Life Skills
            </Text>
            <Text style={style.headerPara4}>
              <Icon name="check-circle-outline" size={12} />
              Arithmetic
            </Text>
            <Text style={style.headerPara7}>
              <Icon name="check-circle-outline" size={12} />
              English
            </Text>
          </View>
        </View>

        <View>
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
  headerPara0: {
    color: COLORS.grey,
    fontWeight: "light",
    fontSize: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 40,
  },
  headerPara: {
    color: COLORS.grey,
    fontWeight: "light",
    fontSize: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  headerPara2: {
    color: COLORS.grey,
    fontWeight: "light",
    fontSize: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  headerPara3: {
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
    fontSize: 14,
  },
  sectionTitle2: {
    marginHorizontal: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  sectionTitle3: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  sectionTitle4: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
  headerPara4: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 12,
    color: COLORS.sky,
  },
  headerPara7: {
    marginHorizontal: -40,
    fontWeight: "bold",
    fontSize: 12,
    color: COLORS.sky,
    marginBottom: 10,
  },
  headerPara5: {
    marginHorizontal: 20,
    fontWeight: "light",
    fontSize: 12,
    marginBottom: 10,
    color: COLORS.grey,
  },
  headerPara6: {
    marginHorizontal: 20,
    fontWeight: "regular",
    fontSize: 12,
    marginBottom: 10,
  },
  cardImage: {
    height: 220,
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
