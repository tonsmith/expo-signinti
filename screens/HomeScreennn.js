import { useNavigation } from '@react-navigation/native';
import react from 'react'
import {
    View, Text, TouchableOpacity,
    StatusBar, Image, TextInput, Scollview,
    StyleSheet, ImageBackground
} from 'react-native';
import Animated, { FadeIn, FadeOut, FadeInDown, FadeInUp } from 'react-native-reanimated'



export default function HomeScreennn() {
    const navigation = useNavigation();
    return (

        // <View className="bg-white-200 h-full w-full">
        //     <StatusBar style="light" />
        //     <Image className='h-full w-full' source={require('../asset/images/background.png')}/>
        <View>
            <ImageBackground source={require('../asset/images/background.png')}
                style={{ width: 393, height: 800 }}>
                <View style={styles.headerone}>
                    <Text style={styles.textheader}>Dashboard</Text>
                </View>
                <View style={styles.headertwo}>
                    <View>
                    <Text style={styles.container}>Dashboard</Text>
                    </View>
                </View>
            </ImageBackground>


        </View>



    )
}
const styles = StyleSheet.create({
    headerone: {

        width: 500,
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        marginBottom: 5

    },
    textheader: {
        fontSize: 30,
        width: 'auto',
        height: 'auto',
        marginHorizontal: 10,
        paddingTop: 60,
        textAlign: 'left',
        paddingRight: 60,
        paddingLeft: ''
    },
    container:{
        backgroundColor: 'white',
        height: 170,
        width: 400,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 10,
        // borderRadius: 50
        flexDirectio: 'row'
    },
    // headertwo:{
    //     height: 500,
    //     width: 500,
    //     backgroundColor: 'red'
    // },
})
