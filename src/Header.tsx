import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
  onFilter: (text: string) => void
  onClear: () => void
  filter: string
}

export const Header = ({ filter, onFilter, onClear }: Props) => (
  <>
    <Text style={styles.label}>Escribe un personaje en la lista:</Text>
    <View style={styles.controlsContainer}>
      <TextInput style={styles.textInput} value={filter} onChangeText={onFilter} />
      <Button title="Limpiar" onPress={onClear} />
    </View>
  </>
)

const styles = StyleSheet.create({
  label: {
    marginBottom: 5
  },
  textInput: {
    marginRight: 10,
    borderColor: 'black',
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  }
})
