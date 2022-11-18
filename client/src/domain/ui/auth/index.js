const TOKEN = window.sessionStorage.getItem("token") || "";

const initialState = {
  data: {
    token: TOKEN,
    isLogged: Boolean(TOKEN),
    user: {}
  },
  feching: false,
  fetched: false,
  error: false,
};

export default initialState;
