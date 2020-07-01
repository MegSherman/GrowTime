import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Background from './../Background/Background'
// import Plants from './../Plants/Plants'

const Selected = () => {
  const [plants, setPlants] = useState([])
  //   const [filter, setFilter] = useState('')

  useEffect(() => {
    getSelectedPlants()
  }, [])

  const getSelectedPlants = () => {
    axios
      .get(`/api/selectedplants`)
      .then((res) => {
        console.log(res.data)
        setPlants(res.data)
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response.request.response)
      })
  }

  const unselectPlant = async (plantid) => {
    try {
      let unselectResults = await axios.put(`/api/unselectplant/${plantid}`)
      // console.log(unselectResults.data)
      toast('Plant removed.')
      getSelectedPlants()
      // setPlants(selectResults.data)
    } catch (error) {
      console.log(error)
      toast.error(error.response.request.response)
    }
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
    <div className='selected'>
      <Background />
      <div className='selected-box-container'>
        <div className='selected-box'>
          <div className='selected-text'>
            <h1>Your Plant List</h1>
            <h6>
              You are currently tracking the following plants and receiving text
              reminders for their care. Click on a photo below to remove the
              plant from your list. Double-click to view its profile.
            </h6>
            {/* <input placeholder='Search by Plant Name' onChange={searchPlants()} /> */}
          </div>
          <div className='selected-map'>
            {plants.map((plant, index) => {
              // console.log(plant)
              return (
                <div key={index} className='plant-block'>
                  <img
                    src={plant.plant_pic}
                    alt={plant.common_name}
                    onClick={() => unselectPlant(plant.id)}
                  />
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
export default Selected
