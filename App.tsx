import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BasicStyles } from './Views/Styles/Basic';


export default function App() {
  return (
    <View style={BasicStyles.container}>
      <Text>Te qiero!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
