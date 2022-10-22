





const _request = require( "request" );


const _forecast = ( latitude, longitude , _callback_Func ) => {


   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude}, ${longitude}.json?access_token=pk.eyJ1IjoiZmluZXRhbGthYmxlIiwiYSI6ImNsN200aXpqODB4dHAzbnF6eGRvMm14djMifQ.VonCnelwcpoqgRgJ31DxpQ`;
  
   _request( { url , json: true } , ( error, res, body ) => {


   if(error ) {

  _callback_Func( "Forecast Error -Check your URL" , undefined  );

   }

   else if( res.body.features.length <= 0 ) {

   _callback_Func( "Forecast Error - Error in the URL" , undefined );

   }

   else {
  
   const { id , place_name} = res.body.features[0];

   const _forecast = `The Fetched Location is ${place_name} and its ID is ${id}`;

   _callback_Func( undefined ,  _forecast );

   }

   })

};


module.exports = _forecast;


// _forecast( -73.9866 , 40.7306 , ( error, data ) => {

//   if( error ) {

//   return console.log( error );

//   }

//   console.log( data );
// });













