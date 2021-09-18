import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import theme from 'utils/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={`
        body {
          background-color: ${grey[50]};      
        }`}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
