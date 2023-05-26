import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground
      className="w-full h-full object-cover"
      source={require('../../../assets/imgs/background.jpg')}>
      <View className="h-full w-full bg-black/40">
        <View className="py-32 flex flex-col items-center justify-between h-full">
          <Text className="text-6xl text-gray-100 font-gochi">Meeple Store</Text>

          <TouchableOpacity className="bg-gray-100 p-2 rounded-full h-[90px] w-[90px] flex justify-center items-center">
            <View className="bg-black h-[80px] w-[80px] flex justify-center items-center rounded-full p-2">
              <Text className="text-lg text-gray-100 font-monteB uppercase">Enter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
