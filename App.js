import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/components/navigation';
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from "./src/aws-exports"

Amplify.configure({ ...awsconfig, Analytics: { disable: true } });


function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 20,
    alignItems: "stretch"
  },
});
export default withAuthenticator(App)