import { ReactNode } from "react";

type CardProps = {
  title: string;
  value?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  src?: string;
  children?: ReactNode;
};

export const Cards = ({
  title,
  value,
  value2,
  value3,
  value4,
  src,
  children,
}: CardProps) => {
  return (
    <div className="Card">
      <p className="CardTitle">{title}</p>
      <img src={src} className="OneImg" alt={title} id={title}></img>
      <p className="CardValue">{value}</p>
      <p className="Sun">{value2}</p>
      <p className="Sun">{value3}</p>
      <p className="Dir">{value4}</p>
      {children}
    </div>
  );
};
