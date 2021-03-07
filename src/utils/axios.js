"use strict";

const axios = require("axios");
const backendUrl =
  process.env.BACKEND || "https://ccb-schedules-api.herokuapp.com";

function callUrl(url) {
  return new Promise(function(resolve, reject) {
    axios
      .get(backendUrl + url)
      .then(({ data }) => resolve(data))
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

function postUrl(url, data) {
  return new Promise(function(resolve, reject) {
    axios
      .post(backendUrl + url, data)
      .then(({ data }) => resolve(data))
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

function putUrl(url, data) {
  return new Promise(function(resolve, reject) {
    axios
      .put(backendUrl + url, data)
      .then(({ data }) => resolve(data))
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

function deleteUrl(url, data) {
  return new Promise(function(resolve, reject) {
    axios
      .delete(backendUrl + url, data)
      .then(({ data }) => resolve(data))
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

function callAnyUrl(url) {
  return new Promise(function(resolve, reject) {
    axios
      .get(url)
      .then(({ data }) => resolve(data))
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

export default { callUrl, postUrl, putUrl, deleteUrl, callAnyUrl };
