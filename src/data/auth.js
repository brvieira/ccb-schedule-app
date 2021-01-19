"use strict";
import axios from "../utils/axios";
const url = "/users";

function login(body) {
  return axios.postUrl(`${url}/login`, body);
}

function createUser(body) {
  return axios.postUrl(`${url}/newUser`, body);
}

export { login, createUser };
