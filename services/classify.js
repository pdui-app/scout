import config from "./config";
import axios from "react-native-axios";
import { AsyncStorage } from "react-native";

const ci = axios.create({
  baseURL: config.BASE_URL,
  timeout: 30000
});

const classify = video =>
  new Promise(async (resolve, reject) => {
    try {
      let formData = new FormData();

      const left = await AsyncStorage.getItem("LEFT");
      const right = await AsyncStorage.getItem("RIGHT");

      formData.append("video", {
        video,
        name: `upload.mov`,
        type: `video/quicktime`
      });
      // formData.append("left", left);
      // formData.append("right", right);

      const { data } = ci.post("/file/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { classify };
