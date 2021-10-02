import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useInitializeAuthStore } from 'store/auth';
import { useInitializeFirebase } from 'store/firebase';
import theme from 'utils/theme';

export default function MyApp({ Component, pageProps }) {
  useInitializeFirebase();
  useInitializeAuthStore();

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
