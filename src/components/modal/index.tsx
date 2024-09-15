import { Modal, StyleSheet, View, Text, Button } from "react-native"
import { Video } from 'expo-av';
import YoutubeIframe from 'react-native-youtube-iframe';
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

const ModalGame = ({ modalVisible, selectedGame, handleCloseModal }: { modalVisible: boolean, selectedGame: Game | null, handleCloseModal: () => void }) => {
    return (
    <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.container}>
          {selectedGame && (
            <View style={styles.content}>
              <Text style={styles.title}> {selectedGame.name}</Text>

              <YoutubeIframe videoId={selectedGame.trailerUrl} height={100}/>
              <Button title="Fechar " onPress={handleCloseModal}/>
            </View>
          )}
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '80%',
      paddingVertical: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      alignItems: 'center',
      height: 500
    },
    title: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
    }
  });

export default ModalGame

