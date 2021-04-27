const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Richard Hildred"});
    }
    render(sPage) {
        const oJson = fetch("https://assignment-3---routine-poutine-default-rtdb.firebaseio.com/meals.json").json();
        console.log(oJson);
        let sResult = "<h1>Upcoming Popup Meals</h1>";
        Object.keys(oJson).map((key) => {
            const oEntity = oJson[key];
            console.log(oEntity);
            oEntity.id = key;
            sResult += `
            <h2>${oEntity.title}</h2>
            <p><img src="${oEntity.featured_image}" alt="${oEntity.title}"</p>
            <p>${oEntity.full_description}</p>
            <p>${oEntity.datetime}</p>
            <p>${oEntity.location}</p>
            <form action="http://localhost:3001/payment" method="post">
            <input type="hidden" name="title" value="${oEntity.title}" />
            <input type="tel" placeholder="enter your number" />
            <button type="submit">Order Now</button>
            </form>
            ` ;
            <form action="https://serene-taiga-04277.herokuapp.com/payment" method="post">
            <input type="hidden" name="title" value="${oEntity.title}" />
            <input type="hidden" name="price" value="7.99" />
            <input type="tel" placeholder="enter your number" name="telephone"/>
            <button type="submit">Order now</button>
            </form>
        });
        return sResult;
    }
}