import DataApi from '../DataApi';
import data from '../out.json';

const store = new DataApi(data);


describe('DataApi', () => {

  it('exposes runners as an object', () => {
    const runners = store.getState().runners;
    const uniqueID = data[0].uniqueID;
    const horseName = data[0].horseName;
    const comment= data[0].comment;
    const finalPos= data[0].finalPos;

    expect(runners).toHaveProperty(uniqueID);
    expect(runners[uniqueID].horseName).toBe(horseName);

  });
});
