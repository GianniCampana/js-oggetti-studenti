var studente = {
    nome    : 'Gianni',
    cognome : 'Campana',
    eta     : 24,
}

  for(var key in studente){
    console.log(studente[key]);
  }


  var arrOggetti = [
    {
    nome    : 'Fabrizio',
    cognome : 'De andre',
    eta     : 59,
    },
    {
    nome    : 'Giuseppe',
    cognome : 'Verdi',
    eta     : 88,
    },
    {
    nome    : 'Vasco',
    cognome : 'Rossi',
    eta     : 69,
    },
    {
    nome    : 'Rino',
    cognome : 'Gaetano',
    eta     : 31,
    }
  ]


  var nuovoNome = prompt("scrivi il tuo nome");
  var nuovoCognome = prompt("scrivi il tuo cognome");
  var nuovaEta = prompt("scrivi la tua età");

  arrOggetti.push({
    nome: nuovoNome,
    cognome: nuovoCognome,
    eta: nuovaEta
  })

  for(var utente of arrOggetti){
    for(var key in utente){
      console.log(utente.nome, utente.cognome)
      
    }
  }


  
  