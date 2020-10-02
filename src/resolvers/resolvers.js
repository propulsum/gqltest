import UserResolvers from './UserResolvers';

export default {
  Query: {
    users: UserResolvers.getUsers,
    user: UserResolvers.getUserById,
  },
  Mutation: {
    createUser: UserResolvers.createNewUser,
    deleteUser: UserResolvers.deleteUserById,
  },
};
