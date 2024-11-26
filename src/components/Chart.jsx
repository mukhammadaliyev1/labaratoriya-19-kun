import lord from "../axios";
import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const LegalLiteracy = () => {
  const [chartone, setchartone] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    lord.get('/knowlodge')
      .then(data => {
        setchartone(data.data.semicharts);
        setLineData(data.data.lineChart.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-wrap flex">
    
      {chartone.length > 0 &&
        chartone.map((item, index) => (
          <div key={index} style={{ width: "50%", height: 220, marginBottom: 20 }}>
            <ResponsiveContainer> 
              <RadialBarChart
                cx="50%"
                cy="100%"
                innerRadius="70%"
                outerRadius="100%"
                startAngle={180}
                endAngle={0}
                barSize={10}
                data={[{ name: item.label, value: item.percentage, fill: item.color }]}
              >
                <RadialBar minAngle={15} dataKey="value" clockWise />
              </RadialBarChart>
            </ResponsiveContainer>
            <p style={{ textAlign: "center" }}>
              {item.percentage}% <br /> {item.label}
            </p>
          </div>
        ))
      }


      <div style={{ width: "50%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart data={lineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#28A264" />
          </LineChart>
        </ResponsiveContainer>
        <div style={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
          <p>Umumiy natija: 78%</p>
        </div>
      </div>
    </div>
  );
};

export default LegalLiteracy;
