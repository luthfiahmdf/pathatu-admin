import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { MockCard } from "./store";

export const PieDashboard = () => {
  const COLORS = ["#02E56D", "#71FFB4", "#009647"];
  return (
    <div className="w-full h-full shadow-lg rounded-lg p-4 gap-5 flex flex-col dark:bg-zinc-800">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie data={MockCard} dataKey="value" nameKey="title" fill="#8884d8">
            {MockCard.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
