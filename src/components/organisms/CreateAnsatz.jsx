import { React } from "react";
import { Box } from "@mui/material";
import AnsatzEditor from "../molecules/AnsatzEditor";
const CreateAnsatz = () => {
  return (
    <Box p={2}>
      <h2>CreateAnsatz</h2>
      <AnsatzEditor></AnsatzEditor>
    </Box>
  );
};

export default CreateAnsatz;
