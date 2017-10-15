var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var array = [];
var i = 0;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/add', cors(), function(req, res)
{
	array[i++] = req.body.string;
	console.log(array[i - 1] + " " + i); 
	res.send("added");
});

app.delete('/api/delete/:id', cors(), function(req, res)
{
	if(parseInt(req.params.id) > i || parseInt(req.params.id) < 1)
	{
		res.json({text: "Тут нема стрічки з таким номером"});
	}
	else
	{
		for(var j = 0, k = 0; k < i; j++, k++)
		{
			if (j + 1 == parseInt(req.params.id))
			{
				k++;
			}
			array[j] = array[k];
		}
		i--;
		console.log("removed");
	}
});

app.get('/api/getAll', cors(), function(req, res) 
{
	res.json({array: array, number: i});
})

app.listen(3000);



// function(){
// 	var express = require('express');
// 	var app = express();

// 	app.get('/tasks', function(req, res){
// 		res.send('Нема задач на сьогодні');
// 	});

// 	app.get('/tasks/:id', function(req, res) {
// 		res.send(
// 			'Ви хочете отримати задачу з id=' +
// 			req.params.id + 
// 			', але на сьогодні задач немає!');
// 	});


// }