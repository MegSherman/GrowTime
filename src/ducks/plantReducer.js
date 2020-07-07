const initialState = {
  plantId: '',
  commonName: '',
  scientificName: '',
  plantPic: '',
  selected: false,
  hardiness: '',
  exposure: '',
  springPlantingDate1: '',
  fertilizeDate1: '',
  fertilizeType1: '',
  fertilizeDate2: '',
  fertilizeType2: '',
  fertilizeDate3: '',
  fertilizeType3: '',
  bloomDate: '',
  treatmentDate1: '',
  treatmentType1: '',
  treatmentDate2: '',
  treatmentType2: '',
  spentDate: '',
  pruneDate: '',
  fallPlantingDate: '',
}

const GET_PLANT = 'GET_PLANT'

export function getPlant(payload) {
  return { type: GET_PLANT, payload }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLANT:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
