import db from '../models/index';

const resolvers = {

  convertDatavaluesToUser(dataValues) {
    return {
      firstName: dataValues.firstName,
      lastName: dataValues.lastName,
      email: dataValues.email,
      id: dataValues.id,
    };
  },

  async getUsers(_, args) {
    const result = [];

    const whereClause = {};
    if (args.firstName != null) {
      whereClause.firstName = args.firstName;
    }
    if (args.lastName != null) {
      whereClause.lastName = args.lastName;
    }
    if (args.email != null) {
      whereClause.email = args.email;
    }
    await db.user.findAll({ where: whereClause }).then((x) => {
      x.forEach((row) => {
        result.push(resolvers.convertDatavaluesToUser(row.dataValues));
      });
    });

    return result;
  },

  async getUserById(_, args) {
    let result;
    await db.user.findOne({ where: { id: args.id } }).then((x) => {
      if (x) {
        result = resolvers.convertDatavaluesToUser(x.dataValues);
      }
    });

    return result;
  },

  async createNewUser(_, args) {
    let result;
    await db.user
      .create({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
      })
      .then((x) => {
        if (x) {
          result = resolvers.convertDatavaluesToUser(x.dataValues);
        }
      });

    return {
      success: true,
      message: 'User added Successfully',
      user: result,
    };
  },

  async deleteUserById(_, args) {
    const result = {};
    try {
      result.user = await resolvers.getUserById(_, { id: args.id });
      if (result.user == null) {
        throw new Error(`No user found with (id: ${args.id})`);
      }

      await db.user.destroy({ where: { id: args.id } });
      result.success = true;
      result.message = 'User deleted Successfully';
    } catch (error) {
      result.success = false;
      result.user = null;
      result.message = error.message;
    }

    return result;
  },
};

export default resolvers;
