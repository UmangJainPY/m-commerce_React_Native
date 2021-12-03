import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function TopSlider() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[
                require("../../../assets/img/img1.png"),
                require("../../../assets/img/img2.png"),
                require("../../../assets/img/img3.png"),
                require("../../../assets/img/img4.png"),
                require("../../../assets/img/img5.png"),
                require("../../../assets/img/img6.jpg"),
                require("../../../assets/img/img7.png"),
                require("../../../assets/img/img1.png"),
            ].map((data, index) => {
                return (
                    <View style={{ width: 80, height: 80 }} key={index}>
                        <Image
                            source={data}
                            style={{ width: 60, height: 60 }}
                            resizeMode="cover"
                        />
                    </View>
                );
            })}
        </ScrollView>
    )
}
