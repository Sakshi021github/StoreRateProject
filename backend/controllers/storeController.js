const db = require('../config/db');



exports.getStores = (req, res) => {

  const userId = req.user?.id || 0;

  const sql = `

    SELECT
      stores.id,
      stores.name,
      stores.address,

      ROUND(AVG(r.rating),1)
      AS average_rating,

      (
        SELECT rating
        FROM ratings
        WHERE
        user_id = ?
        AND store_id = stores.id
      ) AS user_rating

    FROM stores

    LEFT JOIN ratings r
    ON stores.id = r.store_id

    GROUP BY stores.id

  `;

  db.query(
    sql,
    [userId],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json(err);

      }

      res.json(result);

    }
  );

};




exports.addStore = (req, res) => {

  const {
    name,
    email,
    address,
    owner_id
  } = req.body;

  const sql = `
    INSERT INTO stores(
      name,
      email,
      address,
      owner_id
    )
    VALUES(?,?,?,?)
  `;

  db.query(
    sql,
    [name, email, address, owner_id],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json(err);

      }

      res.json({
        message:
        'Store Added Successfully'
      });

    }
  );

};
 exports.deleteStore = (req, res) => {

  const { id } = req.params;

  const sql =
    'DELETE FROM stores WHERE id = ?';

  db.query(
    sql,
    [id],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json(err);

      }

      res.json({
        message:
        'Store Deleted Successfully'
      });

    }
  );

};