import { Button, Platform, StyleSheet, View } from 'react-native'
import { Text } from 'ui/_components/Text'
import RNPickerSelect from 'react-native-picker-select'
import { useTranslation } from 'react-i18next'
import { Character } from 'core/character/domain/character'
import { useTheme } from 'ui/_context/themeContext'

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
  const { darkMode } = useTheme()

  return (
    <View style={styles.controlsContainer}>
      <Text style={styles.label}>{t('home.selector.title')}</Text>
      <RNPickerSelect
        placeholder={{ label: t('home.selector.placeholder') }}
        style={{
          viewContainer: StyleSheet.flatten([styles.inputContainer, darkMode && styles.darkInputContainer]),
          inputIOS: darkMode ? styles.darkInput : {},
          inputAndroid: darkMode ? styles.darkInput : {}
        }}
        onValueChange={onChangeFirstCharacter}
        value={firstCharacterFilter ?? ''}
        items={characters.map(character => ({ label: character.name, value: character.id }))}
      />
      <RNPickerSelect
        placeholder={{ label: t('home.selector.placeholder') }}
        style={{
          viewContainer: StyleSheet.flatten([styles.inputContainer, darkMode && styles.darkInputContainer]),
          inputIOS: darkMode ? styles.darkInput : {},
          inputAndroid: darkMode ? styles.darkInput : {}
        }}
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
  inputContainer: {
    color: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: Platform.OS === 'ios' ? 15 : 0,
    marginBottom: 10
  },
  darkInputContainer: {
    borderColor: 'white'
  },
  darkInput: {
    color: 'white'
  },
  controlsContainer: {
    paddingBottom: 20
  }
})
