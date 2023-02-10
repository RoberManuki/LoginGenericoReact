import { MainRoutes } from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth.context";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <MainRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
