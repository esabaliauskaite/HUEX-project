import { ReactNode } from "react";
type CardProps = {
  date: string;
  minC?: string;
  maxC?: string;
  minF?: string;
  maxF?: string;
  children?: ReactNode;
};

export const WeekCard = ({
  date,
  minC,
  maxC,
  minF,
  maxF,
  children,
}: CardProps) => {
  return (
    <div className="WeekCards">
      <p className="WeekCardTitle">{date.substring(5, 10)}</p>
      <div id="Children"> {children}</div>
      <div id="WeekTempDiv">
        <p className="WeekTemp">
          {maxC} {minC}
        </p>
        <p className="WeekTemp">
          {maxF} {minF}
        </p>
      </div>
    </div>
  );
};
