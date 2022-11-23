import React, { useEffect, useState } from "react";
import { BtnScroll } from "../components/inicio/BtnScroll";
import { Table } from "../components/inicio/Table";

export const Inicio = () => {
  const [activeBtnScroll, setActiveBtnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400
        ? setActiveBtnScroll(true)
        : setActiveBtnScroll(false);
    });
  }, []);

  return (
    <div className="relative">
      <Table />
      {activeBtnScroll && <BtnScroll />}
    </div>
  );
};
