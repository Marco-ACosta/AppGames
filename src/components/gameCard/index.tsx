import { Text, TouchableOpacity, StyleSheet, Image } from "react-native"
interface Game {
    id: number;
    name: string;
    platform: string;
    genre: string;
    releaseDate: string;
    rating: string;
    developer: string;
    ratingScore: number;
    image: string;
    trailerUrl: string;
  }
const GameCard = ({game, onPress}: {game: Game, onPress: (game: Game) => void}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(game)}>            
            <Text style={styles.title}>{game.name}</Text>
            <Image source={{ uri: game.image }} style={styles.image} resizeMode="contain" />
            <Text> Plataforma: {game.platform}</Text>
            <Text> Gênero: {game.genre}</Text>
            <Text> Data de lançamento: {new Date(game.releaseDate).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</Text>
            <Text> Classificação indicatíva: {game.rating}</Text>
            <Text> Desenvolvedora: {game.developer}</Text>
            <Text> Classificação: {game.ratingScore}</Text>
        </TouchableOpacity>    
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100
    }
})
export default GameCard