const Responses = require('../common/API_Responses');
const AWS = require('aws-sdk');

const SES = new AWS.SES();

exports.handler = async event => {
    
    console.log('event', event);

    const { from, to, subject, text } = JSON.parse(event.body);

    if(!from || !to || !subject || !text)
    return Responses._400({message: 'to, from, subject and text must be provided!!'});

    const params = {
        Destination:{
            ToAddresses: [to]
        },
        Message:{
            Body:{
                Text: { Data: text }
            },
            Subject:{ Data: subject }
        },
        Source: from
    }

    try{
        await SES.sendEmail(params).promise();
        return Responses._200({message: 'Email sent successfully.'});
    }
    catch(error){
        console.log('Something went wrong while sending the email with error: ', error);
        return Responses._400({message: 'Sending failed!!'});
    }
}