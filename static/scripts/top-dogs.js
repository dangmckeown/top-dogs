class Dog {
    constructor(name, breed, weight, work_ethic, woofiness, winsomeness, wagginess, wisdom, bark, img)
    {
        this.name = name;
        this.breed = breed;
        this.weight = weight,
        this.work_ethic = work_ethic;
        this.woofiness = woofiness;
        this.winsomeness = winsomeness;
        this.wagginess = wagginess;
        this.wisdom = wisdom;
        this.bark = function(){
            alert(bark);
        }
        this.img = img ? img : '/static/images/default-dog.png';
    }
}

var exampleDog = new Dog(
    'Craig', //name
    'Siberian Husky', //breed
    60, //weight
    80, //work_ethic - super hard worker
    65, //woofiness - bit excitable
    35, // winsomeness - not everyone's cup of tea
    40, //wagginess
    30, //wisdom - bit mental
    'Oaf!', //bark
    '/static/images/siberian-husky-1.jpeg' //img
    );

//List of dog names to pick at random
const dogNames = [
    'Bella',
'Luna',
'Charlie',
'Lucy',
'Cooper',
'Max',
'Bailey',
'Daisy',
'Sadie',
'Lola',
'Buddy',
'Molly',
'Stella',
'Tucker',
'Bear',
'Zoey',
'Duke',
'Harley',
'Maggie',
'Jax',
'Bentley',
'Milo',
'Oliver',
'Riley',
'Rocky',
'Penny',
'Sophie',
'Chloe',
'Jack',
'Lily',
'Nala',
'Piper',
'Zeus',
'Ellie',
'Winston',
'Toby',
'Loki',
'Murphy',
'Roxy',
'Coco',
'Rosie',
'Teddy',
'Ruby',
'Gracie',
'Leo',
'Finn',
'Scout',
'Dexter',
'Ollie',
'Koda',
'Diesel',
'Moose',
'Mia',
'Marley',
'Gus',
'Hank',
'Willow',
'Louie',
'Thor',
'Pepper',
'Blue',
'Jake',
'Gunner',
'Abby',
'Apollo',
'Bandit',
'Kona',
'Lilly',
'Shadow',
'Millie',
'Nova',
'Beau',
'Buster',
'Dixie',
'Jackson',
'Zoe',
'Oakley',
'Henry',
'Ace',
'Maverick',
'Izzy',
'Bruno',
'Baxter',
'Tank',
'Layla',
'Athena',
'Ginger',
'Olive',
'Winnie',
'Lexi',
'Remi',
'Jasper',
'Hazel',
'Gizmo',
'Frankie',
'Oscar',
'Lucky',
'Dakota',
'Belle',
'Brody'
];


/**
 * Array breeds contains object for each breed
 */
var breeds = [
    {
        name: "Afghan Hound",
        weight: {
            min: 50,
            max:60
        },
        work_ethic: {
            min: 0,
            max: 30
        },
        winsomeness: {
            //high ceiling, low floor!
            min: 10,
            max: 85
        },
        woofiness: {
            //Can't be asked
            min: 10,
            max: 50
        },
        wagginess: {
            //Too aloof to be very waggy
            min: 5,
            max: 45
        },
        wisdom: {
            //a bit boh
            min: 20,
            max: 40
        },
        bark: 'Awoooo',
        img: 'static/images/Afghan_dog_-_cropped.jpeg'
        },
];
    /*
    "Afghan Hound": {
        "weight": {
            "lower": 50,
            "upper": 60
        }
    },
    "Bichons Frise": {
        "weight": {
            "lower": 12,
            "upper": 18
        }
    },
    "Border Collie": {
        "weight": {
            "lower": 30,
            "upper": 55
        }
    },
    "Cavalier King Charles Spaniel": {
        "weight": {
            "lower": 13,
            "upper": 18
        }
    },
    "Chihuahua": {
        "weight": {
            "lower": 1,
            "upper": 6
        }
    },
    "Dalmatian": {
        "weight": {
            "lower": 45,
            "upper": 70
        }
    }
    */

/**
 * Generate Dog
 * Pick random name from names list
 * Pick breed at random from breeds list
 */

function generateDog(){
    // Your code here
}

