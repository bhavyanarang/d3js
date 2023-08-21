console.log("Cool Java Script code")

// fetch("./conceptsComputedDump.json").then(data => JSON.parse(data.json())).then(console.log)

fetch("./conceptsComputedDump.json").then(data => data.json()).then(console.log)