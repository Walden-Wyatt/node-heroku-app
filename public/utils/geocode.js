



const _request = require( "request" );

const _geocode = ( address , _callback ) => {  

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZmluZXRhbGthYmxlIiwiYSI6ImNsN200aXpqODB4dHAzbnF6eGRvMm14djMifQ.VonCnelwcpoqgRgJ31DxpQ`;
  
 _request( { url, json: true  } , ( error , response , body ) => {

   if( error ) {

   _callback( "Error Check your Internet Connection" , undefined );

   }

   else if( response.body.features.length <= 0 ) {

   _callback( "Error Check your URL Address" , undefined );

   }

   else {

  const [ latitude, longitude ] = response.body.features[0].center;

   const _data = {

     latitude,
     longitude

   }

  _callback( undefined , _data );

   }
 } )

};


module.exports = _geocode;


// _geocode( "new york" , ( error, data ) => {

//   if( error ) {

//    return console.log( error );

//   }

//   console.log( data );

    
// })





















