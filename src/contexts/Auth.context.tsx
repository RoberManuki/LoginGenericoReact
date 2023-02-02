import swal from "sweetalert";
import { createContext, useState } from "react";

const usuarioEstadoInicial = {
  terminal: "",
  email: "",
  password: "",
};

type UsuarioType = {
  terminal: string;
  email: string;
  password: string;
};

type AuthContextType = {
  usuario: UsuarioType;
  setUsuario: React.Dispatch<React.SetStateAction<UsuarioType>>;
  signIn: (event: any) => void;
};

type DataResponseType = {
  token?: string;
  error?: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [usuario, setUsuario] = useState<UsuarioType>(usuarioEstadoInicial);

  async function signIn(event: any) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      // const { token } = await response.json();

      // Exemplo de retorno
      const { token, error }: DataResponseType = { error: "Deu ruim!" };

      // Validação
      if (token) swal("Caso tenha token, entra no sistema!");
      else swal(`"Mostra erro genérico! ${error}`);
    } catch (_error) {
      alert("Erro ao conectar no servidor!");
    }
  }

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
