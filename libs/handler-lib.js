export default function handler(lambda) {
    return function (event, context) {
        return Promise.resolve()
            //Run the lambda
            .then(() => lambda(event, context))
            //on Success
            .then(responseBody => [200, responseBody])
            //on Failure
            .catch(err => {
                console.log('err --->', err);
                return [500, { error: err.message }];
            })
            //Return HTTP response
            .then(([statusCode, body]) => ({
                statusCode,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                },
                body: JSON.stringify(body)
            }));
    };
}
