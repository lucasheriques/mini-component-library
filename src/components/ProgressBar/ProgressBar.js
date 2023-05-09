/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--padding": 4 + "px",
    "--height": 16 + "px",
    "--border-radius": 8 + "px",
  },
  medium: {
    "--padding": 0,
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
  },
  small: {
    "--padding": 0,
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <BarWrapper>
        <Bar
          value={value}
          max={100}
          style={{
            ...styles,
            "--width": value + "%",
          }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <VisuallyHidden>{value}</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  padding: var(--padding);
  /* trim off corners when progress bar is near-full */
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
  color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;
export default ProgressBar;
