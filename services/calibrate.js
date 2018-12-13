import axios from "react-native-axios";
import config from "./config";

const ci = axios.create({ baseURL: config.BASE_URL, timeout: 30000 });

const calibrate = (left, right) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await ci.post("/file/calibrate", { left, right });

      console.log(data);
      if (!data.success) {
        reject("Bad request");
      }

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { calibrate };
