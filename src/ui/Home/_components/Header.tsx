import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useTranslation } from 'react-i18next'
import { Character } from 'core/character/domain/character'

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
}: Props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.controlsContainer}>
      <Text style={styles.label}>{t('home.selector.title')}</Text>
      <Picker
        placeholder={t('home.selector.placeholder')}
        style={styles.textInput}
        onValueChange={onChangeFirstCharacter}
        selectedValue={firstCharacterFilter ?? ''}>
        {characters.map(character => (
          <Picker.Item key={character.id} label={character.name} value={character.id} />
        ))}
      </Picker>
      <Picker
        placeholder={t('home.selector.placeholder')}
        style={styles.textInput}
        onValueChange={onChangeSecondCharacter}
        selectedValue={secondCharacterFilter ?? ''}>
        {characters.map(character => (
          <Picker.Item key={character.id} label={character.name} value={character.id} />
        ))}
      </Picker>
      <Button title={t('home.button.reset')} onPress={onClear} />
    </View>
  )
}

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
