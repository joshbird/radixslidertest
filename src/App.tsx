import { TestSlider } from "./TestSlider";
import {styled} from '@stitches/react'
import React, { useState } from "react";

const Wrapper = styled('div', {
  width: '50vw',
  height: '20vh',

  left: '25vw',
  top: '25vh',
  position: 'absolute',


})

export default function App() {
    const [yearRange, changeYearRange] = useState<number[]>([2013, 2020]);

    return (
        <Wrapper>
            <span>
                Years Between {yearRange[0]} and {yearRange[1]}
            </span>

            <TestSlider value={yearRange} changeYears={(n: number[]) => changeYearRange(n)} />
        </Wrapper>
    );
}

