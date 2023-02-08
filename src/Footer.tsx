import {Text} from "react-native"

interface Props {
  comicCount: number
}

export const Footer = ({comicCount}: Props) => (
  <Text>Elementos en la lista: {comicCount}</Text>
)
