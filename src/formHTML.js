let formHTML = employeeCards => {
  //console.log('ALL TEAM MEMBERS', employeeCards)
  let cardArea = ""

  for(let i = 0; i < employeeCards.length; i++){
      let optionalInfo = employeeCards[i].Office || employeeCards[i].gitHub || employeeCards[i].School;
      let keys = Object.keys(employeeCards[i]);
      let optionKey = keys[4];
      let optionalStat = optionKey + ": " + optionalInfo

      if (optionKey === undefined){
          optionalStat = "";

      } else if (optionKey === 'gitHub'){
          optionalStat = (`GitHub : <a href='https://www.github.com/${employeeCards[i].gitHub}' target='_blank'> ${employeeCards[i].gitHub}</a>`)
      }

      let {name, id, email, role} = employeeCards[i]
      cardArea+= 
        `
                <div class="card col" style="width: 18rem;">
                    <div class="card-body card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${role}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
                        <li class="list-group-item"> ${optionalStat}</li>  
                    </ul>
                </div>
        `
   }

   return `

  <!DOCTYPE html>
  <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">



        <link rel="stylesheet" href="style.css">

        <title>Team Profile</title>
    </head>
        
    <body>
        
        <nav class="navbar">
        <div class="navbar-header">
        <span class="navbar-brand mb-0 h1">Company Team</span>
        </div>
        </nav>
        
        <main class="container">
        
        <div class="row">
        ${cardArea}
        </div>
        
        </main>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    </body>
  
  </html>

  ` 
}

 module.exports = formHTML