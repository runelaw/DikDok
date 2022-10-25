import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import { grey } from '@mui/material/colors';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useInitializeFirebase } from 'store/firebase';
import theme from 'utils/theme';
import { SnackbarProvider } from 'notistack';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // Do not automatically keep on refetching the same data.
      staleTime: Infinity,
    },
  },
});

TimeAgo.addDefaultLocale(en);

export default function MyApp({ Component, pageProps }) {
  useInitializeFirebase();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <QueryClientProvider client={client}>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
