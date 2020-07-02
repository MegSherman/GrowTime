import React, { useState, useEffect } from 'react'
import Background from './../Background/Background'
import axios from 'axios'

const Profile = (props) => {
  const [plantId, setPlantId] = useState('')
  const [commonName, setCommonName] = useState('')
  const [scientificName, setScientificName] = useState('')
  const [plantPic, setPlantPic] = useState('')
  const [selected, setSelected] = useState(false)
  const [hardiness, setHardiness] = useState('')
  const [exposure, setExposure] = useState('')
  const [springPlantingDate, setSpringPlantingDate] = useState('')
  const [fertilizeDate1, setFertilizeDate1] = useState('')
  const [fertilizeType1, setFertilizeType1] = useState('')
  const [fertilizeDate2, setFertilizeDate2] = useState('')
  const [fertilizeType2, setFertilizeType2] = useState('')
  const [fertilizeDate3, setFertilizeDate3] = useState('')
  const [fertilizeType3, setFertilizeType3] = useState('')
  const [bloomDate, setBloomDate] = useState('')
  const [treatmentDate1, setTreatmentDate1] = useState('')
  const [treatmentType1, setTreatmentType1] = useState('')
  const [treatmentDate2, setTreatmentDate2] = useState('')
  const [treatmentType2, setTreatmentType2] = useState('')
  const [spentDate, setSpentDate] = useState('')
  const [pruneDate, setPruneDate] = useState('')
  const [fallPlantingDate, setFallPlantingDate] = useState('')

  useEffect(() => {
    setPlantId(props.plantId)
    getPlantCard(plantId)
  }, [])

  const getPlantCard = (plantId) => {
    axios.get(`/api/plantcard/${plantId}`).then((res) => {
      console.log(res.data)
      setCommonName(res.data.common_name)
      setScientificName(res.data.scientific_name)
      setPlantPic(res.data.plant_pic)
      setHardiness(res.data.hardiness)
      setExposure(res.data.exposure)
      setSpringPlantingDate(res.data.spring_planting)
      setFertilizeDate1(res.data.fertilize_date_1)
      setFertilizeType1(res.data.fertilize_type_1)
      setFertilizeDate2(res.data.fertilize_date_2)
      setFertilizeType2(res.data.fertilize_type_2)
      setFertilizeDate3(res.data.fertilize_date_3)
      setFertilizeType3(res.data.fertilize_type_3)
      setBloomDate(res.data.bloom_date)
      setTreatmentDate1(res.data.treatment_date_1)
      setTreatmentType1(res.data.treatment_type_1)
      setTreatmentDate2(res.data.treatment_date_2)
      setTreatmentType2(res.data.treatment_type_2)
      setSpentDate(res.data.spent_date)
      setPruneDate(res.data.prune_date)
      setFallPlantingDate(res.data.fall_planting_date)
    })
  }

  return (
    <div className='profile'>
      <Background />
      <div className='profile-box-container'>
        <div className='profile-box'>
          <div className='profile-titles'>
            <h1>{commonName}</h1>
            <p>{scientificName}</p>
          </div>
          <div>
            <img src={plantPic} alt={commonName} />
            <p>{hardiness}</p>
            <p>{exposure}</p>
          </div>
        </div>
        <div className='right-column'>
          <h4>
            <u>Calendar Items</u>
          </h4>
          <div className='date-container'>
            <p>Spring Planting: {springPlantingDate}</p>
            <p>
              Fertilize: {fertilizeDate1}
              <br></br>
              {fertilizeType1}
            </p>
            <p>
              Fertilize: {fertilizeDate2}
              <br></br>
              {fertilizeType2}
            </p>
            <p>
              Fertilize: {fertilizeDate3}
              <br></br>
              {fertilizeType3}
            </p>
            <p>Bloom: {bloomDate}</p>
            <p>
              Treat: {treatmentDate1}
              <br></br>
              {treatmentType1}
            </p>
            <p>
              Treat: {treatmentDate2}
              <br></br>
              {treatmentType2}
            </p>
            <p>Spent: {spentDate}</p>
            <p>Prune: {pruneDate}</p>
            <p>Fall Planting: {fallPlantingDate}</p>
          </div>
          <div className='button-container'>
            <button>Edit</button>
            <button>Add/Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
