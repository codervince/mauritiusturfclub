class DataApi {

  constructor(rawData){
    this.rawData = rawData;
  }
  mapIntoObject(arr){
    return arr.reduce( (acc,curr)=> {
      acc[curr.uniqueID]= curr;
      return acc;
    }, {});
  }


  getRunners(){
    return this.mapIntoObject(this.rawData);
  }

}

export default DataApi;
