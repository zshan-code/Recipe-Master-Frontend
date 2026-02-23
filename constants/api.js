import { Platform } from "react-native";

// Change this to your computer's local IP address (e.g., http://192.168.1.10:5001/api)
// When testing on web (localhost), we use 127.0.0.1
const IP = "192.168.58.133";
export const API_URL = Platform.OS === "web"
    ? "http://localhost:5001/api"
    : `http://${IP}:5001/api`;
