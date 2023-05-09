/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--padding": 4 + "px",
    "--height": 16 + "px",
  },
  medium: {
    "--padding": 0,
    "--height": 12 + "px",
  },
  small: {
    "--padding": 0,
    "--height": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <Bar value={value} max={100} style={styles} role="progressbar">
        <VisuallyHidden>{value}</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: var(--padding);
`;

const Bar = styled.progress`
  border-radius: 12px;
  margin: 0;
  background-color: transparent;
  color: ${COLORS.primary};
  border: none;
  height: var(--height);
  display: block;
  width: 100%;

  ::-moz-progress-bar,
  ::-webkit-progress-bar,
  ::-webkit-progress-value {
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
