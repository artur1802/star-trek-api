const express = require('express')
const app = express()
const cors =require('cors')
const { response } = require('express')
const PORT=8000

app.use(cors())


const aliens= {

    'humans' : {
        'speciesName' :'Humans',
        'homeworld' :'Earth',
        'features' :'Rounded ears, hair on head and face (sometimes)',
        'interestingFacts' :'Founded the united federation of planets after first contact with the vulcans',
        'notableExample' :"James T., Kirk,Zephram cochran, Abraham Lincoln",
        'image' : 'https://th.bing.com/th/id/OIP.ztXfCwFuXWi1C3YbJ7GI-wHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7'
     },
    'vulcans' : {
        'speciesName' :'vulcans',
        'homeworld' :'vulcan',
        'features' :'pointed ears, upward-curving eyebrows',
        'interestingFacts' :'Practice an extrem form of emotional regulation that focuses on logic above all else',
        'notableExample' :"spock, T'Pol, sarek",
        'image' : 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'

      },
    'klingons' : {
        'speciesName' :'vulcans',
        'homeworld' :'vulcan',
        'features' :'pointed ears, upward-curving eyebrows',
        'interestingFacts' :'Practice an extrem form of emotional regulation that focuses on logic above all else',
        'notableExample' :"spock, T'Pol, sarek",
        'image' : 'https://th.bing.com/th/id/R.23c3b2d4449fd6e7e52be45f444d7026?rik=n%2bFazBkuB7%2bBiw&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f12800000%2fKlingons-klingons-12879699-1024-723.jpg&ehk=ph%2fBHYCuOuTxyorcZJTMOOD404Bo5DeiQE32FaOuWvk%3d&risl=&pid=ImgRaw&r=0'
     },
    'romulans': { 
        'speciesName' :'vulcans',
        'homeworld' :'vulcan',
        'features' :'pointed ears,upward-curving eyebrows',
        'interestingFacts' :'Practice an extrem form of emotional regulation that focuses on logic above all else',
        'notableExample' :"spock, T'Pol, sarek",
        'image' : 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/06/star-trek-important-romulans-featured-image.jpg'


    },
    'borg' : {
        'speciesName' :'The borg',
        'homeworld' :'unknow',
        'features' :'Pale skin, numerous interior and exterior modifications ',
        'interestingFacts' :'No single genetic linage, species propagates by assimilating individuals via nanotecnology, led by a hive mind',
        'notableExample' :"Borg queen, Seven of nine,Locutus",
        'image' : 'https://static.wikia.nocookie.net/memoryalpha/images/e/ed/Hugh_body.jpg/revision/latest?cb=20200227180730&path-prefix=en'
     },
    'gorn' : { 
        'speciesName' :'vulcans',
        'homeworld' :'vulcan',
        'features' :'pointed ears, upward-curving eyebrows',
        'interestingFacts' :'Practice an extrem form of emotional regulation that focuses on logic above all else',
        'notableExample' :"spock, T'Pol, sarek",
        'image' : 'https://upload.wikimedia.org/wikipedia/en/a/a0/StarTrek-Gorn.jpg'
    }


}

app.get('/',(request,response) =>{
response.sendFile(__dirname + '/index.html')

})

app.get('/api/:alienName',(request,response) => {
    
    const aliensName = request.params.alienName.toLowerCase()

    if(aliens[aliensName]){

        response.json(aliens[aliensName])

    }else {

        response.json(aliens['humans'])
    }
})


app.listen(process.env.PORT || PORT, () =>{
    console.log('SERVER IS RUNNING.')
})

