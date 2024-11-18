import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2 as Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>Fernando Ruiz</Typography>
                </Toolbar >
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Lorem commodo id do labore enim adipisicing dolore'} />
                                    </Grid>

                                </ListItemButton>
                            </ListItem>
                        ))}
                </List>
            </Drawer>
        </Box>
    )
}

