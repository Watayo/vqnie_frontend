import { React, useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { useVqe } from "./VqeProvider";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Scatter,
} from "recharts";
import { Rings } from "react-loader-spinner";

const url = "https://vqnie.blueqat.com/";
const BlueqatAPI = () => {
  const { vqe } = useVqe();
  const [APIResult, setAPIResult] = useState([]);
  const [nowLoading, setNowLoading] = useState(false);
  const postData = () => {
    setNowLoading(true);
    setAPIResult([]);
    axios
      .post(url + "quc_api", JSON.stringify(vqe))
      .then((response) => {
        for (let data of response.data) {
          const obj = {
            name: data.name,
            energy: data.energy,
            fullci: data.fullci,
          };
          setAPIResult((APIResult) => [...APIResult, obj]);
          setNowLoading(false);
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <Box>
        <Box p={2}>
          <h2>Result</h2>
          {nowLoading ? (
            <Box sx={{ width: 100, m: "auto" }}>
              <Rings color="#00BFFF" height={80} width={80} />
            </Box>
          ) : (
            <ComposedChart
              width={630}
              height={360}
              data={APIResult}
              margin={{
                top: 10,
                right: 30,
                bottom: 5,
                left: 10,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <Tooltip />
              <Legend />
              <XAxis
                dataKey="name"
                type="number"
                label={{ value: "x", position: "insideBottomRight", offset: 0 }}
              />
              <YAxis
                unit="eV"
                type="number"
                label={{ value: "Energy", angle: -90, position: "insideLeft" }}
              />
              <Scatter name="energy" dataKey="energy" fill="red" />
              <Line
                name="full_ci"
                dataKey="fullci"
                type="monotone"
                stroke="#82ca9d"
                dot={false}
                activeDot={false}
                legendType="none"
              />
            </ComposedChart>
          )}

          <Box
            sx={{
              display: "flex",
            }}
            p={2}
          >
            <Button
              onClick={postData}
              style={{ width: 600, height: 40 }}
              variant="contained"
            >
              API RUN
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlueqatAPI;
