import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';

export default function RedButton() {
    const [pressed, setPressed] = useState(false);

    return (
        <View className="bg-gray-50 flex justify-center items-center h-full w-full">
            <Pressable
                className={`z-10 ${pressed ? 'bg-red-700 top-2' : 'bg-red-500'} p-4 rounded-full w-[80px] h-[80px] flex justify-center items-center`}
                style={{ transform: [{ rotateX: '45deg' }] }}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
            >
            </Pressable>
            <View className="z-2 mt-[-85px] bg-gray-500 rounded-full w-[80px] h-[80px] fixed" style={{ transform: [{ rotateX: '45deg' }] }} />
            <View className="z-1 mt-[-85px] bg-gray-500 h-[80px] fixed" />
            <View className="flex flex-row top-10">
                <Text className="text-red-500 text-lg font-bold p-11">Option 1!</Text>
                <Text className="text-red-500 text-lg font-bold p-11">Option 2!</Text>
            </View>
        </View>
    );
}