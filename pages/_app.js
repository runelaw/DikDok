import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useInitializeAuthStore } from 'store/auth';
import { useInitializeFirebase } from 'store/firebase';
import theme from 'utils/theme';

const queryClient = new QueryClient();

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

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
