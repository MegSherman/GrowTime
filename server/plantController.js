module.exports = {
  getPlants: async (req, res) => {
    const db = req.app.get('db')
    const { filter } = req.query
    console.log(filter)

    if (filter) {
      const filteredPlants = await db
        .get_plants_filter(filter)
        .then((response) => {
          res.status(200).send(response)
        })
        .catch((error) => {
          return res.status(500).send('Unable to filter plants.')
        })
    } else {
      console.log('Heres the else')
      try {
        const plantArray = await db.get_plants()
        if (plantArray) {
          return res.status(200).send(plantArray)
        }
      } catch (error) {
        return res.status(500).send('Unable to retrieve plants.')
      }
    }
  },
}
