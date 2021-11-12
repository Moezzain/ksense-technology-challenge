import axios from "axios";

let url = "https://jsonplaceholder.typicode.com";

//__The Http Class suing axios. proxied to backend post__
export function GetUsersData(route) {
  // console.log("/" + url + "/" + id);
  console.log(route);
  return axios({
    method: "get",
    url: url + route,
    // data: packedData,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      charsets: "utf-8",
    },
  })
    .then((result) => {
      return new Promise(function (resolve) {
        resolve(JSON.stringify(result.data));
      });
    })
    .catch((error) => {
      console.log("ERROR :" + error);
    });
}

//__The Http Class suing axios. proxied to backend post__
export function GetPostsData(route) {
  // console.log("/" + url + "/" + id);
  console.log(url + route);
  return axios({
    method: "get",
    url: url + route,
    // data: packedData,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      charsets: "utf-8",
    },
  })
    .then((result) => {
      return new Promise(function (resolve) {
        resolve(JSON.stringify(result.data));
      });
    })
    .catch((error) => {
      console.log("ERROR :" + error);
    });
}
