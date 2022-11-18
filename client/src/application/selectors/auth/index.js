import { useSelector } from "react-redux";

function useAuthSelector() {
  const isLogged = useSelector(
    (state) => state.entities.auth.data?.isLogged || false
  );
  const userName = useSelector((state) => state.entities.auth.data?.user?.name || "");

  const store = {
    userName,
    isLogged,
  };

  return store;
}

export default useAuthSelector;
