"use client";

import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

const Pokemons = (props: Props) => {
  return (
    <div>
      <div>pokemons</div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Pokemons;
