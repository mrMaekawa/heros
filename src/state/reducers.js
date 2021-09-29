import { combineReducers } from "redux"

import Active from "./Active/reducer"
import Scheme from "./DarkMode/reducer"
import Search from "./Search/reducer"

export default combineReducers({
  Active,
  Scheme,
  Search
})
