import "./App.css";
import { Articles } from "./features/Articles/Articles.container";
import styles from "./App.module.scss";
import { ReactComponent as OlioLogo } from "./olio-logo.svg";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <OlioLogo />
      </header>
      <Articles />
    </div>
  );
}

export default App;
