import Button from "@/components/Button";
import CustomText from "@/components/CustomText";
import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import { gs } from "@/constants/Styles";
import { Utilities } from "@/utilities/Utilities";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, View } from "react-native";

export default function MenuPaketScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <Header />
      <ScrollView>
        <View style={{ height: 200, backgroundColor: Colors.orange.main }}></View>
        <CustomText
          weight={700}
          style={[{ fontSize: 20, textAlign: "center", paddingVertical: 12 }]}
        >
          {id}
        </CustomText>

        <View style={[gs.flexRow, gs.ic, gs.jc, { gap: 50, marginTop: 12 }]}>
          <View style={[gs.ic, { minWidth: 80 }]}>
            <Image source={require("@/assets/images/Duration.png")} />
            <CustomText weight={400}>Duration</CustomText>
            <CustomText
              weight={700}
              style={[{ color: Colors.orange.main }]}
            >
              5-7 hrs
            </CustomText>
          </View>
          <View style={[gs.ic, { minWidth: 80 }]}>
            <Image source={require("@/assets/images/Points.png")} />
            <CustomText weight={400}>Points</CustomText>
            <CustomText
              weight={700}
              style={[{ color: Colors.orange.main }]}
            >
              50
            </CustomText>
          </View>
          <View style={[gs.ic, { minWidth: 80 }]}>
            <Image source={require("@/assets/images/Steps.png")} />
            <CustomText weight={400}>Stops</CustomText>
            <CustomText
              weight={700}
              style={[{ color: Colors.orange.main }]}
            >
              8
            </CustomText>
          </View>
        </View>

        <View style={{ paddingHorizontal: 18, marginTop: 20 }}>
          <CustomText
            weight={700}
            style={[{ fontSize: 20, lineHeight: 1.1 * 20 }]}
          >
            Description
          </CustomText>
          <CustomText
            weight={400}
            style={[{ fontSize: 14 }]}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae optio, atque quis ad voluptate praesentium
            nulla fuga laudantium cumque sunt!
          </CustomText>
        </View>

        <View style={{ height: 1, backgroundColor: "#000", marginTop: 12, marginBottom: 25 }} />

        <View style={{ paddingHorizontal: 18 }}>
          <CustomText
            weight={700}
            style={[{ fontSize: 20 }]}
          >
            Tour Stops
          </CustomText>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 120, gap: 10, paddingHorizontal: 18 }}
          horizontal
        >
          <Stop />
          <Stop />
          <Stop />
          <Stop />
          <Stop />
          <Stop />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function Stop() {
  return (
    <View>
      <View style={{ width: 200, height: 145, backgroundColor: Colors.orange.main, borderRadius: 20 }} />
      <CustomText
        weight={700}
        style={[{ textAlign: "center", fontSize: 18 }]}
      >
        Stop Name
      </CustomText>
    </View>
  );
}