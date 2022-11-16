import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
//
import Card from "../../atoms/Card";
import PopupMenu from "../../molecules/PopupMenu";

function ListDetail() {
  return (
    <Card>
      <List>
        <ListItem secondaryAction={<PopupMenu />}>
          {/* <ListItemAvatar>
            <Avatar>
          </ListItemAvatar> */}
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </Card>
  );
}

ListDetail.displayName = "ListDetail";

export default ListDetail;
