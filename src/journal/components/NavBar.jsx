import { useDispatch } from 'react-redux'

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Box, Grid2 as Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { startLogout } from '../../store/auth'

export const NavBar = ({ drawerWidth }) => {
    
    const dispatch = useDispatch();

    const onLogout = () => {        
        dispatch(startLogout());
    }

    return (
        <Box>
            <AppBar
                position='fixed'
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar >
                    <IconButton
                        color='inherit'
                        edge='start'
                        sx={{
                            display: { sm: 'none' }
                        }}
                    >
                        <MenuOutlined />
                    </IconButton>

                    <Grid
                        container
                        size={12}
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Typography variant='h6' noWrap>JournalApp</Typography>
                        <IconButton
                            onClick={onLogout}
                        >
                            <LogoutOutlined color='warning' />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

