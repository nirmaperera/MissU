import axios from "axios";
export const SEARCH = "SEARCH";
export const ADD ="ADD";
import {FETCH_USER} from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data}));
  }
};

function apiCall(searchParams) {
    let url = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&sort=modifieddatetime&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender&facet=firstname&facet=middlename&facet=lastname&facet=computedmissingmaxage&facet=dateoflastcontact"
    if(searchParams.cityoflastcontact && searchParams.cityoflastcontact !== ""){
        url = url +"&refine.cityoflastcontact="+searchParams.cityoflastcontact;
    }
    if(searchParams.countydisplaynameoflastcontact !== ""){
        url = url + "&refine.countydisplaynameoflastcontact=" + searchParams.countydisplaynameoflastcontact;
    }
    if(searchParams.statedisplaynameoflastcontact !== ""){
        url = url + "&refine.statedisplaynameoflastcontact=" + searchParams.statedisplaynameoflastcontact;
    }
    if(searchParams.gender !== ""){
        url = url + "&refine.gender=" + searchParams.gender;
    }
    if(searchParams.firstname !== ""){
        url = url + "&refine.firstname=" + searchParams.firstname;
    }
    if(searchParams.middlename !== ""){
        url = url + "&refine.middlename=" + searchParams.middlename;
    }
    if(searchParams.lastname !== ""){
        url = url + "&refine.lastname=" + searchParams.lastname;
    }
    if(searchParams.dateoflastcontact !== ""){
        url = url + "&refine.dateoflastcontact=" + searchParams.dateoflastcontact;
    }
    if(searchParams.raceethnicity !== ""){
        const race = searchParams.raceethnicity;
        url = url + "&refine.raceethnicity=" + race;
    }
    if(searchParams.computedmissingmaxage !== ""){
        url = url + "&refine.computedmissingmaxage=" + searchParams.computedmissingmaxage;
    }

    return url;
}

// handleSearch(e){
//     e.preventDefault();
//
//     let url = this.apiCall.call(this);
//     axios.get(url)
//         .then(response => {
//             this.setState({data: response.data.records});
//
//             console.log(response.data.records);
//         })
//         .catch(err => {
//             this.setState({data: []})
//             console.log(err)
//         })
// }
function apiForAdd(params){
        let urltopost = `/api/missingpeoples/add`;
    return urltopost;
}

export const search = (searchParams) =>{
    return{
        type:SEARCH,
        value: searchParams
    }
}

export const searchThunk = (searchParams) =>(dispatch) => {
return axios.get(apiCall(searchParams))
    .then(searchResults =>
        dispatch(search(searchResults))
    )

}

export const add = (params) => {
    return {
        type: ADD,
        tip: params

    }
}

export const addThunk = (params) => (dispatch) => {
return axios.post(apiForAdd(params), params)
        .then(tipAdded =>
            dispatch(add(tipAdded))

        )
}
