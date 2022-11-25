import React from "react";
import { BrowserRouter, Route, Routes, useMatch, useNavigate } from "react-router-dom";
import { ContactsScreen } from "./screens/ContactsScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonClient } from "pokenode-ts";
import { TableScreen, TableScreen2 } from "./screens/TableScreen";
import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createDefaultApi } from "./components/api";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const queryClient = new QueryClient();

export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Pokemons
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box sx={{ width: 250 }} onClick={() => setIsDrawerOpen(false)}>
              <List>
                <NavigationLink to="home" label="Home" />
                <NavigationLink to="contacts" label="Contacts" />
                <NavigationLink to="table" label="Table" />
              </List>
            </Box>
          </Drawer>
          <Routes>
            <Route path="home" element={<HomeScreen />}></Route>
            <Route path="contacts" element={<ContactsScreen />}></Route>
            <Route path="table" element={<TableScreen />}></Route>
            <Route path="*" element={<h2>404</h2>}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export const ApiContext = React.createContext(createDefaultApi(new PokemonClient(), "favorite-pokemons"));

type NavigationLinkProps = {
  label: React.ReactNode;
  to: string;
};
function NavigationLink({ label, to }: NavigationLinkProps) {
  const match = useMatch(to);
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      <ListItemButton selected={match !== null} onClick={() => navigate(to)}>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
}
