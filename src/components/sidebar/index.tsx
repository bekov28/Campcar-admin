import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import { Navlink } from "./style";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: "sm", fontWeight: "lg", cursor: "pointer" }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>

        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          <Navlink to={"/motor"}>
            <ListItemButton>Motor</ListItemButton>
          </Navlink>
          <Navlink to={"/caravan"}>
            <ListItemButton>Caravan</ListItemButton>
          </Navlink>
          <Navlink to={"/tuning"}>
            <ListItemButton>Tuning Car</ListItemButton>
          </Navlink>
          <Navlink to={"/usedCar"}>
            <ListItemButton>Used Car</ListItemButton>
          </Navlink>
          <Navlink to={"/camping"}>
            <ListItemButton>Camping Place</ListItemButton>
          </Navlink>
          <Navlink to={"/carousel"}>
            <ListItemButton>Carousel</ListItemButton>
          </Navlink>
          <Navlink to={"/usersList"}>
            <ListItemButton>Users List</ListItemButton>
          </Navlink>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
