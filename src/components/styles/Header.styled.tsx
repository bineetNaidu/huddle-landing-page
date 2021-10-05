import styled from 'styled-components';

interface HeaderProps {
  bg?: string;
}

export const StyledHeader = styled.header<HeaderProps>`
  background-color: ${(props) => props.bg || '#ebfbff'};
  padding: 40px 0;
`;
