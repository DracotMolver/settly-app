import { useSelector } from "react-redux";

function useAuthSelector() {
  const isLogged = useSelector((state) => state.auth.data.isLogged);

  const store = {
    isLogged,
  };

  return store;
}

export default useAuthSelector;
