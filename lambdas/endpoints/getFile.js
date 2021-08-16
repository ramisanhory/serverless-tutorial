const Responses = require('../common/API_Responses');
const S3 = require('../common/S3');

const bucket = process.env.bucketName;

exports.handler = async event => {
    
    if(!event.pathParameters || !event.pathParameters.fileName)
    return Responses._400({message: 'missing the fileName from the path'});
    
    let fileName = event.pathParameters.fileName;

    const data = JSON.parse(event.body);

    console.log(`file name is: ${fileName}, and bucket name is ${bucket}`);
    
    const file = await S3.get(fileName, bucket).catch(err => {
        console.log('error in S3 get: ', err);
        return null;
    });

    if(!file)
    Responses._400({message: "Failed to read file by filename!!"});

    return Responses._200({file});
}