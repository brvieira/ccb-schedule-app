"use strict";
import axios from "../utils/axios";
const url = "/lane";

function createNumberToService(body) {
  return axios.postUrl(`${url}`, body);
}

function deleteNumberToService(number) {
  return axios.deleteUrl(`${url}/number/${number}`);
}

function getNumbers(number) {
  return axios.callUrl(`${url}/number/${number}`);
}

function editData(body) {
  return axios.postUrl(`${url}/number/deleteAndCreateNew`, body);
}

export { createNumberToService, deleteNumberToService, getNumbers, editData };
