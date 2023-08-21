console.log("Cool Java Script code")

const fs = require('fs');


fs.readFileSync('conceptsComputedDump.json', (err, data) => {
  if (err) throw err;
  let json = JSON.parse(data);
  let map = new Map(Object.entries(json));

  const new_map = map;
  processFile(map);
});

function processFile(content){
  console.log(content);
}

