
// const successResponse = (res, {statusCode = 200, message = 'success!!!!!', payload={}}) => {
//     return res.status(statusCode).json({
//         success: true,
//         message: message,
//         payload
//     })
// }

export const successResponse = ({status = 200, message = 'success!!!!!', payload={}}) => {
  return Response.json({
    success: true,
    message,
    payload
  }, {status: status})
}

export const errorResponse = ({status = 500, message = 'Internal Server Error'}) => {
  return Response.json({
    success: false,
    message
  }, {status: status})
}