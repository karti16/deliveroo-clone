import { ScrollView, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbejhOStFlts7yb9xW2xr23Cu7w9WCNcTjHw&usqp=CAU"
        title="Chicken"
      />
      <CategoryCard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAHRODo42Vzqe9M03cbHLbBK6CJDrjIqCAw&usqp=CAU"
        title="Idly"
      />
      <CategoryCard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbejhOStFlts7yb9xW2xr23Cu7w9WCNcTjHw&usqp=CAU"
        title="Chicken"
      />
      <CategoryCard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAHRODo42Vzqe9M03cbHLbBK6CJDrjIqCAw&usqp=CAU"
        title="Idly"
      />
    </ScrollView>
  );
};

export default Categories;
