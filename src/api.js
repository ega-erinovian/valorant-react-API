import axios from "axios";

export const getAgentsList = async () => {
  const agents = await axios.get(`${process.env.REACT_APP_BASEURL}agents`);
  return agents.data.data;
};
