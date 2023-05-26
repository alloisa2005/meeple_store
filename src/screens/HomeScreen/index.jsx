import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1  items-center justify-center">
      <Image
        style={{ width: '100%', height: '35%', resizeMode: 'contain' }}
        source={require('../../../assets/imgs/meeple3.png')}
      />
      <Text className="mt-10 font-monteB text-2xl">Welcome to </Text>
      <Text className="mt-3 font-gochi text-6xl text-[#DC2804]">Meeple Store</Text>

      <View className="mt-16 w-full flex-row justify-between items-center">
        <TouchableOpacity className="bg-[#DC2804] w-[45%] py-2 rounded-tr-full rounded-br-full">
          <Text className="text-white text-center text-xl font-monteB">Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#DC2804] w-[45%] py-2 rounded-tl-full rounded-bl-full">
          <Text className="text-white text-center text-xl font-monteB">Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text
        onPress={() => navigation.navigate('TabNavigation')}
        className="mt-12 font-monteB text-sm border-b-2 border-blue-500 text-blue-500 uppercase">
        Continue as Guest
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
