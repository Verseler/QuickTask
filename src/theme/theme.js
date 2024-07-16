import { createTheme } from "@mantine/core";

const primary = [
  "#ffedea",
  "#fbdad6",
  "#eeb4af",
  "#e08c83",
  "#d66a5f",
  "#d05447",
  "#ce483a",
  "#b7392d",
  "#a33126",
  "#90261e"
];

const secondary = ["#fbfaf8"];

const theme = createTheme({
  colors: {
    primary,
    secondary,
  },
});

export default theme;
