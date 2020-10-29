import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

import {
  Container,
  SpecTypeContainer,
  SpecTypeText,
  SpecCarText,
} from './styles';

interface SpecItemProps {
  specData: string | number | undefined;
  icon: string;
  specType: string;
}

const SpecItem: React.FC<SpecItemProps> = ({ specData, icon, specType }) => {
  return (
    <Container>
      <SpecTypeContainer>
        {specType === 'Velocidade Max' ? (
          <FontAwesome name={icon} size={23} color="#E1B30D" />
        ) : (
          <Feather name={icon} size={25} color="#E1B30D" />
        )}
        <SpecTypeText>{specType}</SpecTypeText>
        <View style={{ width: 20 }} />
      </SpecTypeContainer>

      <SpecCarText>{specData}</SpecCarText>
    </Container>
  );
};

export default SpecItem;
