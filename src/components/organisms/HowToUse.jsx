import { React } from "react";
import { Box } from "@mui/material";
import "../css/VqeSetting.css";

const HowToUse = () => {
  return (
    <>
      <Box p={2}>
        <h2>Description</h2>
        <p>
          GeometryとAnsatzの設定が完了したら、SETを押してください。それぞれのSETボタンが両方DONE/SET状態になったらAPIを実行できます。
        </p>
        <p>
          Geometryには一つだけ変数として"length"を入れることができます。blueqatコードの形に準拠して下さい。（水素原子の場合[('H',
          (0., 0., 0.)),('H', (0., 0., length))]と記入。）
        </p>
        <p>Ansatzに関して、量子ビットの初期状態はすべて0です。</p>
      </Box>
    </>
  );
};

export default HowToUse;
