import { ReactNode } from "react";

interface props {
  children: ReactNode;
  tit: string;
}

function display({children, tit}: props) {
  return (
    <>
      <div className="intro">
        <h2 id="second_tital">{tit}</h2>
        {children}
      </div>
    </>
  );
}

export default display;
