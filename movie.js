const movies = ['The Shawshank Redemption (1994)', 'The Godfather (1972)', 'The Dark Knight(2008)', 'The Godfather: part 2 (1974)','12 Angry Men(1957)', 'Schindler\'s List(1993)', 'The Lord of the Rings: The Return of the King(2003)', 'Pulp Fiction(1994)', 'The Lord of the Rings: The Fellowship of the Ring(2001)', 'The Good, the Bad and the Ugly(1966)']

const rates = [9.3 , 9.2 , 9.0 ,9.0 , 9.0 , 9.0 , 9.0 , 8.9 , 8.9 , 8.8]

const desc = ['A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.', 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.', 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.']




// NOTE: rahe aval
// const display = function () {
        // Select all <tr> elements
        // const trElements = document.getElementsByTagName('tr');

        // // Convert the HTMLCollection to an array for easier manipulation
        // const trArray = Array.from(trElements);

        // Filter out the <tr> element that contains <th> elements
        // const filteredTrElements = trArray.filter(tr => !tr.querySelector('th'));
//     filteredTrElements.forEach( (tr,index) => {
//         const cMovie = document.createElement('td') // NOTE: c mean container
//         const linkMovie = document.createElement('a')
//         linkMovie.href = '#'
//         linkMovie.classList.add('movie-title')
//         linkMovie.textContent = movies[index]
//         cMovie.appendChild(linkMovie)
//         tr.prepend(cMovie)

//         // NOTE: for description
//         const cDesc = document.createElement('td')
//         cDesc.textContent = desc[index]
//         tr.appendChild(cDesc)

//         // NOTE: for rate
//         const cRate = document.createElement('td')
//         cRate.classList.add('score')
//         cRate.textContent = rates[index]
//         tr.appendChild(cRate)
//     });
// }




// NOTE: rahe dovom
const display = function () {
    const length = 10
    let html = ''
    for (let index = 0; index < length; index++) {
        const movie = movies[index]
        const rate = rates[index]
        const description = desc[index]
        let htmElement = `
        <tr>
            <td>
                <a href="#" class="movie-title">${movie}</a>
            </td>
            <td>
                ${description}
            </td>
            <td class="score"> ${rate}
        </tr>
        ` 
        html += htmElement
    }
    document.querySelector('tbody').innerHTML = html

}

window.addEventListener('load', display)