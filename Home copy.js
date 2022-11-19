import * as React from 'react';
import { View,Text, StyleSheet, Button, Image, FlatList } from 'react-native';
import {Card} from 'react-native-paper';
import karyawan from './Karyawan';
import { useNavigation } from '@react-navigation/native';

const Home = ({navigator}) => {
    const [data, setData] = React.useState(karyawan);
    const navigation = useNavigation();
    
    const listKaryawan = ({item}) => {
        return (
            <Card style={style.cardUtama} onPress={()=> navigation.navigate('Detail',{karyawan:item})}>
            {/* // <Card style={style.cardUtama}> */}
                <View style={style.cardView}>
                    <Image style={{width:50, height:50,borderRadius:50/2}} source={{uri:item.foto}}/>
                        <View style={{marginLeft:12}}>
                            <Text style={style.teks}>{item.nama}</Text>
                            <Text style={style.teks}>{item.jabatan}</Text>
                        </View>
                </View> 
            </Card>
        )};
        return (
            <View style={{flex:1}}>
                <FlatList 
                data={data}
                renderItem={listKaryawan}
                keyExtractor={item=>item.id}
                ></FlatList>
            </View>
        );
    };

    const style = StyleSheet.create({
        cardUtama: {
            margin: 5,
            shadowColor: '#470000',
            shadowOffset: {width:0, height: 2},
            shadowOpacity: 0.2
        },
        cardView: {
            flexDirection: 'row',
            padding: 6
        },
        teks : {
            fontSize: 16
        }
    })
    export default Home;