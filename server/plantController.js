module.exports = {
  getUnselectedPlants: async (req, res) => {
    const db = req.app.get('db')
    // const { filter } = req.query
    // console.log(filter)

    // if (filter) {
    //   const filteredPlants = await db
    //     .get_plants_filter(filter)
    //     .then((response) => {
    //       res.status(200).send(filteredPlants)
    //     })
    //     .catch((error) => {
    //       return res.status(500).send('Unable to find plant.')
    //     })
    // } else {
    //   console.log('Heres the else')
    try {
      const plantArray = await db.get_unselected_plants()
      res.status(200).send(plantArray)
    } catch (error) {
      res.status(500).send('Unable to retrieve plants.')
    }
  },

  selectPlant: async (req, res) => {
    const { plantid } = req.params
    const db = req.app.get('db')
    try {
      await db.select_plant(plantid)
      res.sendStatus(200)
    } catch (error) {
      console.log(error)
      res.status(500).send('Unable to select plant.')
    }
  },
}
