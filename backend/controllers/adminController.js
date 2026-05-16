const db = require('../config/db');

exports.getDashboardStats = (req, res) => {

  const usersQuery =
    'SELECT COUNT(*) AS totalUsers FROM users';

  const storesQuery =
    'SELECT COUNT(*) AS totalStores FROM stores';

  const ratingsQuery =
    'SELECT COUNT(*) AS totalRatings FROM ratings';


  db.query(usersQuery, (err, usersResult) => {

    if (err) {
      return res.status(500).json(err);
    }

    db.query(storesQuery, (err, storesResult) => {

      if (err) {
        return res.status(500).json(err);
      }

      db.query(ratingsQuery, (err, ratingsResult) => {

        if (err) {
          return res.status(500).json(err);
        }

        res.json({

          totalUsers:
            usersResult[0].totalUsers,

          totalStores:
            storesResult[0].totalStores,

          totalRatings:
            ratingsResult[0].totalRatings

        });

      });

    });

  });

};