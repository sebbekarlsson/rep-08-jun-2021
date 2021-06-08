class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    toHtmlElement() {
        const element = document.createElement("div");
        element.innerText = `${this.firstname} ${this.lastname}, ${this.age}`;

        return element;
    }
}

function filterMatch(inputText, person) {
    const inText = inputText.toLowerCase();
    const firstname = person.firstname.toLowerCase();
    const lastname = person.lastname.toLowerCase();


    return firstname.includes(inText) || lastname.includes(inText);
}

function searchDatabase(inputText) {
    const results = DATA.filter(person => filterMatch(inputText, person));
    const personObjects = results.map(result => new Person(result.firstname, result.lastname, result.age));

    return personObjects;
}

class SearchEngine {
    constructor(inputField, resultsSection) {
        this.inputField = inputField;
        this.resultsSection = resultsSection;
    }

    search() {
        const value = this.inputField.value;
        const results = searchDatabase(value);

        results.forEach(result => this.resultsSection.appendChild(result.toHtmlElement))
    }
}

const inputField = document.getElementById("search-input");
const resultsSection = document.getElementById("results-section");
const engine = new SearchEngine(inputField, resultsSection);


inputField.addEventListener("keyup", function(event){
    engine.search();
});