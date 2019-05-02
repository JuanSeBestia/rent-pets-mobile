import React from 'react';
import { Text, Badge } from 'native-base';
import { generalStyles } from '../theme';

function ErrorMessageText({ error } = { error: 'error' }) {
  return (
    <Badge danger style={generalStyles.Margin}>
      <Text>{error}</Text>
    </Badge>
  );
}

export default ErrorMessageText;
