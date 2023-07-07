import ownerReducer from './owners/ownerSlice'
import petReducer from './pets/slice'
import breadCrumbReducer from './breadcrumbs/breadcrumbSlice'

const reducers = {
  ownerState: ownerReducer,
  petState: petReducer,
  breadcrumbsState: breadCrumbReducer,
}

export default reducers
