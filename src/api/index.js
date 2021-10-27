import axios from 'axios';

const getPlacesData = async (type, sw, ne) => {
    try {
        const {data : { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
              },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'dee9c6c66fmsh24ee07b0da4c6a6p150dacjsnbc5d631c6b0b'
            }
          });
        return data;

    }catch(err){
        console.log(err);
    }
}


export default getPlacesData;



