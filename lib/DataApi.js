
class DataApi {

  constructor(rawData){
    this.rawData = rawData;
    this.searchTerm= '';
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr){
    return arr.reduce( (acc,curr)=> {
      acc[curr.uniqueID]= curr;
      return acc;
    }, {});
  }

  //class prop
  lookupHorse = (horseName) => {
    return this.getRunners()[horseName==horseName];
  }

  getRunners(){
    return this.mapIntoObject(this.rawData);

  }
  getState = ()=>{
    return {
      runners: this.getRunners()
    };
  };

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;

  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach( (cb)=> cb());
  }
  setSearchTerm = (searchTerm) => {
    this.searchTerm = searchTerm;
    this.notifySubscribers();
  };

}

export default DataApi;
