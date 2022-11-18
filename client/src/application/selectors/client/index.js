import { useSelector } from "react-redux";

function useClientSelector() {
  const client = useSelector((state) => {
    const { data, clientId } = state.entities.client;
    return data.find((client) => client.id === clientId) || {};
  });

  const clients = useSelector((state) => state.entities.client.data);

  const store = {
    clients,
    client,
  };

  return store;
}

export default useClientSelector;
