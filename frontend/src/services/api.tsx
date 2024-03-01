import axios from "axios";
import {
  createArrayEntityFromObject,
  createQueryUrl,
  getEntity,
} from "./global";

const baseUrl = "https://newsapi.org/";

export const getNews = (query: any) => {
  let url = `${baseUrl}v2/top-headlines?${createQueryUrl(
    getEntity(createArrayEntityFromObject(query), query),
    "&"
  )}`;
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${url}`,
        {
          headers: {
            Authorization: `99babe330d45461daf27f7ec9125eb81`,
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
