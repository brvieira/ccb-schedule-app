"use strict";
import axios from "../utils/axios";
const url = "/lane";

function getAllData() {
  return axios.callUrl(url);
}

function getDataById(id) {
  return axios.callUrl(`${url}/${id}`);
}

function getDataByType(type) {
  return axios.callUrl(`${url}/type/${type}`);
}

function getAvailableByType(type) {
  return axios.callUrl(`${url}/available/${type}`);
}

function createNumberToService(body) {
  return axios.postUrl(`${url}`, body);
}

function editData(body) {
  return axios.putUrl(`${url}`, body);
}

export { createNumberToService };
