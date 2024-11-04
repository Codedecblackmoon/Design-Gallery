import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onclose: () => void;
}

const Alert = ({ children, onclose }: props) => {
  return (
    <div className="alert alert-success alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onclose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;