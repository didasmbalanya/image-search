import axios from "axios";

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID g40CxPXowBAkdwbtHiWUfTurp-Xhy1N59kwd_y1vwbg",
  },
});
