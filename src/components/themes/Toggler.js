import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { useTheme } from '.'

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Switch>
      <input type="checkbox" onChange={toggleTheme} checked={isDarkTheme}/>
      <Slider />
    </Switch>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

const Slider = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.toggleBackground};
  width: 6rem;
  height: 3rem;
  position: absolute;
  top: 0;
  transition: 0.3s;
  border-radius: 9999px;
  overflow: hidden;

  /* Sun */
  &::before {
    content: "";
    display: block;
    background-color: #ffc300;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    transition: 0.3s;
  }

  /* Circle to cover the Sun and show a Moon */
  &::after {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.toggleBackground};
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 100%;
    position: absolute;
    top: 0.2rem;
    left: -2rem;
    transition: 0.3s;
  }
`;

const Switch = styled.label`
  width: 6rem;
  height: 3rem;
  border-radius: 9999px;
  cursor: pointer;
  position: relative;

  & > input[type="checkbox"] {
    width: 100%;
    margin: 0;
    height: 100%;

    &:checked + ${Slider}::before {
      left: 3.25rem;
    }

    &:checked + ${Slider}::after {
      left: 3rem;
    }
  }
`;

export default Toggle;

