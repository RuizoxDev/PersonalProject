fetch('https://api.mcsrvstat.us/2/virtualhit.es')
    .then(response => response.json())
    .then(data => {
        let usersOnline = data.players.online;
        let link = document.querySelector("a.counter-link");
        link.innerHTML = `Users online: ${usersOnline}`
    });