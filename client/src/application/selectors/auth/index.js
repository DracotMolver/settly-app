import { useSelector } from "react-redux";

function useAuthSelector() {
  const isLogged = useSelector(
    (state) => state.ui.auth.data?.isLogged || false
  );
  const userName = useSelector((state) => state.ui.auth.data?.user?.name || "");

  const store = {
    userName,
    isLogged,
  };

  return store;
}

export default useAuthSelector;
