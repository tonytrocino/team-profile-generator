const createHTML = function (str) {

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link href="/assets/css/style.css" rel="stylesheet">
    </head>
    
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main id="app">
        ${str} 
      </main>       
    </body>
    
    </html>`;

}

//writes employee records to html format
const makeEmployeeHTML = function (employees) {
  let jobInfo;

  if (employees.title === "Manager") {
    jobInfo = `Office Number: ${employees.officeNumber}`;
  } else if (employees.title === "Engineer") {
    jobInfo = `Github Username: <a href="https://github.com/${employees.github}">${employees.github}</a>`;
  } else if (employees.title === "Intern") {
    jobInfo = `School: ${employees.school}`;
  }

  return `<div class="card">
<div class="card-header">
    <h2>${employees.name}</h2>  
    <h2><img src="https://source.unsplash.com/random/300x300/?headshot&${Math.random()}"> ${employees.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${employees.id}</li>
        <li>Email: <a href="mailto:${employees.email}">${employees.email}</a></li>
        <li>${jobInfo} </li>
    </ul>
</div>
</div>`
}

exports.createHTML = createHTML;
exports.makeEmployeeHTML = makeEmployeeHTML;