import NewButton from "./Newbutton";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
  tit: string;
}
function Intro({children, tit}: props) {
  return (
    <>
      <div className="intro">
        <h2 id="second_tital">{tit}</h2>
        <p>
          {children}
        </p>
        <NewButton></NewButton>
      </div>
    </>
  );
}

export default Intro;
