import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Background from './../Background/Background'
// import Plants from './../Plants/Plants'

const Unselected = () => {
  const [plants, setPlants] = useState([])
  //   const [filter, setFilter] = useState('')

  useEffect(() => {
    getUnselectedPlants()
  }, [])

  const getUnselectedPlants = () => {
    axios
      .get(`/api/unselectedplants`)
      .then((res) => {
        console.log(res.data)
        setPlants(res.data)
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response.request.response)
      })
  }

  // const searchPlants = () => {
  //   axios
  //     .get(`/api/plants?filter=${filter}`)
  //     .then((res) => {
  //       setPlants(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       toast.error(error.response.request.response)
  //     })
  // }

  //   const handleFilter = (e) => {
  //     setFilter(e.target.value)
  //   }

  return (
    <div className='unselected'>
      <Background />
      <div className='unselected-box-container'>
        <div className='unselected-box'>
          <div className='unselected-text'>
            <h1>Add Plants to Your List</h1>
            <h6>
              Click on a photo below to add the plant to your plant list and
              receive text reminders for its care. Double-click to view its
              profile.
            </h6>
            {/* <input placeholder='Search by Plant Name' onChange={searchPlants()} /> */}
          </div>
          <div className='unselected-map'>
            {plants.map((plant, index) => {
              return (
                <div key={index} className='plant-block'>
                  <img src={plant.plant_pic} alt={plant.common_name} />
                  <h3>{plant.common_name}</h3>
                  <p>{plant.scientific_name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Unselected
