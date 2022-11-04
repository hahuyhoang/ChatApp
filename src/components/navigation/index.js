import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from "../../screen/ChatsScreen";
import ChatScreen from "../../screen/ChatScreen";
import MainTabNavigator from "./MainTabNavigator";
import ContactsScreen from "../../screen/ContactsScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Chats" component={ChatsScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;