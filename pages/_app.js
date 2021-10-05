import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useCallback, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAuth, useInitializeAuthStore } from 'store/auth';
import { useInitializeFirebase } from 'store/firebase';
import theme from 'utils/theme';

export default function MyApp({ Component, pageProps }) {
  useInitializeFirebase();
  useInitializeAuthStore();

  const uid = useAuth(useCallback((state) => state.user?.uid, []));
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Do not automatically keep on refetching the same data.
            staleTime: Infinity,
          },
        },
      }),
    // When the user changes, reset the query cache in the client.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [uid]
  );

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
