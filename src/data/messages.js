"use strict";
import axios from "../utils/axios";
const url = "/messages";

function createNewMessage(body) {
  return axios.postUrl(`${url}`, body);
}

function deleteMessage(id) {
  return axios.deleteUrl(`${url}/${id}`);
}

function getMessages() {
  return axios.callUrl(`${url}`);
}

function getLastMessage() {
  return axios.callUrl(`${url}/last`);
}

function updateMessage(body) {
  return axios.putUrl(`${url}`, body);
}

export {
  createNewMessage,
  deleteMessage,
  getMessages,
  getLastMessage,
  updateMessage
};
