import React from "react";
import { auth, provider } from "../firebase/firebase-config";
import { Link } from "next/link";

const priavate = ({ props }) => {
  if (!auth) {
    <Link href={"/login"} />;
  } else {
    return props;
  }
};

export default priavate;
