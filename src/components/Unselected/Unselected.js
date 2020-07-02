import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Background from './../Background/Background'
import { useHistory } from 'react-router-dom'
// import Plants from './../Plants/Plants'

const Unselected = () => {
  const { push } = useHistory()
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

  const selectPlant = async (plantid) => {
    try {
      let selectResults = await axios.put(`/api/selectplant/${plantid}`)
      console.log(selectResults.data)
      toast('Plant added.')
      getUnselectedPlants()
      // setPlants(selectResults.data)
    } catch (error) {
      console.log(error)
      toast.error(error.response.request.response)
    }
  }

  const viewProfile = (plantid) => {
    console.log(plantid)
    push(`/profiles/${plantid}`)
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
              Click below to view a plant's profile or add it to your list.
            </h6>
            {/* <input placeholder='Search by Plant Name' onChange={searchPlants()} /> */}
          </div>
          <div className='unselected-map'>
            {plants.map((plant, index) => {
              // console.log(plant)
              return (
                <div key={index} className='plant-block'>
                  <img src={plant.plant_pic} alt={plant.common_name} />
                  <h3>{plant.common_name}</h3>
                  <p>{plant.scientific_name}</p>
                  <div className='button-container'>
                    <button
                      onClick={() => viewProfile(plant.id)}
                      className='master-button'>
                      View Profile
                    </button>
                    <button
                      onClick={() => selectPlant(plant.id)}
                      className='master-button'>
                      Add to List
                    </button>
                  </div>
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
