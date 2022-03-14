import { React } from "react";
import { useVqe } from "../../containers/VqeProvider";
import { useInput } from "../../hooks";
import { TextField, Button, Box } from "@mui/material";
import "../css/VqeSetting.css";

const HamiltonianSetting = () => {
  const [hamiltonianProps] = useInput("");
  const { vqe, setHamiltonianData } = useVqe();

  const submit = (event) => {
    event.preventDefault();
    setHamiltonianData(hamiltonianProps.value);
    // resetHamiltonian();
  };

  return (
    <>
      <Box p={2}>
        <h2>SetGeometry</h2>
        <form onSubmit={submit}>
          <Box sx={{ display: "flex", mx: 1 }} mt={2.5} mb={1.25}>
            <TextField
              variant="outlined"
              style={{ width: 500 }}
              label="Geometry"
              required
              {...hamiltonianProps}
            />
            <Box sx={{ my: "auto", ml: 2 }}>
              <Button style={{ height: 45 }} type="submit" variant="contained">
                {vqe["Geometry"] === "" ? (
                  <span>SET</span>
                ) : (
                  <span>DONE/SET</span>
                )}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default HamiltonianSetting;
