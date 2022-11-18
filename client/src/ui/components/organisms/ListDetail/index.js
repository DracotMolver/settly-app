import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
//
import Card from "../../atoms/Card";
import PopupMenu from "../../molecules/PopupMenu";
import useClientSelector from "../../../../application/selectors/client";
import useClientApi from "../../../../infrastructure/apiHooks/useClientApi";

function ListDetail() {
  const { clients } = useClientSelector();
  const api = useClientApi();

  useEffect(api.reqGetClients, []);

  return (
    <Card>
      <List>
        {clients.map((client) => (
          <ListItem secondaryAction={<PopupMenu />} key={client.email}>
            <ListItemText primary={client.name} secondary={client.email} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

ListDetail.displayName = "ListDetail";

export default ListDetail;
