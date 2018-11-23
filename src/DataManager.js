/*  
Data Manager
*/

let getData = () => JSON.parse(localStorage.getItem('data'))
let setData = a => localStorage.setItem('data', JSON.stringify(a))

let checkData = () => {
  if (getData() == null) {
    setData({
      users: [
        {
          "mail": "employe@ynov.com",
          "password": "12345",
          "name": "Alexandre",
          "lastname": "Desvallee",
          "birthdate": "1996-09-03",
          "adresse": {
            "num": "20",
            "voie": "boulevard du général de Gaulle",
            "comp": "bat D appt D406",
            "cdp": 44200,
            "ville": "Nantes"
          },
          "type contrat": "CDD",
          "tauxhoraire" : 35,
          "end_date": "2019-31-08",
          "planning": [
            {
              "lundi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mardi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mercredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "jeudi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "vendredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              }
            },
            {
              "lundi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mardi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mercredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "jeudi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "vendredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              }
            },
            {
              "lundi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mardi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mercredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "jeudi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "vendredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              }
            },
            {
              "lundi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mardi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mercredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "jeudi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "vendredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              }
            },
            {
              "lundi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mardi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "mercredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "jeudi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              },
              "vendredi": {
                "crenau1": 9,
                "crenau2": 17,
                "pause": 1,
                "abscence": "present"
              }
            },
        
          ],
          "conge": {
            "CA": 25,
            "RTT": 10
          },
          "manager": false,
          "RH": false,
          "team": []
        },
        {
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
        "type contrat": "CDI",
        "tauxhoraire" : 40,
        "end_date": "2019-31-08",
        "planning": [
          {
            "lundi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
        ],
        "conge": {
          "CA": 25,
          "RTT": 10
        },
        "manager": false,
        "RH": false,
        "team": []
      },
      {
        "mail": "manager@ynov.com",
        "password": "1234",
        "name": "Manager",
        "lastname": "Lastname",
        "birthdate": "1996-09-04",
        "adresse": {
          "num": "20",
          "voie": "boulevard du général de Gaulle",
          "comp": "bat D appt D406",
          "cdp": 44200,
          "ville": "Nantes"
        },
        "type contrat": "CDD",
        "tauxhoraire" : 45,
        "end_date": "2019-31-08",
        "planning": [
          {
            "lundi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
          {
            "lundi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mardi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "mercredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "jeudi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            },
            "vendredi": {
              "crenau1": 8,
              "crenau2": 18,
              "pause": 1,
              "abscence": "present"
            }
          },
        ],
        "conge": {
          "CA": 25,
          "RTT": 10
        },
        "manager": true,
        "RH": false,
        "team": ["antoine.gosset@ynov.com", "employe@ynov.com"]
      }
      ]
    })
  }
}

export default {
  getData: () => getData(),
  setData: obj => setData(obj),
  resetData: () => {
    localStorage.removeItem('data')
    sessionStorage.removeItem('user')
    checkData()
  },
  isLogged: () => sessionStorage.getItem('user') != null,
  isLoggin: false,
  getLoggedUser: () => JSON.parse(sessionStorage.getItem('user')),
  logout: () => sessionStorage.removeItem('user'),
  login: (login, password) => {
    checkData()
    let user = getData().users.find(e => e.mail == login && e.password == password)
    if (user != undefined) {
      sessionStorage.setItem('user', JSON.stringify(user))
    }
    return user
  },
  saveUser: uUser => {
    let data = getData()
    let userIndex = data.users.map(function (user) { return user.mail }).indexOf(uUser.mail);
    data.users[userIndex] = uUser
    setData(data)
    if (JSON.parse(sessionStorage.getItem('user')).mail == uUser.mail) {
      sessionStorage.setItem('user', JSON.stringify(uUser))
    }
  },
  isAdmin: user => user.roles.indexOf('ADMIN') > -1,
  isDRH: user => user.roles.indexOf('DIRECTEUR_DES_RESSOURCES_HUMAINES') > -1,
  getRoles: () => roles,
  createUser: user => {
    let data = getData()
    user.id = new Date().getTime()
    data.users.push(user)
    setData(data)
  },
  findUser: (mail, data) => {
    let usersfind = data.filter(u => u.mail.toUpperCase().includes(mail.toUpperCase()))
    
    return usersfind
  }
}