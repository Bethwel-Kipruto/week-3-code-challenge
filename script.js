// fetching data
const url ="http://localhost:3000/films"
fetch(url)
    .then (function (response) {
        return response.json()
    })
    .then(films=>films.forEach(shows=>displayShows(shows)) )


function displayShows(shows){
        const filmposts = document.createElement("ul")
        filmposts.className = "li"
        filmposts.innerHTML =`
        <br><img src=${shows.poster}>
        <p>"TITLE: ${shows.title}"</p>
        <p>"RUNTIME: ${shows.runtime}"</p>
        <p>"CAPACITY: ${shows.capacity}"</p>
        <p>"SHOWTIME:${shows.showtime}"</p>
        <p>"TICKETS SOLD:${shows.tickets_sold}"</p>
        <p>"DESCRIPTION:${shows.description}"</p><br>
        <button onclick="reduceTickets()">BOOK TICKET</button>
        
        `
        document.querySelector("#displayShows").appendChild(filmposts)



}
   








//.then(films=>films.forEach(shows=>displayShows(shows)))