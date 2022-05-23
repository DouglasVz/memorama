let items = [
    {
        "id":0,
        "name": "Dog",
        "photo": "",
        "isOpen": false
    },
    {
        "id":1,
        "name": "Cat",
        "photo": "",
        "isOpen": false
    },
    {
        "id":2,
        "name": "Snake",
        "photo": "",
        "isOpen": false
    },
    {
        "id":3,
        "name": "Eagle",
        "photo": "",
        "isOpen": false
    },
    {
        "id":4,
        "name": "Squirrell",
        "photo": "",
        "isOpen": false
    },
    {
        "id":5,
        "name": "Mouse",
        "photo": "",
        "isOpen": false
    },
    {
        "id":6,
        "name": "Bear",
        "photo": "",
        "isOpen": false
    },
    {
        "id":7,
        "name": "Bee",
        "photo": "",
        "isOpen": false
    },
    {
        "id":8,
        "name": "Goat",
        "photo": "",
        "isOpen": false
    },
    {
        "id":9,
        "name": "Shark",
        "photo": "",
        "isOpen": false
    }
]

let cards =  (cards) => {
    
    cards.map((card,index) => {
        let duplicate = {
            "id":cards.length,
            "name": card.name,
            "photo": card.photo,
            "isOpen": card.isOpen
        }
        return  cards.push(duplicate)

    });
    
    cards = cards.sort((a,b) => {return 0.5 - Math.random()})

}
cards(items);



export default items;
