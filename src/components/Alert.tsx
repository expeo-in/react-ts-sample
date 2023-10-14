import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <>
      <h2>Alert Component</h2>
      <div className="alert alert-primary">{children}</div>
    </>
  );
};

export default Alert;
