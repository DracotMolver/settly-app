import { useSelector } from "react-redux";

function useAuthSelector() {
  const isLogged = useSelector((state) => state.ui.auth.data?.isLogged || false);

  const store = {
    isLogged,
  };

  return store;
}

export default useAuthSelector;
