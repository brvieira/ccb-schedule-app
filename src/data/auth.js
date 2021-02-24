"use strict";
import axios from "../utils/axios";
const url = "/users";

function login(body) {
  return axios.postUrl(`${url}/login`, body);
}

function createUser(body) {
  return axios.postUrl(`${url}/newUser`, body);
}

function getUserIp() {
  return axios.callAnyUrl("http://www.geoplugin.net/json.gp");
}

export { login, createUser, getUserIp };
