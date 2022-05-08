var dogs = {
    afghan: {
        name: "Afghan Hound",
        weight: {
            lower: 50,
            upper:60
        },
        work_ethic: {
            lower: 0,
            upper: 30
        },
        bark: function(){
            alert('Awoooo');
        }
    }
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
};


function testOne() {
    console.log(afghan.work_ethic.upper);
}