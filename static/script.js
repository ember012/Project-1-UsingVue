
const app = Vue.createApp({
    data() {
        return {
            error: false,
            dog: undefined,
            message: undefined,
        };
    },
    created() {
        var url1 = 'https://dog.ceo/api/breeds/image/random'
        let myURL1 = `${url1}`
        console.log(`The URL is ${myURL1}`)

        fetch(myURL1)
        .then(r => r.json())
        .then(json => {
            console.log(json);
            console.log(`The image URL is: ${json.message}`)
            this.dog = json;
            this.message = json.message;


        })
        .catch(err => this.error = true)
    },

});

const vm = app.mount("#app")