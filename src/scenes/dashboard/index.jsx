import { Box } from "@mui/material";
import Map from "../../components/Map/Map";

const Dashboard = () => {
  return (
    <Box
      style={{margin: 'auto', marginTop: '15px'}}
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
