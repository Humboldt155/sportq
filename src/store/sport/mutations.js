
export function updateSearchSportsList (state) {
  let SearchSportsList = []
  let MainTypes = state.MainTypes
  let GlobalTypes = state.GlobalTypes
  for (let i = 0; i < MainTypes.length; i++) {
    let curDict = {value: MainTypes[i]['ru_name'],
      label: MainTypes[i]['ru_name'],
      sublabel: GlobalTypes[MainTypes[i]['global_type']]['ru_name'],
      icon: MainTypes[i]['picto']}
    SearchSportsList.push(curDict)
  }
  state.SearchSportsList = SearchSportsList
}
