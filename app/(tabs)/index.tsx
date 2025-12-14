import {Image} from 'expo-image';
import {StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import {ThemedText} from '@/components/themed-text';
import {ThemedView} from '@/components/themed-view';
import {ConfigurationPanel} from "@/components/ui/ConfigurationPanel";
import {PasswordsList} from "@/components/ui/PasswordsList";
import {Provider} from "react-redux";
import {store} from "@/store/store";

export default function HomeScreen() {
    return (
        <Provider store={store}>
            <ParallaxScrollView
                headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
                headerImage={
                    <Image
                        source={require('@/assets/images/partial-react-logo.png')}
                        style={styles.reactLogo}
                    />
                }>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Password Generator</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ConfigurationPanel length={5} count={10}/>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <PasswordsList/>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                </ThemedView>
            </ParallaxScrollView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
