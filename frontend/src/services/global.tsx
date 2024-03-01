import _ from "lodash";
import NoImage from "../assets/images/empty.jpg"

export const createArrayEntityFromObject = (obj:any) => {
    return Object.keys(obj);
  };
  export const getEntity = (keys:any, obj:any) => {
    return _.map(keys, (k:any) => {
      if (typeof obj[k] == "boolean") {
        // console.log("obj[k]", obj[k], "[k]", [k]);
        return obj[k];
        // return { key: [k], value: obj[k] };
      } else {
        if (obj[k]) {
          return { key: [k], value: obj[k] };
        }
      }
    }).filter((el:any) => el !== undefined);
  };

 export const imageOnError = (event: any) => {
    event.currentTarget.src = NoImage;
    event.currentTarget.className = `${event.currentTarget.className} error`;
  };

  
  export const getEntityPy = (keys:any, obj:any) => {
    return _.map(keys, (k:any) => {
      if (typeof obj[k] === "boolean" || typeof obj[k] === "number") {
        // console.log("obj[k]", obj[k], "[k]", [k]);
        // return obj[k];
        return { key: [k], value: obj[k] };
      } else {
        if (obj[k]) return { key: [k], value: obj[k] };
      }
    }).filter((el:any) => el !== undefined);
  };
  
  export const createQueryUrl = (arr:any, separator:any) => {
    let query = "";
    _.map(arr, (el:any, n:any) => {
      if (arr.length - 1 > n)
        return (query = `${query}${el.key}=${el.value}${separator}`);
      if (typeof el.value === "boolean" || typeof el.value === "number") {
        // console.log("el", el);
        query = `${query}${el.key}=${el.value}`;
      } else if (el.value) {
        query = `${query}${el.key}=${el.value}`;
      }
    });
    // console.log(query);
    return query;
  };  