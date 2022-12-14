const restaurant = [
    {name:'restaurant1'},{name:'restaurant2'},{name:'restaurant3'},{name:'restaurant4'},{name:'restaurant5'},
    {name:'restaurant6'},{name:'restaurant7'},{name:'restaurant8'},{name:'restaurant9'},{name:'restaurant10'},
    {name:'restaurant11'},{name:'restaurant12'},{name:'restaurant13'},{name:'restaurant14'},{name:'restaurant15'},
    {name:'restaurant16'},{name:'restaurant17'},{name:'restaurant18'},{name:'restaurant19'},{name:'restaurant20'},
]

const searchInput = document.querySelector('#search-bar')
searchInput.addEventListener("input", (e) => {
    // inside, we will need to achieve a few things:
    // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
    let value = e.target.value

    // 2. check: if input exists and if input is larger than 0
    if (value && value.trim().length > 0){
        // 3. redefine 'value' to exclude white space and change input to all lowercase
         value = value.trim().toLowerCase()
        // 4. return the results only if the value of the search is included in the person's name
        // we need to write code (a function for filtering through our data to include the search input value)
        setList(people.filter(person => {
            return person.name.includes(value)
        }))
        
    } else {
        // 5. return nothing
        // input is invalid -- show an error message or show no results

    }

})

function setList(results){

    for (const restaurant of results){
        // creating a li element for each result item
        const resultItem = document.createElement('div')

        // adding a class to each item of the results
        resultItem.classList.add('restaurant-categories')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(restaurant.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
}