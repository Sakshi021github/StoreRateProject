const db = require('../config/db');

exports.getOwnerDashboard =
(req, res) => {

  const ownerId = req.user.id;

  const sql = `

    SELECT
      stores.id,
      stores.name AS store_name,

      users.name AS user_name,

      users.email,

      ratings.rating,

      (
        SELECT ROUND(
          AVG(rating),1
        )
        FROM ratings
        WHERE store_id = stores.id
      ) AS average_rating

    FROM stores

    LEFT JOIN ratings
    ON stores.id = ratings.store_id

    LEFT JOIN users
    ON ratings.user_id = users.id

    WHERE stores.owner_id = ?

  `;

  db.query(
    sql,
    [ownerId],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json(err);

      }

      res.json(result);

    }
  );

};