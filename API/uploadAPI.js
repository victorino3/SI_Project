const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

const filePath = `path/to/file.ext`;
const form = new FormData();
const stats = fs.statSync(filePath);
const fileSizeInBytes = stats.size;
const fileStream = fs.createReadStream(filePath);
form.append('field-name', fileStream, { knownLength: fileSizeInBytes });

const options = {
    method: 'POST',
    credentials: 'include',
    body: form
};

fetch(apiUrl, { ...options })
  .then(res => {
      if (res.ok) return res;
      throw res;
  });