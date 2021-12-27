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

const NavDrawer = ({documentIndex, setMarkdownValue}) => {
    const setMarkdown = async documentPath => {
        console.log(documentPath)
        const markdown = (await api.getDocument(documentPath)).data
        console.log(markdown)
        setMarkdownValue(markdown)
    }
    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {documentIndex.map((doc, index) => (
                    <ListItem button key={doc.title} onClick={(e)=>setMarkdown(doc.path, e)}>
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
