$("document").ready(function() {
	let fetching = $("*[data-fetch=fetch_users_data_base]"),
		DB = $("*[data-DB=user_data_base]");

	var modelUsers;	



	fetching.click(function() {
		if(modelUsers == undefined) {

			$.get("http://localhost:3000/app/users", function(data) {
				console.log(data);
				console.log("Hello, world");
				modelUsers = JSON.parse(data).users;
				console.log(modelUsers);

				for(let i = 0; i < modelUsers.length; i++) {
					$(".table")
					.append(`<tr>
								 <th>${modelUsers[i].id}</th>
							     <td>${modelUsers[i].first_name}</td>
								 <td>${modelUsers[i].last_name}</td>
								 <td>${modelUsers[i].email}</td>
							</tr>`);
				};
			});
		} else {
			return
		}


	});







	





});
