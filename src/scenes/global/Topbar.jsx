import { Box, AppBar, MenuItem, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Toolbar from "@mui/material/Toolbar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useLocation } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/report")) {
      setSelected("Report");
    } else {
      setSelected("Map");
    }
  }, [location.pathname, setSelected]);

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        selected={selected === title}
         sx={{
          color: colors.grey[800],
          backgroundColor: "transparent !important",  
          "&.Mui-selected": {
            backgroundColor: "transparent !important", 
            color: colors.primary[500],
          },
          "&:hover": {
            backgroundColor: "transparent !important",  
          },
          "&:active": {
            backgroundColor: "transparent !important",  
          }
        }}
        disableRipple
        onClick={() => {
          setSelected(title);
        }}
        icon={icon}
      >
        <Typography style={{fontWeight: "bold"}} variant="h4">{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const Topbar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" flexGrow={1} sx={{backgroundColor: colors.white}}>
      <AppBar position="static">
        <Toolbar  sx={{backgroundColor: colors.white, color: 'red'}}>
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Item
              title="Map"
              to="/"
              icon={<MapIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Report"
              to="/report"
              icon={<ReportProblemIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
