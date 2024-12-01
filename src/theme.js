import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#F2F5F9",
    white: "#FFFFFF",
    icon: "#E1E8EF",
    red: "#EC1B09",
    brightYellow: "#FF9C1B",
    black: "#000000",
    secondaryFont: "#0B0909",
    subText: "#1A1003",
    sepColor: "#E3E3E3",
    paleOrange: "#FFE3BF",
    papayaWhip: "#FFEED9",
    aliceBlue: "#F2F7FC",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
