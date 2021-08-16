const Responses = require('../common/API_Responses');

exports.handler = async event => {
    console.log('event', event);

    if(!event.pathParameters || !event.pathParameters.ID)
    return Responses._400({message: 'missing the ID from the path'});
    
    let ID = event.pathParameters.ID;

    if(data[ID])
    return Responses._200(data[ID]);

    return Responses._400({message: 'no ID in data!!'});
}

const data = {
    123456: {
        name:'Rami Sanhory',
        gender: 'male',
        mobile: '01289900767'
    },
    654321: {
        name:'Mohammad Sanhory',
        gender: 'male',
        mobile: '01289900565'
    },
    112233: {
        name:'Saad Salama',
        gender: 'male',
        mobile: '01558446789'
    }
}