const db = require('../db/db')

const Profile = {
  findAll: () => {
    const sql = 'SELECT * FROM profiles'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (headline, skills_summary, location, profile_img, rate, contact, author) => {
    const sql = `
      INSERT INTO profiles(headline, skills_summary, location, profile_img, rate, contact, author)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `
    return db
      .query(sql, [headline, skills_summary, location, profile_img, rate, contact, author])
      .then(dbRes => dbRes.rows[0])
  
  },

  delete: profileId => {
    const sql = `
    DELETE FROM profiles WHERE id = $1
    `
    return db.query(sql, [profileId])
  },
  update_profile: (profileId, headline, skills_summary, location, profile_img, rate, contact) => {
    const sql = `UPDATE profiles SET headline = $2, skills_summary= $3, location= $4 ,profile_img= $5, rate=$6,contact=$7 WHERE id = $1`

    return db.query(sql, [profileId,headline, skills_summary, location, profile_img, rate, contact ])
  },
  findByAuthor: author => {
    const sql = `
      SELECT * FROM profiles
      WHERE author = $1
    `
    return db
      .query(sql, [author])
      .then(dbRes => dbRes.rows[0])
  }
}



module.exports = Profile