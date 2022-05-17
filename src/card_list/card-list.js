let items = [
    {
        "id":0,
        "name": "Perro",
        "photo": "",
        "isOpen": false
    },
    {
        "id":1,
        "name": "Gato",
        "photo": "",
        "isOpen": false
    },
    {
        "id":2,
        "name": "Víbora",
        "photo": "",
        "isOpen": false
    },
    {
        "id":3,
        "name": "Águila",
        "photo": "",
        "isOpen": false
    },
    {
        "id":4,
        "name": "Ardilla",
        "photo": "",
        "isOpen": false
    },
    {
        "id":5,
        "name": "Gusano",
        "photo": "",
        "isOpen": false
    },
    {
        "id":6,
        "name": "Oso",
        "photo": "",
        "isOpen": false
    },
    {
        "id":7,
        "name": "Abeja",
        "photo": "",
        "isOpen": false
    },
    {
        "id":8,
        "name": "Cabra",
        "photo": "",
        "isOpen": false
    },
    {
        "id":9,
        "name": "Tiburón",
        "photo": "",
        "isOpen": false
    }
]

function cards (cards) {
    
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