import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { render } from 'react-dom'
import { connect } from 'react-redux'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)
const myEventsList = {} //empty object for now

const Month = (props) => {
  const [commonName, setCommonName] = useState('')
  const [scientificName, setScientificName] = useState('')
  const [plantPic, setPlantPic] = useState('')
  const [selected, setSelected] = useState(false)
  const [hardiness, setHardiness] = useState('')
  const [exposure, setExposure] = useState('')
  const [plantingDate, setPlantingDate] = useState('')
  const [fertilizeDate1, setfertilizeDate1] = useState('')
  const [fertilizeDate2, setFertilizeDate2] = useState('')
  const [fertilizeDate3, setFertilizeDate3] = useState('')
  const [bloomDate, setBloomDate] = useState('')
  const [treatmentDate1, setTreatmentDate1] = useState('')
  const [treatmentType1, setTreatmentType1] = useState('')
  const [treatmentDate2, setTreatmentDate2] = useState('')
  const [treatmentType2, setTreatmentType2] = useState('')
  const [spentDate, setSpentDate] = useState('')
  const [pruneDate, setPruneDate] = useState('')
  useEffect(() => {
    console.log('useEffect fired')
    console.log(props)
  }, [])

  return (
    <div>Calendar.js</div>
    // <Calendar
    //   localizer={localizer}
    //   events={myEventsList}
    //   startAccessor='start'
    //   endAccessor='end'
    // />
  )
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps)(Month)
