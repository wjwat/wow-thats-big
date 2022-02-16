import { defaultHeaders } from "../utils";

const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`

const checkStatus = (res) => {
  if (res.ok) { // res.status >= 200 && res.status < 300
      return res.json()
  } else {
      throw new Error(res.statusText);
  }
}

exports.handler = async function(event, context, callback) {
  try {
    const response = await fetch(url)
    const data = await checkStatus(response)
    callback(null, {
      statusCode: 200,
      headers: defaultHeaders,
      body: JSON.stringify(data)
    })
  } catch (error) {
    callback(error)
  }
}
