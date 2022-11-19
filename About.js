import * as React from "react";
import { Button, Text, View } from "react-native";

const About = ({navigation}) => {

    return(
        <View>
            <Text>Home About</Text>
            <Button
                onPress={()=>navigation.navigate('Detail')}
                title="Got To Detail"
                />
            <Button
                onPress={()=>navigation.goBack()}
                title="Got To Back"
                />
        </View>
    );
}

export default About;