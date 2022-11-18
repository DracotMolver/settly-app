import { useSelector } from "react-redux";

function useClientSelector() {
  const clients = useSelector((state) => state.entities.client.data);

  const store = {
    clients,
  };

  return store;
}

export default useClientSelector;
