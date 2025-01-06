import { useMemo } from "react";

import { Grid2 as Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ id, title = '', content, date, imageUrls=[] }) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title]);

    const dispatch = useDispatch()

    const onClickNoteActive = () => {
        dispatch(setActiveNote({id, title, content, date, imageUrls}))
    }


    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNoteActive}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={content} />
                </Grid>

            </ListItemButton>
        </ListItem>
    )
}

