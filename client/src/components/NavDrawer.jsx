import React from 'react'
import Toolbar from "@mui/material/Toolbar";
import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import api from "../utils/api";

function InboxIcon() {
    return null;
}

function MailIcon() {
    return null;
}

const NavDrawer = ({documentIndex}) => {


    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {documentIndex.map((doc, index) => (
                    <ListItem button key={doc.title}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={doc.title} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    )
}

export default NavDrawer
