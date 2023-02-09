import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { Character } from '../api'

interface Props {
  characters: Character[]
  firstCharacterFilter?: string
  secondCharacterFilter?: string
  onChangeFirstCharacter: (value: string) => void
  onChangeSecondCharacter: (value: string) => void
  onClear: () => void
}

export const Header = ({
  characters,
  firstCharacterFilter,
  secondCharacterFilter,
  onChangeFirstCharacter,
  onChangeSecondCharacter,
  onClear
}: Props) => (
  <View style={styles.controlsContainer}>
    <Text style={styles.label}>Selecciona una pareja de personajes:</Text>
    <RNPickerSelect
      placeholder={{ label: 'Selecciona un personaje...' }}
      style={{ viewContainer: styles.textInput }}
      onValueChange={onChangeFirstCharacter}
      value={firstCharacterFilter ?? ''}
      items={characters.map(character => ({ label: character.name, value: character.id }))}
    />
    <RNPickerSelect
      placeholder={{ label: 'Selecciona un personaje...' }}
      style={{ viewContainer: styles.textInput }}
      onValueChange={onChangeSecondCharacter}
      value={secondCharacterFilter ?? ''}
      items={characters.map(character => ({ label: character.name, value: character.id }))}
    />
    <Button title="Limpiar" onPress={onClear} />
  </View>
)

const styles = StyleSheet.create({
  label: {
    marginBottom: 5
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: Platform.OS === 'ios' ? 15 : 0,
    marginBottom: 10
  },
  controlsContainer: {
    paddingBottom: 20
  }
})
