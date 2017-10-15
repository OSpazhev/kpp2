function onClickAdd() {
	var string = document.getElementById('string').value;

	fetch("http://localhost:3000/api/add",{
    	method: 'post',
    	headers: {
      		'Content-Type': 'application/json'
    	},
    	body: JSON.stringify({ string: string })
  	})
		.then(function(res) {
			console.log('added');
		}).then(loadStack());
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function OnClickRemove() {
	var id = document.getElementById('id').value;
	if(!isNumeric(id))
	{
		alert("Oh No! God, please, No!!!!!!!!!");
	}
	else
	{
		fetch("http://localhost:3000/api/delete/"+id,{
    		method: 'delete',
    		headers: {
      		'Content-Type': 'application/json'
    		}
  		})
			.then(function(response)
			{
				response.json().then(function(data){
					alert(data.text);
				});
			}).then(loadStack());
	}	
}

function loadStack(){
	fetch("http://localhost:3000/api/getAll",{
    	method: 'get',
    	headers: {
      		'Content-Type': 'application/json'
    	}
  	})
		.then(function(response)
			{
				response.json().then(function(data){
					var html = "";
					var number = data.number;
					for (var j = 0; j < number; j++)
					{
						html += '<li>' + data.array[j] + '</li>';
					}
				document.getElementById('strings').innerHTML = html;
				});
			});

}

loadStack();