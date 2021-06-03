import { createMuiTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    // Style sheet name ⚛️
    // Write component name for style overrides

    MuiCssBaseline: {
      "@global": {
        // wirte global styling here
      },
    },
  },
  // set default props of any component
  props: {
    // Name of the component ⚛️
    MuiContainer: {
      component: Box,
      p: 4,
    },
  },
});

export default theme;
