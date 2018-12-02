import axios from "react-native-axios";
import config from "./config";

const ci = axios.create({ baseURL: config.BASE_URL });
