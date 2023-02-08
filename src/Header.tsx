import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

export const Header = () => (
  <View style={styles.controlsContainer}>
    <Text style={styles.label}>Selecciona una pareja de personajes:</Text>
    <RNPickerSelect
      placeholder={{ label: 'Selecciona un personaje...' }}
      style={{ viewContainer: styles.textInput }}
      onValueChange={() => {}}
      items={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' }
      ]}
    />
    <RNPickerSelect
      placeholder={{ label: 'Selecciona un personaje...' }}
      style={{ viewContainer: styles.textInput }}
      onValueChange={() => {}}
      items={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' }
      ]}
    />
    <Button title="Limpiar" />
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
    marginBottom: 30
  }
})
