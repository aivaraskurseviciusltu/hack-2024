import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Alerts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Alerts" subtitle="War Updates from the Throne: Defending Calbalia Against the Invasion of Ducalolia" />

      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" sx={{ fontWeight: 'bold' }}>
            [2023/11/25] 12:00 : The Invasion Unfolds
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant="h5">
            In an unexpected turn of events, the tranquil lands of Calbalia are under siege as the Principality of Ducalolia
            launches a daring invasion. The King of Calbalia, our sovereign ruler, stands resolute in defense of our kingdom.
            Stay tuned for real-time updates on the unfolding conflict.
          </Typography>
          <img src={`../../assets/invaded.png`} alt="Invasion Image" style={{ width: '400px', padding: '20px'}} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" sx={{ fontWeight: 'bold' }}>
            [2023/11/25] 12:30 : King's Call to Arms
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Amidst the invasion by Ducalolia, our valiant King issues a resounding call to arms.
            The people of Calbalia unite in solidarity as we face this unprecedented challenge.
            Follow the royal updates closely as our forces muster
            to repel the invaders and safeguard the sovereignty of our beloved kingdom.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" sx={{ fontWeight: 'bold' }}>
            [2023/11/25] 13:00 : Frontline Dispatches
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Experience the frontlines through the eyes of our courageous soldiers as they strive to protect
            Calbalia from Ducalolian forces. Regular dispatches will keep you informed about the ongoing battles,
            strategic maneuvers, and the unwavering spirit of our defenders.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" sx={{ fontWeight: 'bold' }}>
            [2023/11/25] 13:30 : Kingdom's Resilience
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Witness the strength and resilience of Calbalia in the face of adversity.
            Despite the invasion, the spirit of our people remains unbroken.
            Discover stories of communities coming together,
            tales of heroism, and the determination to preserve the rich heritage of our kingdom.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" sx={{ fontWeight: 'bold' }}>
            [2023/11/25] 14:00 : International Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            As news of the invasion spreads, expressions of solidarity and support pour in from
            neighboring realms and allies. Follow the diplomatic developments and international
            efforts to bring an end to the conflict. Calbalia is not alone in this struggle,
            and together, we stand stronger.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" sx={{ fontWeight: 'bold' }}>
            [2023/11/25] 14:30 : International Support Strengthens
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Leaders from neighboring realms and international allies have issued statements condemning
            the invasion and expressing unwavering support for Calbalia.
            Diplomatic channels are abuzz with discussions on collaborative efforts to counter the Ducalolian threat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5" sx={{ fontWeight: 'bold' }}>
            [2023/11/25] 15:00 : Humanitarian Aid Arrives
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Humanitarian aid from allied nations has begun to arrive, bringing much-needed
            relief to those affected by the conflict. Medical supplies, food provisions,
            and shelter materials are being distributed to support Calbalia's citizens.
            Joint humanitarian initiatives are in progress, demonstrating the power of
            international collaboration. Relief organizations are working hand-in-hand to
            address the needs of displaced populations and those impacted by the invasion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Alerts;
