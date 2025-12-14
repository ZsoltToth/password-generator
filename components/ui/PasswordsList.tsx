import {FlatList, Text} from "react-native";
import {useSelector} from "react-redux";
import {selectPasswords} from "@/store/passwordsSlice";

export const PasswordsList: React.FC =  ({}) => {

    const passwords: string[] = useSelector(selectPasswords)

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