const Responses = {
    _200(data={}){
        return {
            headers: {
                Content: 'application/json',
                Access_Control_Allow_Methods: '*',
                Access_Control_Allow_Origin: '*'
            },
            statusCode: 200,
            body: JSON.stringify(data)
        }
    },
    _400(data={}){
        return {
            headers: {
                Content: 'application/json',
                Access_Control_Allow_Methods: '*',
                Access_Control_Allow_Origin: '*'
            },
            statusCode: 400,
            body: JSON.stringify(data)
        }
    }
}

module.exports = Responses;