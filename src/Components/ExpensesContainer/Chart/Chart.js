import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data ,max ,total }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return <ChartBar month={item.month} value={item.value} max={max} total={total}/>;
      })}
    </div>
  );
};

export default Chart;