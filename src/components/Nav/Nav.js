import { Link } from "react-router-dom";
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>iStocks</div>
      </Link>
      <Link to="/currencies">
        <div>About</div>
      </Link>
      <Link to="/currencies">
        <div>Stocks</div>
      </Link>
    </div>
  );
};

export default Nav;