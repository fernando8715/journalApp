import { useSelector } from "react-redux";

import { Box, Divider, Drawer, Grid2 as Grid, List, Toolbar, Typography } from "@mui/material"
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {

    const {displayName} = useSelector(state => state.auth);
    const { notes } = useSelector( state => state.journal);

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
                    <Typography variant="h6" noWrap component='div'>{displayName}</Typography>
                </Toolbar >
                <Divider />
                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))}
                </List>
            </Drawer>
        </Box>
    )
}

