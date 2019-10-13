
async function returnPromise(){

    let resolve = await new Promise( ( resolve, reject ) => {

        setTimeout( () => resolve("Promise resolved"), 1000 );

    });
    return resolve;

}


( async function getPromise(){

    let data = await returnPromise();
    console.log( data );

}())