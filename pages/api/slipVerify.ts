const axios = require('axios');
const FormDataModule = require('form-data');
const fs = require('fs');

let data = new FormDataModule();
data.append('file', fs.createReadStream(''));

let config = {
  method: 'POST',
  maxBodyLength: Infinity,
  url: 'https://developer.easyslip.com/api/v1/verify',
  headers: { 
    'Authorization': 'Bearer dc5adb9e-12df-461a-8b23-621c321f1120', 
    ...data.getHeaders()
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
