import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Home from './components/Home';


export default function App() {
  return (
    
    < ScrollView style={styles.container}>
      <Header/>
      <Home/>
      
      <StatusBar style="auto" />
    </  ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',
        
  },
});
