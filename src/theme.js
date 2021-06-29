import { createMuiTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    // Style sheet name ⚛️
    // Write component name for style overrides
    MuiButton: {
      root: {
        // backgroundColor: "red",
        marginTop: 20,

        "&:not(:last-child)": {
          marginRight: 15,
        },
        "&:hover $startIcon": {
          transform: "rotate(360deg)",
        },
      },
      startIcon: {
        transition: "all .3s",
      },
    },

    MuiCssBaseline: {
      "@global": {
        // wirte global styling here

        "::-webkit-scrollbar": {
          width: "10px",
          "&-track": {
            background: "#f1f1f1",
          },
          "&-thumb": {
            background: "#888",
          },
          "&-thumb:hover": {
            background: "#555",
          },
        },
      },
    },
  },
  // set default props of any component
  props: {
    // Name of the component ⚛️
    MuiContainer: {
      component: Box,
      p: 3,
    },
    MuiTypography: {
      display: "block",
    },
    MuiPaper: {
      component: Box,
      p: 2,
      variant: "outlined",
    },
  },
});

export default theme;
