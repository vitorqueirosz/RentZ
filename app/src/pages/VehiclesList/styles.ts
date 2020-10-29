import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface ButtonProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding-bottom: 64px;
`;

export const Header = styled.View`
  background: #1d1f24;
  height: 120px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;
export const HeaderTitle = styled.Text`
  color: #ffff;
  font-family: Ubuntu_500Medium;
  font-size: 20px;
`;
export const SearchContainer = styled.View`
  background: #12151d;
  padding: 12px;
  border-radius: 30px;
`;

export const Content = styled.View`
  padding: 32px 16px;
  align-items: center;
`;
export const TopContent = styled.View`
  /* margin: 32px; */
  position: relative;
`;
export const ScrollView = styled.ScrollView`
  position: absolute;
  top: 16px;
`;
export const BrandItem = styled(RectButton)<ButtonProps>`
  width: 120px;
  height: 52px;
  padding: 4px;
  border-radius: 10px;
  margin-right: 8px;

  justify-content: center;
  align-items: center;

  ${props =>
    props.active
      ? css`
          background: #ffc700;
          color: #fff;
        `
      : css`
          background: transparent;
        `}
`;
export const BrandName = styled.Text<ButtonProps>`
  color: #949494;
  font-size: 15px;
  font-family: Ubuntu_500Medium;

  ${props =>
    props.active
      ? css`
          color: #fff;
        `
      : css`
          color: #949494;
        `}
`;

export const CarsContent = styled.View`
  margin-top: 36px;
`;

export const CarsScrollView = styled.ScrollView`
  margin: 24px 0;
`;
