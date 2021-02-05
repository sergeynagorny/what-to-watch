import {combineReducers} from "redux";
import NameSpace from "./name-space.js";
import {reducer as data} from "./data/data.js";
import {reducer as user} from "./user/user.js";
import {reducer as catalog} from "./catalog/catalog.js";
import {reducer as reviews} from "./reviews/reviews.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.CATALOG]: catalog,
  [NameSpace.REVIEWS]: reviews,
});
