import axios from 'axios';

const BASE_URL = 'https://localhost:44331';

const getAllUsers = async () => {
  try {
    let result = await axios.get(`${BASE_URL}/users`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const postAllInfo = async ({ cpf }) => {
  try {
    let result = await axios.post(`${BASE_URL}/users/userproducts/allinfo`, { cpf });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const removeProduct = async (resource, id) => {
  try {
    return await axios.delete(`${BASE_URL}/products/`, id);
  } catch (error) {
    console.log(error);
  }
};

export const apiProvider = {
  getAllUsers,
  postAllInfo,
  removeProduct
};