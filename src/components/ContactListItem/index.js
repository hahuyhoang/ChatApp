import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={{}}
            style={styles.container}>
            {/* User Avatar */}
            <Image
                source={{
                    uri: user.image
                }}
                style={styles.image}
            />
                    <Text style={styles.name}>{user.name}</Text>
        </Pressable>
    );
};

export default ContactListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "stretch",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    image: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
        flex: 1,
    },
    subTitle: {
        color: "grey",
    },
});