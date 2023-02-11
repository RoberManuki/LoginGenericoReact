import styles from "./Form.module.css";
import useAuth from "../../../hooks/useAuth";
import GenericButton from "../Button/GenericButton";

export default function FormLogin() {
  const { signIn, setUsuario, usuario } = useAuth();

  function handleInput(e: any) {
    setUsuario((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form className={styles.form} onSubmit={signIn}>
      <h4 className={styles.labelLogin}>Welcome!</h4>

      <div className={styles.inputContainer}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu E-mail"
          required
          value={usuario.email}
          onChange={handleInput}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua Senha"
          required
          value={usuario.password}
          onChange={handleInput}
        />
      </div>

      <GenericButton children="Entrar" type="submit" />
    </form>
  );
}
