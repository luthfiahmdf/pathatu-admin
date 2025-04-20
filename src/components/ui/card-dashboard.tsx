import { Card, CardContent, CardDescription } from "./card";
import { FC, ReactNode } from "react";
type TCardDashboard = {
  title: string;
  icon?: ReactNode;
  value: number;
};
export const CardDashboard: FC<TCardDashboard> = ({ title, value, icon }) => {
  return (
    <Card
      className={` w-full shadow-md flex flex-row dark:bg-zinc-800  rounded-xl `}
    >
      {/* <div className={`  border-l-4 rounded-xl  border-l-${color}`} /> */}

      <CardContent className="flex flex-row gap-4 items-center">
        <div className="icon text-4xl">{icon}</div>
        <div className="flex flex-col">
          <CardDescription className="text-4xl text-zinc-950 dark:text-white font-bold">
            {value}
          </CardDescription>
          <p>{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};
