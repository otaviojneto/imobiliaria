import styled from 'styled-components';

export type ColorProps = {
  color?: string;
  isOpen?: boolean;
};

export const Menu = styled.button<ColorProps>`
  display: none;

  @media (max-width: 568px) {
    background-color: transparent;
    display: block;
    height: 24px;
    position: relative;
    width: 26px;

    &::before {
      background-color: ${({ color }) => color && color};
      content: '';
      height: 4px;
      right: 0;
      position: absolute;
      top: 9px;
      transition: ease-in-out 0.4s;
      width: 17px;
    }

    &::after {
      background-color: ${({ color }) => color && color};
      content: '';
      height: 4px;
      right: 0;
      position: absolute;
      top: 18px;
      transition: ease-in-out 0.4s;
      width: 10px;
    }

    &:hover {
      &::after,
      &::before {
        width: ${({ isOpen }) => (isOpen ? '100%' : '')};
      }
    }

    span {
      background-color: ${({ color }) => color && color};
      height: 4px;
      position: absolute;
      right: 0;
      top: 0px;
      width: 100%;
    }
  }
`;
