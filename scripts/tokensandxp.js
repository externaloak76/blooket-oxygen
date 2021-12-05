// get amout of tokens wanted
tokenAmount = prompt('how many tokens 500 max.')

// the http put request
fetch('https://api.blooket.com/api/users/add-rewards',{
	method: 'PUT',
  // headers
	headers:{
	'Host': 'api.blooket.com',
'Connection': 'keep-alive',
'Content-Length': '33',
'Content-Type':'application/json',
'Authorization': localStorage.token,
'sec-ch-ua-mobile': '?0',
'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
'sec-ch-ua-platform': "Linux",
'Origin': 'https://www.blooket.com',
'Sec-Fetch-Site': 'same-site',
'Sec-Fetch-Mode': 'cors',
'Sec-Fetch-Dest': 'empty',
'Referer': 'https://www.blooket.com/',
'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'en-US,en;q=0.9'
	},
	body: JSON.stringify({name: "username here", addedTokens: tokenAmount, addedXp: 300}) //adds a max of 500 tokens and a max of 300 xp
})
