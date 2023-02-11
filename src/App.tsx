import FormLogin from "./components/Login/Form/Form";
import { AuthProvider } from "./contexts/Auth.context";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <>
      <AuthProvider>
          <FormLogin />
      </AuthProvider>
    </>
  );
}

export default App;
