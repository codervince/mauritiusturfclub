
class DataApi {

  constructor(rawData){
    this.data = {
      timestamp: new Date(),
    };
    this.rawData = rawData;
    this.searchTerm= '';
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
    this.timestamp = new Date();
  }

  mergeWithState = (stateChange) => {
    this.timestamp = {
      ...stateChange
    };
  };

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
      runners: this.getRunners(),
      data: this.data,
      searchTerm: this.searchTerm,
      timestamp: this.timestamp
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

  startClock = () => {
    setInterval(()=> {
      this.mergeWithState({
        timestamp: new Date(),
      });
    },1000);
  }

}

export default DataApi;
