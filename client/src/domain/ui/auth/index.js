const TOKEN = window.sessionStorage.getItem("token") || "";

const initialState = {
  data: {
    token: TOKEN,
    isLogged: TOKEN,
  },
  feching: false,
  fetched: false,
  error: false,
};

export default initialState;
