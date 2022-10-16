
import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import bg from "../../assets/images/BG.png";
import { useRoute, useNavigation } from "@react-navigation/native";
import messages from "../../assets/data/messages.json";
import Message from "../components/ChatListItem/Message";
import InputBox from "../components/InputBox";
import { useEffect } from "react";


const ChatScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name })

    }, [route.params.name])
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bg}
        >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={{ padding: 10 }}
                    inverted
                />
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};
export default ChatScreen;
const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
});
