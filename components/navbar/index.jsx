import Link from "next/link";
import st from "./style.module.css";

function Navbar() {
  return (
    <nav className={st.navbar}>
      <h2>Logo</h2>
      <ul className={st.list}>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/davron"}>davron</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
