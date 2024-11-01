import GloabalStyles from "./styles/GlobalStyles";
import AppRoute from "./routes/appRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GloabalStyles />
      <AppRoute />
    </QueryClientProvider>
  );
}

export default App;
