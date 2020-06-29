import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
// import Plants from './../Plants/Plants'

const Selected = () => {
  const [plants, setPlants] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getPlants()
  }, [])

  const getPlants = () => {
    axios
      .get(`/api/plants`)
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

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <div>
        <h1>Your Plant List</h1>
        <h6>
          You currently receive text reminders to care for the plants listed
          below. Click a photo to remove the plant from your list or
          double-click to view its profile.
        </h6>
        {/* <input placeholder='Search by Plant Name' onChange={searchPlants()} /> */}
      </div>
      <div>
        {plants.map((plant, index) => {
          return (
            <div key={index}>
              <img src={plant.plant_pic} alt={plant.common_name} />
              <h3>{plant.common_name}</h3>
              <p>{plant.scientific_name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Selected
