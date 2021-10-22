module.exports = {
  async up(db, client) {
    
    await db.collection('locations').insertMany([
        {
            "name": "Abia",
            "locationId": 1,
            "lgas": []
        },
        {
            "name": "Adamawa",
            "locationId": 2,
            "lgas": []
        },
        {
            "name": "Akwa Ibom",
            "locationId": 3,
            "lgas": []
        },
        {
            "name": "Anambra",
            "locationId": 4,
            "lgas": []
        },
        {
            "name": "Bauchi",
            "locationId": 5,
            "lgas": []
        },
        {
            "name": "Benue",
            "locationId": 6,
            "lgas": []
        },
        {
            "name": "Borno",
            "locationId": 7,
            "lgas": []
        },
        {
            "name": "Bayelsa",
            "locationId": 8,
            "lgas": []
        },
        {
            "name": "Cross River",
            "locationId": 9,
            "lgas": []
        },
        {
            "name": "Delta",
            "locationId": 10,
            "lgas": []
        },
        {
            "name": "Ebonyi",
            "locationId": 11,
            "lgas": []
        },
        {
            "name": "Edo",
            "locationId": 12,
            "lgas": []
        },
        {
            "name": "Ekiti",
            "locationId": 13,
            "lgas": []
        },
        {
            "name": "Enugu",
            "locationId": 14,
            "lgas": []
        },
        {
            "name": "Federal Capital Territory",
            "locationId": 15,
            "lgas": []
        },
        {
            "name": "Gombe",
            "locationId": 16,
            "lgas": []
        },
        {
            "name": "Imo",
            "locationId": 17,
            "lgas": []
        },
        {
            "name": "Jigawa",
            "locationId": 18,
            "lgas": []
        },
        {
            "name": "Kebbi",
            "locationId": 19,
            "lgas": []
        },
        {
            "name": "Kaduna",
            "locationId": 20,
            "lgas": []
        },
        {
            "name": "Kano",
            "locationId": 21,
            "lgas": []
        },
        {
            "name": "Kogi",
            "locationId": 22,
            "lgas": []
        },
        {
            "name": "Katsina",
            "locationId": 23,
            "lgas": []
        },
        {
            "name": "Kwara",
            "locationId": 24,
            "lgas": []
        },
        {
            "name": "Lagos",
            "locationId": 25,
            "lgas": []
        },
        {
            "name": "Nasarawa",
            "locationId": 26,
            "lgas": []
        },
        {
            "name": "Niger",
            "locationId": 27,
            "lgas": []
        },
        {
            "name": "Ogun",
            "locationId": 28,
            "lgas": []
        },
        {
            "name": "Ondo",
            "locationId": 29,
            "lgas": []
        },
        {
            "name": "Osun",
            "locationId": 30,
            "lgas": []
        },
        {
            "name": "Oyo",
            "locationId": 31,
            "lgas": []
        },
        {
            "name": "Plateau",
            "locationId": 32,
            "lgas": []
        },
        {
            "name": "Rivers",
            "locationId": 33,
            "lgas": []
        },
        {
            "name": "Sokoto",
            "locationId": 34,
            "lgas": []
        },
        {
            "name": "Taraba",
            "locationId": 35,
            "lgas": []
        },
        {
            "name": "Yobe",
            "locationId": 36,
            "lgas": []
        },
        {
            "name": "Zamfara",
            "locationId": 37,
            "lgas": []
        }

    ])
  },

  async down(db, client) {
  
    await db.collection('name').deleteMany({});
  }
};
