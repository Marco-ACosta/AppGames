import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import games  from './src/data/game'
import GameCard from "./src/components/gameCard";
import { useState } from "react";
import ModalGame from "./src/components/modal";
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

export default function App() {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<Game|null>(null);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text === '') {
      setFilteredGames(games);
    } else {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  };

  const handleGamePress = (game: Game) => {
    setSelectedGame(game);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedGame(null);
  };

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch}/>
      <FlatList data={filteredGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <GameCard game={item} onPress={handleGamePress} />}
        ListEmptyComponent={<Text>Não há jogos disponíveis</Text>}
        style={styles.list}
      />
      <Footer />
      <ModalGame modalVisible={modalVisible} selectedGame={selectedGame} handleCloseModal={handleCloseModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  list: {
    flex: 1,
    width: "100%"
  },
});