var express = require('express')
var app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

var questions = [
  {
    id: 1,
    question: "Who was the first person to ever drive over the Coroßnado bridge?",
    answer: "Ronald Reagan",
    image: "/images/ronald.jpg"
  },
  {
    id: 2,
    question:"What is the largest wooden structure in the United States?",
    answer: "Hotel Del Coronado",
    image: "/images/hotel_del_coronado.jpg"
  },
  {
    id: 3,
    question:"What was the original name of the san Diego County Fair",
    answer: "Del Mar Fair",
    image: "/images/FairAerialSunset.jpg"
  },
   {
    id: 4,
    question: "How many visitors come to Mission Bay Park every year?",
    answer: "More than 5 million",
    image: "/images/money.jpg"
  },
   {
    id: 5,
    question:"What famous actor founded the La Jolla Playhouse?",
    answer:"Gregory Peck",
    image: "/images/greg.jpg"
  }
]

app.get('/', function(req, res){
  res.render("index")
})

app.get('/trivia', function(req, res){
  res.render("trivia", {'questions':questions})
})

app.get('/trivia/:id', function(req, res){
  var id = req.params['id']
  res.render("answer",{'answers':questions[id].answer, 'images':questions[id].image, "next": (questions[id].id % questions.length)}) 
})

// app.get('/trivia/:id', function(req, res){
//   var id = req.params['id']
//   res.render("answer",{"next":id + 1})
// })

app.listen(3000, function(){
  console.log("success. App running on port 3000");
})
