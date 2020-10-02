import db from './models/index';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'The Awakening 2',
    author: 'Kate Chopinomiom',
  },
  {
    title: 'City of Ass',
    author: 'Paul Auster',
  },
];

export default {
  Query: {
    books: () => books,
    users: async () => {
      const result = [];
      await db.user.findAll().then((x) => {
        x.forEach((row) => {
          const item = {};
          item.firstName = row.dataValues.firstName;
          item.lastName = row.dataValues.lastName;
          item.email = row.dataValues.email;

          result.push(item);
        });
      });
      return result;
    },
  },
};
