import { Text, TextInput, View, StyleSheet } from "react-native"

const Footer = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}> Desenvolvido por Marco Antônio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    title: {
        textAlign: "center",
        fontSize: 14,
        flex: 1,
    }
})

export default Footer
