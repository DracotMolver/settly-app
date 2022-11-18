const endpoints = {
  registerAdmin: "http://localhost:8000/api/register",
  loginAdmin: "http://localhost:8000/api/login",
  addClient: "http://localhost:8000/api/clients",
  getClients: "http://localhost:8000/api/clients",
  deleteClient: (id) => `http://localhost:8000/api/clients/${id}`,
};

export default endpoints;
