  function recordData (data) {
    console.log(data.ip, data.country)
  }
fetch("https://ipinfo.io/json?token=543e2896cb46c2").then(
  (response) => response.json()
).then(
  (jsonResponse) => console.log(jsonResponse.ip, jsonResponse.country)
)
const request = await fetch("https://ipinfo.io/json?token=543e2896cb46c2")
const json = await request.json()
console.log(jsonResponse.ip, jsonResponse.country)