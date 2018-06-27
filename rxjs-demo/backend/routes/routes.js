var faker = require("faker");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var appRouter = function (app) {

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get("/node", function (req, res) {
    var data = ({
    	id: getRandomInt(5),
      name: faker.internet.userName()
    });
    console.log(data);
    res.status(200).send(data);
  });
  
  app.get("/node5", function (req, res) {
    var data = ([
    {
    	id: 0,
      name: faker.internet.userName()
    },
    {
    	id: 1,
      name: faker.internet.userName()
    },
    {
    	id: 2,
      name: faker.internet.userName()
    },
    {
    	id: 3,
      name: faker.internet.userName()
    },
    {
    	id: 4,
      name: faker.internet.userName()
    }
    ]);
    console.log(data);
    res.status(200).send(data);
  });
  
  /*
  app.get("/user", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  });

 app.get("/users/:num", function (req, res) {
   var users = [];
   var num = req.params.num;

   if (isFinite(num) && num  > 0 ) {
     for (i = 0; i <= num-1; i++) {
       users.push({
           firstName: faker.name.firstName(),
           lastName: faker.name.lastName(),
           username: faker.internet.userName(),
           email: faker.internet.email()
        });
     }

     res.status(200).send(users);
    
   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }

 });
 */
}

module.exports = appRouter;
