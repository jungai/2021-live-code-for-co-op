// database
const users = [
  {
    id: 1,
    name: "iu",
  },
  {
    id: 2,
    name: "rose",
  },
  {
    id: 3,
    name: "lisa",
  },
  {
    id: 4,
    name: "winter",
  },
];

const getUsers = () => users;
const getUserById = (id) => users.filter((user) => user.id === id);
const createUserData = (params) =>
  users.push({ id: params.id, name: params.name });

module.exports = {
  getUsers,
  getUserById,
  createUserData,
};
