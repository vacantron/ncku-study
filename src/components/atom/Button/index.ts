import styled from '@emotion/styled';
import { ThemeType } from '~/src/theme/theme';
import { StyleProps } from '../propsType';

const theme: ThemeType = {
  primary: {
    color: 'white',
    backgroundColor: 'rgb(229, 68, 109)',
  },
  light: {
    color: 'black',
    backgroundColor: 'lightgray',
  },
};
const Button = styled.button<StyleProps>`
  padding: 5px;
  border-radius: 4px;
  outline: none;
  border: none;
  height: ${(props) => (props.height ? props.height : '30px')};
  width: ${(props) => (props.width ? props.width : '140px')};
  color: ${(props) => theme[props.theme].color};
  background-color: ${(props) => theme[props.theme].backgroundColor};
`;

Button.defaultProps = {
  theme: 'primary',
};

export default Button;
