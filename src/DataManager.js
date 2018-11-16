/*  
Data Manager
*/

let roles = ['USER', 'TEAM_LEADER', 'DIRECTEUR_DES_RESSOURCES_HUMAINES', 'ADMIN']
let demandes = {
  CONGE_PAYE : {
    id : 'CONGE_PAYE',
    title : 'Congé payé',
    jourPayer : true,
    dates : [
      '2018-11-12'
    ]
  },
  RECUPERATION : {
    id : 'RECUPERATION',
    title : 'Récupération',
    jourPayer : true,
    dates : [
      '2018-11-13'
    ]
  },
  AMENAGEMENT_HORAIRE : {
    id : 'AMENAGEMENT_HORAIRE',
    title : 'Aménagment d\'horaire',
    jourPayer : true,
    dates : [
      '2018-11-14'
    ]
  }, 
  ABSENCE : {
    id : 'ABSENCE',
    title : 'Absence',
    jourPayer : false,
    dates : [
      '2018-11-15'
    ]
  }
}

let copy = obj => JSON.parse(JSON.stringify(obj))
let getData = ()=> JSON.parse(localStorage.getItem('data'))
let setData = a => localStorage.setItem('data', JSON.stringify(a))

let checkData = ()=> {
  if (getData() == null){
    setData({
      users : [{
            "mail": "antoine.gosset@ynov.com",
            "password": "123",
            "name": "Antoine",
            "lastname": "GOSSET",
            "birthdate": "1996-09-03",
            "adresse": {
                "num": "20",
                "voie": "boulevard du général de Gaulle",
                "comp": "bat D appt D406",
                "cdp": 44200,
                "ville": "Nantes"
            },
            "type contrat": "CDD",
            "end_date": "2019-31-08",
            "planning": {
                "S45": {
                    "lundi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "CA"
                    },
                    "mardi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "CA"
                    },
                    "mercredi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "CA"
                    },
                    "jeudi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "None"
                    },
                    "vendredi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "RTT"
                    }
                },
                "S46": {
                    "lundi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "None"
                    },
                    "mardi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "None"
                    },
                    "mercredi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "None"
                    },
                    "jeudi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "None"
                    },
                    "vendredi": {
                        "crenau1": 3,
                        "crenau2": 4,
                        "abscence": "None"
                    }
                }
            },
            "conge": {
                "CA": 25,
                "RTT": 10
            },
            "manager": "",
            "satut": "employe",
            "team": []
        }
    ]})
  }
}

export default {
  getData : () => getData(),
  setData : obj => setData(obj),
  resetData : ()=> {
    localStorage.removeItem('data')
    sessionStorage.removeItem('user')
    checkData()
  },
  isLogged : ()=> sessionStorage.getItem('user')!=null,
  isLoggin : false,
  getLoggedUser : ()=> JSON.parse(sessionStorage.getItem('user')),
  logout : ()=> sessionStorage.removeItem('user'),
  login : (login, password)=> {
    checkData()
    let user = getData().users.find(e=>e.mail == login && e.password == password)
    if(user != undefined){
      sessionStorage.setItem('user', JSON.stringify(user))
    }
    return user
  },
  saveUser : uUser => {
    let data = getData()
    let userIndex = data.users.map(function(user) { return user.id }).indexOf(uUser.id);
    data.users[userIndex] = uUser
    setData(data)
    if(JSON.parse(sessionStorage.getItem('user')).id == uUser.id){
      sessionStorage.setItem('user', JSON.stringify(uUser))
    }
  },
  isAdmin : user=>user.roles.indexOf('ADMIN') > -1,
  isDRH : user=>user.roles.indexOf('DIRECTEUR_DES_RESSOURCES_HUMAINES') > -1,
  getRoles : ()=> roles,
  createUser : user => {
    let data = getData()
    user.id = new Date().getTime()
    data.users.push(user)
    setData(data)
  },
  findUser : (firstName, lastName, pseudo, mail)=>{
    let data = getData().users
    let usersfind = { 
      firstName : data.filter(u=>u.firstName.toUpperCase().includes(firstName.toUpperCase())) || [],
      lastName : data.filter(u=>u.lastName.toUpperCase().includes(lastName.toUpperCase())) || [],
      pseudo : data.filter(u=>u.pseudo.toUpperCase().includes(pseudo.toUpperCase())) || [],
      mail : data.filter(u=>u.mail.toUpperCase().includes(mail.toUpperCase())) || []
    }
    return usersfind
  }

}