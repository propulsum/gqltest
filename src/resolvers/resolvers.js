import UserResolvers from './UserResolvers';
import db from '../models/index';

export default {
  Query: {
    users: UserResolvers.getUsers,
    user: UserResolvers.getUserById,
    nosecones: async () => {
      const result = [];

      await db.nosecone.findAll().then((x) => {
        x.forEach((row) => {
          result.push({
            id: row.dataValues.id,
            partName: row.dataValues.partName,
            length: row.dataValues.length,
            radius: row.dataValues.radius,
            thickness: row.dataValues.wall_thickness,
            shape: row.dataValues.shape,
          });
        });
      });

      return result;
    },
  },
  Mutation: {
    createUser: UserResolvers.createNewUser,
    deleteUser: UserResolvers.deleteUserById,
    createNosecone: async (_, args) => {
      let result;
      await db.nosecone
        .create({
          partName: args.partName,
          radius: args.radius,
          length: args.length,
          wall_thickness: args.thickness,
          shape: args.shape,
        })
        .then((x) => {
          if (x) {
            result = {
              id: x.dataValues.id,
              partName: x.dataValues.partName,
              length: x.dataValues.length,
              radius: x.dataValues.radius,
              thickness: x.dataValues.wall_thickness,
              shape: x.dataValues.shape,
            };
          }
        });

      return result;
    },
    createRocketPart: async (_, args) => {
      // let result;
      await db.rocketpart
        .create({
          partName: args.partName,
        });

      return 'result';
    },
  },
};
