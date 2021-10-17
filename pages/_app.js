import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useInitializeAuthStore } from 'store/auth';
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

      <QueryClientProvider client={client}>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
