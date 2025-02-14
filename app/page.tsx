"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

const Home = () => {
  useEffect(() => {
    const seotiwole = JSON.parse(localStorage.getItem("seotiwole")!) || null;

    if (!seotiwole) {
      redirect("/login");
    } else {
      redirect("/mail");
    }
  }, []);

  return null;
};

export default Home;
