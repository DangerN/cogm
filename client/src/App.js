import React, {useEffect, useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import api from './utils/api'
import NavDrawer from './components/NavDrawer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './styles/index.sass'
import {Drawer} from "@mui/material"
import Markdown from 'markdown-to-jsx'


function App() {
    const drawerWidth = 280
    const [ documentIndex, setDocumentIndex ] = useState([])
    const [mobileOpen, setMobileOpen] = useState(false);
    const [ markdownValue, setMarkdownValue ] = useState('Under Construction')

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        (async () => {
            const doc = await api.getDocument('index.json')
            setDocumentIndex(doc.data)
        })()
    }, [])

    const navDrawer = <NavDrawer documentIndex={documentIndex} setMarkdownValue={setMarkdownValue}/>

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Cult of the God Machine
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {navDrawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {navDrawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Markdown>{ markdownValue }</Markdown>
            </Box>
            {/*Under Construction*/}
            {/*<DocumentIndex index={documentIndex} />*/}
        </Box>
    )
}

export default App;
