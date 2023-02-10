import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { useTranslation } from 'react-i18next'
import { Character } from '../../../core/character/domain/character'

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
      <RNPickerSelect
        placeholder={{ label: t('home.selector.placeholder') }}
        style={{ viewContainer: styles.textInput }}
        onValueChange={onChangeFirstCharacter}
        value={firstCharacterFilter ?? ''}
        items={characters.map(character => ({ label: character.name, value: character.id }))}
      />
      <RNPickerSelect
        placeholder={{ label: t('home.selector.placeholder') }}
        style={{ viewContainer: styles.textInput }}
        onValueChange={onChangeSecondCharacter}
        value={secondCharacterFilter ?? ''}
        items={characters.map(character => ({ label: character.name, value: character.id }))}
      />
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
