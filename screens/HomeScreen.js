import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "./../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="">
      {/* header */}
      <View className="flex-row pb-3 pt-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl items-center">
              Current location
            </Text>
            <ChevronDownIcon size={20} color="#00CC88" />
          </View>
        </View>
        <UserIcon size={35} color="#00CC88" />
      </View>

      {/* Search bar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row bg-gray-200 space-x-2 p-3 rounded-md items-center flex-1">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className="flex-1"
          />
        </View>
        <AdjustmentsIcon color="#00CC88" />
      </View>
      {/* Body */}
      <ScrollView className="">
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/* Featured Rows */}
        <FeaturedRow
          id="2"
          title="Tasty Discount"
          description="Everyone's been enjoying these juicy discounts"
        />
        {/* Offers near you */}
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
