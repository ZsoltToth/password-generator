import {Theme} from "pretty-format";
import {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

export type ConfigurationPanelProps = {
    length: number,
    count: number
};

export const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
                                                                          length: initLength,
                                                                          count: initCount
                                                                      }: ConfigurationPanelProps) => {

    const [length, setLength] = useState<number>(initLength);
    const [count, setCount] = useState<number>(initCount);

    return (
        <SafeAreaProvider>
            <View style={{flexDirection: "row"}}>
                <Text>Length: </Text>
                <TextInput
                    value={String(length)}
                    onChangeText={
                        value => {
                            setLength(Number(value))
                        }
                    }
                    keyboardType={'number-pad'}
                    maxLength={3}
                    inputMode={"numeric"}
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>Count: </Text>
                <TextInput
                    value={String(count)}
                    onChangeText={
                        value => {
                            setCount(Number(value))
                        }
                    }
                    keyboardType={'number-pad'}
                    maxLength={3}
                    inputMode={"numeric"}
                />
            </View>
            <View style={{flexDirection: "row", flex: 1, alignItems: 'stretch'}}>
                <Button title={"Generate"}/>
            </View>
        </SafeAreaProvider>
    );
};