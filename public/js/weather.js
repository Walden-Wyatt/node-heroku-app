




//  console.log( "Script linked" );



 const _form =  document.querySelector( "form" );

 const _inputData = document.querySelector( "input" );


 const _forError = document.querySelector( "#_forError" );

 const actualData = document.querySelector( "#actualData" );


 _forError.textContent = " ";

 actualData.textContent = " ";



 _form.addEventListener( "submit" , (ev) => {

  
 const _address = _inputData.value;

//   console.log( _address );

    ev.preventDefault();

    const _url = `/weather?address=${_address}`;


    fetch( _url  ).then( (response) => {

    response.json( ).then( (data ) => {

    

    if( data.error ) {

  _forError.textContent = data.error 

  actualData.textContent = " ";

    }


    else {

   _forError.textContent  = " ";

   actualData.textContent = data.forecast

    }

    })

    })

//   console.log( "Submit event" );
  
 });










