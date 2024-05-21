import { useNavigation } from '@react-navigation/native';
import react from 'react'
import {
    View, Text, TouchableOpacity,
    StatusBar, Image, TextInput, ScrollView,
    StyleSheet
} from 'react-native';
import Animated, { FadeIn, FadeOut, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SearchBar } from 'react-native-screens';



export default function Homescreen() {
    const navigation = useNavigation();
    return (
        <ScrollView className='bg-white-200 h-full w-full '>
            <StatusBar style="light" />
            <View className="bg-white-200 h-full w-full">
            <Image className='h-full w-full' source={require('../asset/images/background.png')} />

            <View className='pl-4 pr-4 mt-14 w-full absolute justify-center'>

                <Text className='text-white font-bold text-2xl '>Dashboard</Text>
                <Text className='font-bold text-white'> TITILAYO</Text>
                <View className='w-full h-[30] bg-black rounded-2xl'>
                    <TextInput placeholder='  search the app' placeholderTextColor={'grey'} />

                </View>
                <View className='flex-row bg-black w-full h-[100] mt-6'>

                </View>


            </View>


            <View>

            </View>
            
        </ScrollView>
    )
}

