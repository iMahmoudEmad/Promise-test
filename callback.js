function getUser(callback) {
	setTimeout(() => {
		callback(
			[
				{
					name: 'ahmed'
				}
			],
			null
		);
	}, 500);
}

function getUsers(callback) {
	setTimeout(() => {
		callback(
			[
				{
					name: 'ahmed'
				},
				{
					name: 'mohamed'
				}
			],
			null
		);
	}, 2000);
}

function getPosts(callback) {
	setTimeout(() => {
		callback(
			[
				{
					title: 'post1'
				},
				{
					title: 'post2'
				}
			],
			null
		);
	}, 1000);
}

getUsers((users, err) => {
	if (err) throw err;
	console.log(users);
	getUser((user, err) => {
		if (err) throw err;
		console.log(user);
		getPosts((posts, err) => {
			if (err) throw err;
			console.log(posts);
		});
	});
});

// Main Thread
/*
    getPosts(callback)
*/

/* ************************************************* */

// Event Loop
/*
    callback([{
        title: 'post1'
    }, {
        title: 'post2'
    }])
*/
