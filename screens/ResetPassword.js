import { useNavigation } from '@react-navigation/native';
import react from 'react'
import {
    View, Text, TouchableOpacity,
    StatusBar, Image, TextInput
} from 'react-native';
import Animated, { FadeIn, FadeOut, FadeInDown, FadeInUp } from 'react-native-reanimated'



export default function ResetPassword() {
    const navigation = useNavigation();
    return (
        <View className="bg-white-200 h-full w-full">
            <StatusBar style="light" />
            <Image className='h-full w-full' source={require('../asset/images/background.png')} />

            <Animated.View entering={FadeInUp.duration(1000).delay(200).springify()} className=' flex w-full justify-around h-full absolute pt-40 pb-20'>
                <View className='items-center flex'>
                    <Text className='text-center font-bold text-white text-3xl'> Forgot your password?</Text>
                    <Text className='text-center text-white'> Enter your email and we'll send a link to reset your password</Text>
                </View>
                <Animated.View entering={FadeInUp.duration(1000).delay(400).springify()}>
                    <Text className='font-bold text-white'> Enter your email</Text>
                    <View className='rounded-3xl p-5 bg-black/5 w-full'>
                        <TextInput placeholder=''>

                        </TextInput>

                    </View>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="bg-sky-400 w-full p-4 rounded-3xl mb-3">
                    <TouchableOpacity>
                        <Text className="text-xl text-center text-white font-bold ">Reset Password</Text>
                    </TouchableOpacity>

                </Animated.View>
                <View className='flex w-full p-5 mb-5'>
                    <Animated.View entering={FadeInDown.duration(1000).delay(800).springify()} className='flex-row justify-center '>
                        <Text>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                            <Text className='text-sky-600'> Signup</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.duration(1000).delay(1000).springify()} className='flex-row justify-center '>
                        <Text>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.push('Login')}>
                            <Text className='text-sky-600'> Login</Text>
                        </TouchableOpacity>


                    </Animated.View>
                </View>





            </Animated.View>







        </View>



    )
}