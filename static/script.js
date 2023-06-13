
const app = Vue.createApp({
    data() {
        return {
            error: false,
            dog: undefined,
            message: undefined,
            pokemon: undefined,
            name: undefined,
            sprite: undefined,
        };
    },
    created() {
        var url1 = 'https://dog.ceo/api/breeds/image/random'
        var randomPokemon = Math.floor(Math.random() * 1010)
        var url2 = 'https://pokeapi.co/api/v2/pokemon'
        let myURL1 = `${url1}`
        let myURL2 = `${url2}/${randomPokemon}`
        console.log(`The URL is ${myURL1}`)
        console.log(`The URL2 is ${myURL2}`)


        fetch(myURL1)
        .then(r => r.json())
        .then(json => {
            console.log(json);
            console.log(`The image URL is: ${json.message}`)
            this.dog = json;
            this.message = json.message;
            return fetch(myURL2)

        })
        .then(r => r.json())
        .then(json => {
            console.log(json);
            this.pokemon = json;
            this.name = json.name
            console.log(json.name)
            this.sprite = json.sprites.front_default
            console.log(json.sprites.front_default)

        })
        .catch(err => this.error = true)
    },

});

const vm = app.mount("#app")