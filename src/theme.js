import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgPrimary: "#F2F5F9",
    bgCard: "#FFFFFF",
    bgIcon: "#E1E8EF",
    red: "#EC1B09",
    brightYellow: "#FF9C1B",
    black: "#000000",
    secondaryFont: "#0B0909",
    subText: "#1A1003",
  },
  sepColor: "#E3E3E3",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
