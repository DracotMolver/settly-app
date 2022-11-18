import React, { useCallback, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
//
import useClientSelector from "../../../../application/selectors/client";
import useClientApi from "../../../../infrastructure/apiHooks/useClientApi";
import Card from "../../atoms/Card";
import PopupMenu from "../../molecules/PopupMenu";
import defaultprops from "./settings/defaultprops";
import proptypes from "./settings/proptypes";
function ListDetail({ onClickEditModal }) {
  const { clients } = useClientSelector();
  const api = useClientApi();

  useEffect(api.reqGetClients, []);

  return (
    <Card>
      <List>
        {clients.map((client) => (
          <ListItem
            secondaryAction={
              <PopupMenu
                data={client.id}
                onDelete={api.reqRemoveClient}
                onEdit={onClickEditModal}
              />
            }
            key={client.id}
          >
            <ListItemText primary={client.name} secondary={client.email} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

ListDetail.defaultProps = defaultprops;
ListDetail.propTypes = proptypes;
ListDetail.displayName = "ListDetail";

export default ListDetail;
