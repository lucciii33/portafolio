const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			messages: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			saveMessage: (email,name, message) => {
				//   let favoriteString = favorites.toString();
				  fetch("https://3000-lucciii33-backendportaf-hpbzlbv07nz.ws-us47.gitpod.io/contactme", {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
						email,
						message,
						name,
					}),
				  })
					.then((response) => response.json())
					.then((data) =>{
						console.log(data)
						if(data){
							alert("thank you for your message")
						}

					} )
		
					.catch((err) => console.log(err));
				},
				
		}
	};
};

export default getState;
