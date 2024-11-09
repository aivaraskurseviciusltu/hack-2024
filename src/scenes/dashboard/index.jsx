import { Box } from "@mui/material";
import Map from "../../components/Map/Map";

const Dashboard = () => {
  return (
    <Box
      m="20px"
      sx={{
        width: "97%",
        height: "90%",
        overflow: "hidden",
      }}
    >
      <Map />
    </Box>
  );
};

export default Dashboard;
