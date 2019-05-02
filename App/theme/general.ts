import { StyleSheet, Dimensions } from 'react-native';
import { spacing } from './spacing';

const win = Dimensions.get('window');

export const generalStyles = StyleSheet.create({
  ContainerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Flex1: {
    flex: 1,
  },
  WidthFull: {
    width: win.width,
  },
  Padding: {
    padding: spacing[4],
  },
  Margin: {
    margin: spacing[4],
  },
  FormFinalInput: {
    marginBottom: spacing[5],
  },
});
