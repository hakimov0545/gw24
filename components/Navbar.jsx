import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul>
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
