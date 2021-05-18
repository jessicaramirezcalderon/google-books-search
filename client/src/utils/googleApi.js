import axios from "axios";

const key = process.env.REACT_APP_GOOGLE_APIKEY;

export default {
  // Gets all books
  getGoogleBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`);
  }
};
