import axios from "react-native-axios";

import config from "./config";

const ci = axios.create({ baseURL: config.API_URL, timeout: 30000 });

const unlock = async () => {
  try {
    const { data } = await ci.post("/car/unlock");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const lock = async () => {
  try {
    const { data } = await ci.post("/car/lock");
  } catch (e) {
    console.log(e);
  }
};

export default { lock, unlock };
