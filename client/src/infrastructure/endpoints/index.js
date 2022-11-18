export const remoteAssets = {
  img: (path) => `http://localhost:8000/storage/${path.replace("public", "")}`,
};

const endpoints = {
  getAuthUser: "http://localhost:8000/api/admin",
  registerAdmin: "http://localhost:8000/api/register",
  loginAdmin: "http://localhost:8000/api/login",
  addClient: "http://localhost:8000/api/clients",
  getClients: "http://localhost:8000/api/clients",
  deleteClient: (id) => `http://localhost:8000/api/clients/${id}`,
  editClient: (id) => `http://localhost:8000/api/clients/${id}?_method=PUT`,
};

export default endpoints;
