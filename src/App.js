import React from "react";
import HamiltonianSetting from "./components/organisms/HamiltonianSetting";
import BlueqatAPI from "./containers/BlueqatAPI";
import { AppBar, Typography, Toolbar, Box, Paper } from "@mui/material";
import "./css/App.css";
import HowToUse from "./components/organisms/HowToUse";
import CreateAnsatz from "./components/organisms/CreateAnsatz";
const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blueqat VQE + Qni = VQniE
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center" }} pt={5}>
        <Box>
          <Box
            sx={{
              width: 650,
            }}
            p={2}
          >
            <Paper>
              <HamiltonianSetting></HamiltonianSetting>
              <CreateAnsatz></CreateAnsatz>
            </Paper>
          </Box>
        </Box>
        <Box
          sx={{
            width: 650,
          }}
          p={2}
        >
          <Paper>
            <BlueqatAPI></BlueqatAPI>
          </Paper>
        </Box>
      </Box>
      <Box sx={{ width: 1332, margin: "auto" }}>
        <Paper>
          <HowToUse></HowToUse>
        </Paper>
      </Box>
    </>
  );
};

export default App;
