import { useSelector } from "react-redux";

function useAlertSelector() {
  const alert = useSelector((state) => state.ui.alert);

  return alert;
}

export default useAlertSelector;
