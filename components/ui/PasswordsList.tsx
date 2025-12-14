import {FlatList, Text} from "react-native";

export const PasswordsList: React.FC =  ({}) => {

    const passwords: string[] = [
        'password',
        's3cret'
    ];

    return (
        <FlatList
            data={passwords}
            renderItem={({item}) => {
                return (
                    <Text key={item}>{item}</Text>
                )
            }}
        />
    );
};