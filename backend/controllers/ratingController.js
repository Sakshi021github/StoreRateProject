const db = require('../config/db');



exports.submitRating = (req, res) => {

  const {
    store_id,
    rating
  } = req.body;

  const user_id = req.user.id;

  
  const checkSql = `
    SELECT * FROM ratings
    WHERE user_id = ?
    AND store_id = ?
  `;

  db.query(
    checkSql,
    [user_id, store_id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      
      if (result.length > 0) {

        const updateSql = `
          UPDATE ratings
          SET rating = ?
          WHERE user_id = ?
          AND store_id = ?
        `;

        db.query(
          updateSql,
          [rating, user_id, store_id],
          (err, updated) => {

            if (err) {
              return res.status(500).json(err);
            }

            res.json({
              message: 'Rating Updated Successfully'
            });

          }
        );

      }

      
      else {

        const insertSql = `
          INSERT INTO ratings(
            user_id,
            store_id,
            rating
          )
          VALUES(?,?,?)
        `;

        db.query(
          insertSql,
          [user_id, store_id, rating],
          (err, inserted) => {

            if (err) {
              return res.status(500).json(err);
            }

            res.json({
              message: 'Rating Submitted Successfully'
            });

          }
        );

      }

    }
  );

};