import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    kids: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#222',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '30%',
      alignItems: 'center',
    },
    // kids
    btn: {
      backgroundColor: '#444',
      overflow: 'hidden',
      borderRadius: 100/2,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    btnText: {
      color: '#f2f3f5',
    },
    item: {
        justifyContent: 'space-around',
        padding: 10,
        borderBottomWidth: 1,  
        borderColor: '#444',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 100/2
    },
    names: {
        marginTop: 8,
        fontWeight: 'bold',
        color: '#f2f3f5'
      },
    number: {
      color: '#f2f3f5'
    },
    text: {
        marginLeft: 20,
        color: '#f2f3f5'
    },
    handle: {
      width: 100,
      height: 8,
      backgroundColor: '#ccc',
      borderRadius: 10,
      marginVertical: 5
    },
    list: {
      width: '100%'
    }
  })

export default styles