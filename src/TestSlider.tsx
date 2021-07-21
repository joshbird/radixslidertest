import * as Slider from "@radix-ui/react-slider";

import { styled } from "@stitches/react";

//Positioning containers for use with other elements of the main project I'm using the Slider with

const SliderPos = styled("div", {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0
});

const SliderCont = styled("div", {
    width: "100%",
    height: 40,

    position: "relative"
});

//Slider styled components copied from radix docs

const StyledSlider = styled(Slider.Root, {
    position: "relative",
    marginLeft: 2,
    marginRight: 2,
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    touchAction: "none",
    height: 40
});

const StyledTrack = styled(Slider.Track, {
    backgroundColor: "gainsboro",
    position: "relative",
    flexGrow: 1,
    height: 2
});

const StyledRange = styled(Slider.Range, {
    position: "absolute",
    backgroundColor: "dodgerblue",
    borderRadius: "9999px",
    height: "100%"
});

const StyledThumb = styled(Slider.Thumb, {
    display: "block",
    width: 16,
    height: 16,
    backgroundColor: "white",
    border: "1px solid lightgray",
    borderRadius: "20px",
    "&:focus": {
        outline: "none",
        borderColor: "dodgerblue"
    }
});



const YEARS = [2012, 2021];

type ChartSliderProps = {
    changeYears: (n: number[]) => void;
    value: number[];
};

export function TestSlider({ changeYears, value }: ChartSliderProps) {

    function handleSliderChange(n: number[]) {
        console.log(n);
        changeYears(n);
    }

    return (
        <SliderCont>
            <SliderPos>
                <StyledSlider
                    value={value}
                    min={YEARS[0]}
                    max={YEARS[1]}
                    minStepsBetweenThumbs={1}
                    onValueChange={handleSliderChange}
                >
                    <StyledTrack>
                        <StyledRange />
                    </StyledTrack>
                    {value.map((_, i) => (
                        <StyledThumb key={`thumb-${i}`} />
                    ))}
                </StyledSlider>
            </SliderPos>
        </SliderCont>
    );
}
