import { useSelector } from "react-redux";

function useRegisterSelector() {
  const isRegistered = useSelector((state) => {
    const { data, fetched, error } = state.register;

    return data?.message === "success" && fetched && !error;
  });

  const store = {
    isRegistered,
  };

  return store;
}

export default useRegisterSelector;
