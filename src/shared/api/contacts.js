import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6403b8833bdc59fa8f2bb5f9.mockapi.io/contacts',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  console.log(data);
  return data;
};
