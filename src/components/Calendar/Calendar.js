import React, {useState} from 'react';

const Calendar = () => {
    const [commonName, setCommonName] = useState ('')
    const [scientificName, setScientificName] = useState ('')
    const [plantPic, setPlantPic] = useState ('')
    const [selected, setSelected] = useState (false)
    const [hardiness, setHardiness] = useState ('')
    const [exposure, setExposure] = useState ('')
    const [plantingDate, setPlantingDate] = useState ('')
    const [fertilizeDate1, setfertilizeDate1] = useState ('')
    const [fertilizeDate2, setFertilizeDate2] = useState ('')
    const [fertilizeDate3, setFertilizeDate3] = useState ('')
    const [bloomDate, setBloomDate] = useState ('')
    const [treatmentDate1, setTreatmentDate1] = useState ('')
    const [treatmentType1, setTreatmentType1] = useState ('')
    const [treatmentDate2, setTreatmentDate2] = useState ('')
    const [treatmentType2, setTreatmentType2] = useState ('')
    const [spentDate, setSpentDate] = useState ('')
    const [pruneDate, setPruneDate] = useState ('')
    return (
        <div>Calendar.js</div>
    )
}
export default Calendar