import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      margin: 15,
    },
    listContainer: {
      padding: 10,
      backgroundColor: 'white',
      width: '100%',
      borderRadius: 10,
      marginBottom: 15,
    },
    listBigImage: {
      width: '100%',
      height: 125,
      borderRadius: 5,
      marginBottom: 10,
    },
    listMidImage: {
      height: 75,
      width:'35%',
      borderRadius: 5,
      marginRight: 15,
    },
    bubbleContainer: {
      backgroundColor: '#DDDDDD',
      padding: 15,
      borderRadius: 10,
      marginVertical: 15,
    },
    h1: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    h2: {
      fontSize: 21,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    h3: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    searchBox: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,
      marginRight: 16,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'orange',
      margin: 5,
    },
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'black',
    },
  });

export default styles