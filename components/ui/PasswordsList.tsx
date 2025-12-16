import {FlatList, Text} from "react-native";
import {useSelector} from "react-redux";
import {selectPasswords} from "@/store/passwordsSlice";
import {ThemedText} from "@/components/themed-text";

export const PasswordsList: React.FC =  ({}) => {

    const passwords: string[] = useSelector(selectPasswords)

    return (
        <FlatList
            data={passwords}
            renderItem={({item}) => {
                return (
                    <ThemedText key={item}>{item}</ThemedText>
                )
            }}
        />
    );
};