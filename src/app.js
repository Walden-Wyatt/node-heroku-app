









// load express
 
 const _express =  require("express" );

 const _app =  _express();


 // loading path module


 const _path =   require( "path" );


 // Load geocode() and forecast() Modules

   const _geocode = require( "../public/utils/geocode.js" );

   const _forecast = require( "../public/utils/forecast.js" );




 // setting up configuration for templete engines using set() and engine()


  _app.set( "view engine" , "hbs" );

  _app.set( "views" , _path.join( __dirname , "../templeting_hbs" ));

  _app.engine( "hbs" , require( "hbs" ).__express );




  // Setting up code to load partials Folder


  const _hbs = require( "hbs" );

  _hbs.registerPartials( _path.join( __dirname , "../templeting_hbs/partials" ));




  // Loading statis Files

   _app.use( _express.static( _path.join( __dirname , "../public" )));





 // setting up routes

 _app.get( "/" , ( req, res, next ) => {

//   res.send( "Home Page" );

 res.render( "index" , { _prop: "Home Page" })

 

 });


 _app.get( "/about" , ( req, res, next ) => {

//   res.send( "About Route" );

  res.render( "about" , { _prop: "About Page" } );

 });


  _app.get( "/contact" , ( req, res, next ) => {

//   res.send( "Contact Route" );

  res.render( "contact" , { _prop: "Contact page" } );

  


  });


  _app.get( "/weather" , ( req, res, next   ) => {


  if( !req.query.address ) {

  return res.send( {
  error: "Failed to get the Data, Try another Serach with address querry string"
  });
  }


  const _address = req.query.address;

  _geocode( _address , ( error, { latitude , longitude } = {} ) => {
  
  if( error ) {

  return res.send( {

  error

  })
  }


  _forecast(  latitude , longitude  , ( error, forecast ) => {

  if( error ) {

  return res.send( { error } );

  }

    res.send( {

   forecast

    })
  }  )





  } )
  




  } );



  // setting up 404 page not found

  _app.get( "*" , ( req, res, next ) => {

//   res.send( "404 Page not found" );


  res.render( "404Page" , { _prop: "404 Page" } );

  });



  // creating server using listen()


   _app.listen( 4000 , () => {

   console.log( "Server running in the Port 4000" );

   });









