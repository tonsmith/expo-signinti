import { useNavigation } from '@react-navigation/native';
import react from 'react'
import {
    View, Text, TouchableOpacity,
    StatusBar, Image, TextInput
} from 'react-native';
import Animated, { FadeIn, FadeOut, FadeInDown, FadeInUp } from 'react-native-reanimated'



export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <View className="bg-white-200 h-full w-full">
            <StatusBar style ="light" />
            <Image className='h-full w-full' source={require('../asset/images/background.png')} />


            <View className='flex-row justify-around w-full absolute'>
                <Animated.Image entering={FadeInUp.duration(1000).delay(200).springify()} className='h-[225] w-[90] ' source={require('../asset/images/light.png')} />
                <Animated.Image entering={FadeInUp.duration(800).delay(400).springify()} className='h-[165] w-[65] ' source={require('../asset/images/light.png')} />
            </View>


            <View className='flex w-full h-full justify-around absolute pt-40 pb-10'>
                <View className='items-center flex'>

                    <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white text-5xl font-bold tracking-wider">
                        Login
                    </Animated.Text>

                </View>


                <View className='flex items-center mx-4 space-y-4'>
                    <Animated.View entering={FadeInDown.duration(1000).delay(200).springify()} className='bg-black/5 w-full rounded-2xl mb-3 p-4'>
                        <TextInput placeholder='Email' placeholderTextColor={'grey'} />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.duration(1000).delay(400).springify()} className='bg-black/5 w-full p-4 rounded-2xl mb-3'>
                        <TextInput placeholder='Password' secureTextEntry placeholderTextColor={'grey'} />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="bg-sky-400 w-full p-4 rounded-3xl mb-3">
                        <TouchableOpacity onPress={() => navigation.push('Home')}>
                            <Text className="text-xl text-center text-white font-bold ">Login</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.duration(1000).delay(800).springify()} className='flex-row justify-center '>
                        <Text>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                            <Text className='text-sky-600'> Signup</Text>
                        </TouchableOpacity>

                    </Animated.View>
                    <Animated.View entering={FadeInDown.duration(1000).delay(800).springify()} className='flex-row justify-center '>
                        <Text>
                            Forgot Password?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.push('Reset')}>
                            <Text className='text-sky-600'> Reset</Text>
                        </TouchableOpacity>

                    </Animated.View>
                </View>


            </View>
        </View>



    )
}