import * as Sentry from "@sentry/react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    // The ErrorBoundary is now inside the Router context, so it works!
    <Sentry.ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <AppRoutes />
    </Sentry.ErrorBoundary>
  );
}

export default App;
