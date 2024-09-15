import { Text, TextInput, View, StyleSheet } from "react-native"

const Header = ({ onSearch }: { onSearch: (text: string) => void }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                App Games
            </Text>
            <TextInput 
                style={styles.input} 
                placeholder="Pesquisar" 
                onChangeText={onSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: '#f1f1f1',
        zIndex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        flex: 1,
    }
})

export default Header
