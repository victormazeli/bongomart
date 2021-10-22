module.exports = {
  async up(db, client) {
  
    await db.collection('statelgas').insertMany(

      [
        {
            "lga": "Aba North",
            "stateId": 1
        },
        {
            "lga": "Aba South",
            "stateId": 1
        },
        {
            "lga": "Arochukwu",
            "stateId": 1
        },
        {
            "lga": "Bende",
            "stateId": 1
        },
        {
            "lga": "Ikawuno",
            "stateId": 1
        },
        {
            "lga": "Ikwuano",
            "stateId": 1
        },
        {
            "lga": "Isiala-Ngwa North",
            "stateId": 1
        },
        {
            "lga": "Isiala-Ngwa South",
            "stateId": 1
        },
        {
            "lga": "Isuikwuato",
            "stateId": 1
        },
        {
            "lga": "Umu Nneochi",
            "stateId": 1
        },
        {
            "lga": "Obi Ngwa",
            "stateId": 1
        },
        {
            "lga": "Obioma Ngwa",
            "stateId": 1
        },
        {
            "lga": "Ohafia",
            "stateId": 1
        },
        {
            "lga": "Ohaozara",
            "stateId": 1
        },
        {
            "lga": "Osisioma",
            "stateId": 1
        },
        {
            "lga": "Ugwunagbo",
            "stateId": 1
        },
        {
            "lga": "Ukwa West",
            "stateId": 1
        },
        {
            "lga": "Ukwa East",
            "stateId": 1
        },
        {
            "lga": "Umuahia North",
            "stateId": 1
        },
        {
            "lga": "Umuahia South",
            "stateId": 1
        },
        {
            "lga": "Demsa",
            "stateId": 2
        },
        {
            "lga": "Fufore",
            "stateId": 2
        },
        {
            "lga": "Ganye",
            "stateId": 2
        },
        {
            "lga": "Girei",
            "stateId": 2
        },
        {
            "lga": "Gombi",
            "stateId": 2
        },
        {
            "lga": "Guyuk",
            "stateId": 2
        },
        {
            "lga": "Hong",
            "stateId": 2
        },
        {
            "lga": "Jada",
            "stateId": 2
        },
        {
            "lga": "Lamurde",
            "stateId": 2
        },
        {
            "lga": "Madagali",
            "stateId": 2
        },
        {
            "lga": "Maiha",
            "stateId": 2
        },
        {
            "lga": "Mayo-Belwa",
            "stateId": 2
        },
        {
            "lga": "Michika",
            "stateId": 2
        },
        {
            "lga": "Mubi-North",
            "stateId": 2
        },
        {
            "lga": "Mubi-South",
            "stateId": 2
        },
        {
            "lga": "Numan",
            "stateId": 2
        },
        {
            "lga": "Shelleng",
            "stateId": 2
        },
        {
            "lga": "Song",
            "stateId": 2
        },
        {
            "lga": "Toungo",
            "stateId": 2
        },
        {
            "lga": "Yola North",
            "stateId": 2
        },
        {
            "lga": "Yola South",
            "stateId": 2
        },
        {
            "lga": "Abak",
            "stateId": 3
        },
        {
            "lga": "Eastern-Obolo",
            "stateId": 3
        },
        {
            "lga": "Eket",
            "stateId": 3
        },
        {
            "lga": "Esit-Eket",
            "stateId": 3
        },
        {
            "lga": "Essien-Udim",
            "stateId": 3
        },
        {
            "lga": "Etim-Ekpo",
            "stateId": 3
        },
        {
            "lga": "Etinan",
            "stateId": 3
        },
        {
            "lga": "Ibeno",
            "stateId": 3
        },
        {
            "lga": "Ibesikpo-Asutan",
            "stateId": 3
        },
        {
            "lga": "Ibiono-Ibom",
            "stateId": 3
        },
        {
            "lga": "Ika",
            "stateId": 3
        },
        {
            "lga": "Ikono",
            "stateId": 3
        },
        {
            "lga": "Ikot-Abasi",
            "stateId": 3
        },
        {
            "lga": "Ikot-Ekpene",
            "stateId": 3
        },
        {
            "lga": "Ini",
            "stateId": 3
        },
        {
            "lga": "Itu",
            "stateId": 3
        },
        {
            "lga": "Mbo",
            "stateId": 3
        },
        {
            "lga": "Mkpat-Enin",
            "stateId": 3
        },
        {
            "lga": "Nsit-Atai",
            "stateId": 3
        },
        {
            "lga": "Nsit-Ibom",
            "stateId": 3
        },
        {
            "lga": "Nsit-Ubium",
            "stateId": 3
        },
        {
            "lga": "Obot-Akara",
            "stateId": 3
        },
        {
            "lga": "Okobo",
            "stateId": 3
        },
        {
            "lga": "Onna",
            "stateId": 3
        },
        {
            "lga": "Oron",
            "stateId": 3
        },
        {
            "lga": "Oruk Anam",
            "stateId": 3
        },
        {
            "lga": "Udung-Uko",
            "stateId": 3
        },
        {
            "lga": "Ukanafun",
            "stateId": 3
        },
        {
            "lga": "Urue-Offong/Oruko",
            "stateId": 3
        },
        {
            "lga": "Uruan",
            "stateId": 3
        },
        {
            "lga": "Uyo",
            "stateId": 3
        },
        {
            "lga": "Aguata",
            "stateId": 4
        },
        {
            "lga": "Anambra East",
            "stateId": 4
        },
        {
            "lga": "Anambra West",
            "stateId": 4
        },
        {
            "lga": "Anaocha",
            "stateId": 4
        },
        {
            "lga": "Awka North",
            "stateId": 4
        },
        {
            "lga": "Awka South",
            "stateId": 4
        },
        {
            "lga": "Ayamelum",
            "stateId": 4
        },
        {
            "lga": "Dunukofia",
            "stateId": 4
        },
        {
            "lga": "Ekwusigo",
            "stateId": 4
        },
        {
            "lga": "Idemili-North",
            "stateId": 4
        },
        {
            "lga": "Idemili-South",
            "stateId": 4
        },
        {
            "lga": "Ihiala",
            "stateId": 4
        },
        {
            "lga": "Njikoka",
            "stateId": 4
        },
        {
            "lga": "Nnewi-North",
            "stateId": 4
        },
        {
            "lga": "Nnewi-South",
            "stateId": 4
        },
        {
            "lga": "Ogbaru",
            "stateId": 4
        },
        {
            "lga": "Onitsha-North",
            "stateId": 4
        },
        {
            "lga": "Onitsha-South",
            "stateId": 4
        },
        {
            "lga": "Orumba-North",
            "stateId": 4
        },
        {
            "lga": "Orumba-South",
            "stateId": 4
        },
        {
            "lga": "Alkaleri",
            "stateId": 5
        },
        {
            "lga": "Bauchi",
            "stateId": 5
        },
        {
            "lga": "Bogoro",
            "stateId": 5
        },
        {
            "lga": "Damban",
            "stateId": 5
        },
        {
            "lga": "Darazo",
            "stateId": 5
        },
        {
            "lga": "Dass",
            "stateId": 5
        },
        {
            "lga": "Gamawa",
            "stateId": 5
        },
        {
            "lga": "Ganjuwa",
            "stateId": 5
        },
        {
            "lga": "Giade",
            "stateId": 5
        },
        {
            "lga": "Itas-Gadau",
            "stateId": 5
        },
        {
            "lga": "Jama'Are",
            "stateId": 5
        },
        {
            "lga": "Katagum",
            "stateId": 5
        },
        {
            "lga": "Kirfi",
            "stateId": 5
        },
        {
            "lga": "Misau",
            "stateId": 5
        },
        {
            "lga": "Ningi",
            "stateId": 5
        },
        {
            "lga": "Shira",
            "stateId": 5
        },
        {
            "lga": "Tafawa-Balewa",
            "stateId": 5
        },
        {
            "lga": "Toro",
            "stateId": 5
        },
        {
            "lga": "Warji",
            "stateId": 5
        },
        {
            "lga": "Zaki",
            "stateId": 5
        },
        {
            "lga": "Ado",
            "stateId": 6
        },
        {
            "lga": "Agatu",
            "stateId": 6
        },
        {
            "lga": "Apa",
            "stateId": 6
        },
        {
            "lga": "Buruku",
            "stateId": 6
        },
        {
            "lga": "Gboko",
            "stateId": 6
        },
        {
            "lga": "Guma",
            "stateId": 6
        },
        {
            "lga": "Gwer-East",
            "stateId": 6
        },
        {
            "lga": "Gwer-West",
            "stateId": 6
        },
        {
            "lga": "Katsina-Ala",
            "stateId": 6
        },
        {
            "lga": "Konshisha",
            "stateId": 6
        },
        {
            "lga": "Kwande",
            "stateId": 6
        },
        {
            "lga": "Logo",
            "stateId": 6
        },
        {
            "lga": "Makurdi",
            "stateId": 6
        },
        {
            "lga": "Ogbadibo",
            "stateId": 6
        },
        {
            "lga": "Ohimini",
            "stateId": 6
        },
        {
            "lga": "Oju",
            "stateId": 6
        },
        {
            "lga": "Okpokwu",
            "stateId": 6
        },
        {
            "lga": "Otukpo",
            "stateId": 6
        },
        {
            "lga": "Tarka",
            "stateId": 6
        },
        {
            "lga": "Tarka",
            "stateId": 6
        },
        {
            "lga": "Ukum",
            "stateId": 6
        },
        {
            "lga": "Ushongo",
            "stateId": 6
        },
        {
            "lga": "Vandeikya",
            "stateId": 6
        },
        {
            "lga": "Abadam",
            "stateId": 7
        },
        {
            "lga": "Askira-Uba",
            "stateId": 7
        },
        {
            "lga": "Bama",
            "stateId": 7
        },
        {
            "lga": "Bayo",
            "stateId": 7
        },
        {
            "lga": "Biu",
            "stateId": 7
        },
        {
            "lga": "Chibok",
            "stateId": 7
        },
        {
            "lga": "Damboa",
            "stateId": 7
        },
        {
            "lga": "Dikwa",
            "stateId": 7
        },
        {
            "lga": "Gubio",
            "stateId": 7
        },
        {
            "lga": "Guzamala",
            "stateId": 7
        },
        {
            "lga": "Gwoza",
            "stateId": 7
        },
        {
            "lga": "Hawul",
            "stateId": 7
        },
        {
            "lga": "Jere",
            "stateId": 7
        },
        {
            "lga": "Kaga",
            "stateId": 7
        },
        {
            "lga": "Kala-Balge",
            "stateId": 7
        },
        {
            "lga": "Konduga",
            "stateId": 7
        },
        {
            "lga": "Kukawa",
            "stateId": 7
        },
        {
            "lga": "Kwaya-Kusar",
            "stateId": 7
        },
        {
            "lga": "Mafa",
            "stateId": 7
        },
        {
            "lga": "Magumeri",
            "stateId": 7
        },
        {
            "lga": "Maiduguri",
            "stateId": 7
        },
        {
            "lga": "Marte",
            "stateId": 7
        },
        {
            "lga": "Mobbar",
            "stateId": 7
        },
        {
            "lga": "Monguno",
            "stateId": 7
        },
        {
            "lga": "Ngala",
            "stateId": 7
        },
        {
            "lga": "Nganzai",
            "stateId": 7
        },
        {
            "lga": "Shani",
            "stateId": 7
        },
        {
            "lga": "Brass",
            "stateId": 8
        },
        {
            "lga": "Ekeremor",
            "stateId": 8
        },
        {
            "lga": "Kolokuma-Opokuma",
            "stateId": 8
        },
        {
            "lga": "Nembe",
            "stateId": 8
        },
        {
            "lga": "Ogbia",
            "stateId": 8
        },
        {
            "lga": "Sagbama",
            "stateId": 8
        },
        {
            "lga": "Southern-Ijaw",
            "stateId": 8
        },
        {
            "lga": "Abi",
            "stateId": 8
        },
        {
            "lga": "Akamkpa",
            "stateId": 9
        },
        {
            "lga": "Akpabuyo",
            "stateId": 9
        },
        {
            "lga": "Bakassi",
            "stateId": 9
        },
        {
            "lga": "Bekwarra",
            "stateId": 9
        },
        {
            "lga": "Biase",
            "stateId": 9
        },
        {
            "lga": "Boki",
            "stateId": 9
        },
        {
            "lga": "Calabar-Municipal",
            "stateId": 9
        },
        {
            "lga": "Calabar-South",
            "stateId": 9
        },
        {
            "lga": "Etung",
            "stateId": 9
        },
        {
            "lga": "Ikom",
            "stateId": 9
        },
        {
            "lga": "Obanliku",
            "stateId": 9
        },
        {
            "lga": "Obubra",
            "stateId": 9
        },
        {
            "lga": "Obudu",
            "stateId": 9
        },
        {
            "lga": "Odukpani",
            "stateId": 9
        },
        {
            "lga": "Ogoja",
            "stateId": 9
        },
        {
            "lga": "Yakurr",
            "stateId": 9
        },
        {
            "lga": "Yala",
            "stateId": 9
        },
        {
            "lga": "Aniocha North",
            "stateId": 10
        },
        {
            "lga": "Aniocha-North",
            "stateId": 10
        },
        {
            "lga": "Aniocha-South",
            "stateId": 10
        },
        {
            "lga": "Bomadi",
            "stateId": 10
        },
        {
            "lga": "Burutu",
            "stateId": 10
        },
        {
            "lga": "Ethiope-East",
            "stateId": 10
        },
        {
            "lga": "Ethiope-West",
            "stateId": 10
        },
        {
            "lga": "Ika-North-East",
            "stateId": 10
        },
        {
            "lga": "Ika-South",
            "stateId": 10
        },
        {
            "lga": "Isoko-North",
            "stateId": 10
        },
        {
            "lga": "Isoko-South",
            "stateId": 10
        },
        {
            "lga": "Ndokwa-East",
            "stateId": 10
        },
        {
            "lga": "Ndokwa-West",
            "stateId": 10
        },
        {
            "lga": "Okpe",
            "stateId": 10
        },
        {
            "lga": "Oshimili-North",
            "stateId": 10
        },
        {
            "lga": "Oshimili-South",
            "stateId": 10
        },
        {
            "lga": "Patani",
            "stateId": 10
        },
        {
            "lga": "Sapele",
            "stateId": 10
        },
        {
            "lga": "Udu",
            "stateId": 10
        },
        {
            "lga": "Ughelli-North",
            "stateId": 10
        },
        {
            "lga": "Ughelli-South",
            "stateId": 10
        },
        {
            "lga": "Ukwuani",
            "stateId": 10
        },
        {
            "lga": "Uvwie",
            "stateId": 10
        },
        {
            "lga": "Warri South-West",
            "stateId": 10
        },
        {
            "lga": "Warri North",
            "stateId": 10
        },
        {
            "lga": "Warri South",
            "stateId": 10
        },
        {
            "lga": "Abakaliki",
            "stateId": 11
        },
        {
            "lga": "Afikpo-North",
            "stateId": 11
        },
        {
            "lga": "Afikpo South (Edda)",
            "stateId": 11
        },
        {
            "lga": "Ebonyi",
            "stateId": 11
        },
        {
            "lga": "Ezza-North",
            "stateId": 11
        },
        {
            "lga": "Ezza-South",
            "stateId": 11
        },
        {
            "lga": "Ikwo",
            "stateId": 11
        },
        {
            "lga": "Ishielu",
            "stateId": 11
        },
        {
            "lga": "Ivo",
            "stateId": 11
        },
        {
            "lga": "Izzi",
            "stateId": 11
        },
        {
            "lga": "Ohaukwu",
            "stateId": 11
        },
        {
            "lga": "Onicha",
            "stateId": 11
        },
        {
            "lga": "Akoko Edo",
            "stateId": 12
        },
        {
            "lga": "Egor",
            "stateId": 12
        },
        {
            "lga": "Esan-Central",
            "stateId": 12
        },
        {
            "lga": "Esan-North-East",
            "stateId": 12
        },
        {
            "lga": "Esan-South-East",
            "stateId": 12
        },
        {
            "lga": "Esan-West",
            "stateId": 12
        },
        {
            "lga": "Etsako-Central",
            "stateId": 12
        },
        {
            "lga": "Etsako-East",
            "stateId": 12
        },
        {
            "lga": "Etsako-West",
            "stateId": 12
        },
        {
            "lga": "Igueben",
            "stateId": 12
        },
        {
            "lga": "Ikpoba-Okha",
            "stateId": 12
        },
        {
            "lga": "Oredo",
            "stateId": 12
        },
        {
            "lga": "Orhionmwon",
            "stateId": 12
        },
        {
            "lga": "Ovia-North-East",
            "stateId": 12
        },
        {
            "lga": "Ovia-South-West",
            "stateId": 12
        },
        {
            "lga": "Owan East",
            "stateId": 12
        },
        {
            "lga": "Owan-West",
            "stateId": 12
        },
        {
            "lga": "Uhunmwonde",
            "stateId": 12
        },
        {
            "lga": "Ado-Ekiti",
            "stateId": 13
        },
        {
            "lga": "Efon",
            "stateId": 13
        },
        {
            "lga": "Ekiti-East",
            "stateId": 13
        },
        {
            "lga": "Ekiti-South-West",
            "stateId": 13
        },
        {
            "lga": "Ekiti-West",
            "stateId": 13
        },
        {
            "lga": "Emure",
            "stateId": 13
        },
        {
            "lga": "Gbonyin",
            "stateId": 13
        },
        {
            "lga": "Ido-Osi",
            "stateId": 13
        },
        {
            "lga": "Ijero",
            "stateId": 13
        },
        {
            "lga": "Ikere",
            "stateId": 13
        },
        {
            "lga": "Ikole",
            "stateId": 13
        },
        {
            "lga": "Ilejemeje",
            "stateId": 13
        },
        {
            "lga": "Irepodun-Ifelodun",
            "stateId": 13
        },
        {
            "lga": "Ise-Orun",
            "stateId": 13
        },
        {
            "lga": "Moba",
            "stateId": 13
        },
        {
            "lga": "Oye",
            "stateId": 13
        },
        {
            "lga": "Aninri",
            "stateId": 14
        },
        {
            "lga": "Awgu",
            "stateId": 14
        },
        {
            "lga": "Enugu-East",
            "stateId": 14
        },
        {
            "lga": "Enugu-North",
            "stateId": 14
        },
        {
            "lga": "Enugu-South",
            "stateId": 14
        },
        {
            "lga": "Ezeagu",
            "stateId": 14
        },
        {
            "lga": "Igbo-Etiti",
            "stateId": 14
        },
        {
            "lga": "Igbo-Eze-North",
            "stateId": 14
        },
        {
            "lga": "Igbo-Eze-South",
            "stateId": 14
        },
        {
            "lga": "Isi-Uzo",
            "stateId": 14
        },
        {
            "lga": "Nkanu-East",
            "stateId": 14
        },
        {
            "lga": "Nkanu-West",
            "stateId": 14
        },
        {
            "lga": "Nsukka",
            "stateId": 14
        },
        {
            "lga": "Oji-River",
            "stateId": 14
        },
        {
            "lga": "Udenu",
            "stateId": 14
        },
        {
            "lga": "Udi",
            "stateId": 14
        },
        {
            "lga": "Uzo-Uwani",
            "stateId": 14
        },
        {
            "lga": "Abuja",
            "stateId": 15
        },
        {
            "lga": "Kwali",
            "stateId": 15
        },
        {
            "lga": "Kuje",
            "stateId": 15
        },
        {
            "lga": "Gwagwalada",
            "stateId": 15
        },
        {
            "lga": "Bwari",
            "stateId": 15
        },
        {
            "lga": "Abaji",
            "stateId": 15
        },
        {
            "lga": "Abaji",
            "stateId": 16
        },
        {
            "lga": "Akko",
            "stateId": 16
        },
        {
            "lga": "Balanga",
            "stateId": 16
        },
        {
            "lga": "Billiri",
            "stateId": 16
        },
        {
            "lga": "Dukku",
            "stateId": 16
        },
        {
            "lga": "Funakaye",
            "stateId": 16
        },
        {
            "lga": "Gombe",
            "stateId": 16
        },
        {
            "lga": "Kaltungo",
            "stateId": 16
        },
        {
            "lga": "Kwami",
            "stateId": 16
        },
        {
            "lga": "Nafada",
            "stateId": 16
        },
        {
            "lga": "Shongom",
            "stateId": 16
        },
        {
            "lga": "Yamaltu-Deba",
            "stateId": 16
        },
        {
            "lga": "Aboh-Mbaise",
            "stateId": 17
        },
        {
            "lga": "Ahiazu-Mbaise",
            "stateId": 17
        },
        {
            "lga": "Ehime-Mbano",
            "stateId": 17
        },
        {
            "lga": "Ezinihitte",
            "stateId": 17
        },
        {
            "lga": "Ideato-North",
            "stateId": 17
        },
        {
            "lga": "Ideato-South",
            "stateId": 17
        },
        {
            "lga": "Ihitte-Uboma",
            "stateId": 17
        },
        {
            "lga": "Ikeduru",
            "stateId": 17
        },
        {
            "lga": "Isiala-Mbano",
            "stateId": 17
        },
        {
            "lga": "Isu",
            "stateId": 17
        },
        {
            "lga": "Mbaitoli",
            "stateId": 17
        },
        {
            "lga": "Ngor-Okpala",
            "stateId": 17
        },
        {
            "lga": "Njaba",
            "stateId": 17
        },
        {
            "lga": "Nkwerre",
            "stateId": 17
        },
        {
            "lga": "Nwangele",
            "stateId": 17
        },
        {
            "lga": "Obowo",
            "stateId": 17
        },
        {
            "lga": "Oguta",
            "stateId": 17
        },
        {
            "lga": "Ohaji-Egbema",
            "stateId": 17
        },
        {
            "lga": "Okigwe",
            "stateId": 17
        },
        {
            "lga": "Onuimo",
            "stateId": 17
        },
        {
            "lga": "Orlu",
            "stateId": 17
        },
        {
            "lga": "Orsu",
            "stateId": 17
        },
        {
            "lga": "Oru-East",
            "stateId": 17
        },
        {
            "lga": "Oru-West",
            "stateId": 17
        },
        {
            "lga": "Owerri-Municipal",
            "stateId": 17
        },
        {
            "lga": "Owerri-North",
            "stateId": 17
        },
        {
            "lga": "Owerri-West",
            "stateId": 17
        },
        {
            "lga": "Auyo",
            "stateId": 18
        },
        {
            "lga": "Babura",
            "stateId": 18
        },
        {
            "lga": "Biriniwa",
            "stateId": 18
        },
        {
            "lga": "Birnin-Kudu",
            "stateId": 18
        },
        {
            "lga": "Buji",
            "stateId": 18
        },
        {
            "lga": "Dutse",
            "stateId": 18
        },
        {
            "lga": "Gagarawa",
            "stateId": 18
        },
        {
            "lga": "Garki",
            "stateId": 18
        },
        {
            "lga": "Gumel",
            "stateId": 18
        },
        {
            "lga": "Guri",
            "stateId": 18
        },
        {
            "lga": "Gwaram",
            "stateId": 18
        },
        {
            "lga": "Gwiwa",
            "stateId": 18
        },
        {
            "lga": "Hadejia",
            "stateId": 18
        },
        {
            "lga": "Jahun",
            "stateId": 18
        },
        {
            "lga": "Kafin-Hausa",
            "stateId": 18
        },
        {
            "lga": "Kaugama",
            "stateId": 18
        },
        {
            "lga": "Kazaure",
            "stateId": 18
        },
        {
            "lga": "Kiri kasama",
            "stateId": 18
        },
        {
            "lga": "Maigatari",
            "stateId": 18
        },
        {
            "lga": "Malam Madori",
            "stateId": 18
        },
        {
            "lga": "Miga",
            "stateId": 18
        },
        {
            "lga": "Ringim",
            "stateId": 18
        },
        {
            "lga": "Roni",
            "stateId": 18
        },
        {
            "lga": "Sule-Tankarkar",
            "stateId": 18
        },
        {
            "lga": "Taura",
            "stateId": 18
        },
        {
            "lga": "Yankwashi",
            "stateId": 18
        },
        {
            "lga": "Aleiro",
            "stateId": 19
        },
        {
            "lga": "Arewa-Dandi",
            "stateId": 19
        },
        {
            "lga": "Argungu",
            "stateId": 19
        },
        {
            "lga": "Augie",
            "stateId": 19
        },
        {
            "lga": "Bagudo",
            "stateId": 19
        },
        {
            "lga": "Birnin-Kebbi",
            "stateId": 19
        },
        {
            "lga": "Bunza",
            "stateId": 19
        },
        {
            "lga": "Dandi",
            "stateId": 19
        },
        {
            "lga": "Fakai",
            "stateId": 19
        },
        {
            "lga": "Gwandu",
            "stateId": 19
        },
        {
            "lga": "Jega",
            "stateId": 19
        },
        {
            "lga": "Kalgo",
            "stateId": 19
        },
        {
            "lga": "Koko-Besse",
            "stateId": 19
        },
        {
            "lga": "Maiyama",
            "stateId": 19
        },
        {
            "lga": "Ngaski",
            "stateId": 19
        },
        {
            "lga": "Sakaba",
            "stateId": 19
        },
        {
            "lga": "Shanga",
            "stateId": 19
        },
        {
            "lga": "Suru",
            "stateId": 19
        },
        {
            "lga": "Wasagu/Danko",
            "stateId": 19
        },
        {
            "lga": "Yauri",
            "stateId": 19
        },
        {
            "lga": "Zuru",
            "stateId": 19
        },
        {
            "lga": "Birnin-Gwari",
            "stateId": 20
        },
        {
            "lga": "Chikun",
            "stateId": 20
        },
        {
            "lga": "Giwa",
            "stateId": 20
        },
        {
            "lga": "Igabi",
            "stateId": 20
        },
        {
            "lga": "Ikara",
            "stateId": 20
        },
        {
            "lga": "Jaba",
            "stateId": 20
        },
        {
            "lga": "Jema'A",
            "stateId": 20
        },
        {
            "lga": "Kachia",
            "stateId": 20
        },
        {
            "lga": "Kaduna-North",
            "stateId": 20
        },
        {
            "lga": "Kaduna-South",
            "stateId": 20
        },
        {
            "lga": "Kagarko",
            "stateId": 20
        },
        {
            "lga": "Kajuru",
            "stateId": 20
        },
        {
            "lga": "Kaura",
            "stateId": 20
        },
        {
            "lga": "Kauru",
            "stateId": 20
        },
        {
            "lga": "Kubau",
            "stateId": 20
        },
        {
            "lga": "Kudan",
            "stateId": 20
        },
        {
            "lga": "Lere",
            "stateId": 20
        },
        {
            "lga": "Makarfi",
            "stateId": 20
        },
        {
            "lga": "Sabon-Gari",
            "stateId": 20
        },
        {
            "lga": "Sanga",
            "stateId": 20
        },
        {
            "lga": "Soba",
            "stateId": 20
        },
        {
            "lga": "Zangon-Kataf",
            "stateId": 20
        },
        {
            "lga": "Zaria",
            "stateId": 20
        },
        {
            "lga": "Ajingi",
            "stateId": 21
        },
        {
            "lga": "Albasu",
            "stateId": 21
        },
        {
            "lga": "Bagwai",
            "stateId": 21
        },
        {
            "lga": "Bebeji",
            "stateId": 21
        },
        {
            "lga": "Bichi",
            "stateId": 21
        },
        {
            "lga": "Bunkure",
            "stateId": 21
        },
        {
            "lga": "Dala",
            "stateId": 21
        },
        {
            "lga": "Dambatta",
            "stateId": 21
        },
        {
            "lga": "Dawakin-Kudu",
            "stateId": 21
        },
        {
            "lga": "Dawakin-Tofa",
            "stateId": 21
        },
        {
            "lga": "Doguwa",
            "stateId": 21
        },
        {
            "lga": "Fagge",
            "stateId": 21
        },
        {
            "lga": "Gabasawa",
            "stateId": 21
        },
        {
            "lga": "Garko",
            "stateId": 21
        },
        {
            "lga": "Garun-Mallam",
            "stateId": 21
        },
        {
            "lga": "Gaya",
            "stateId": 21
        },
        {
            "lga": "Gezawa",
            "stateId": 21
        },
        {
            "lga": "Gwale",
            "stateId": 21
        },
        {
            "lga": "Gwarzo",
            "stateId": 21
        },
        {
            "lga": "Kabo",
            "stateId": 21
        },
        {
            "lga": "Kano-Municipal",
            "stateId": 21
        },
        {
            "lga": "Karaye",
            "stateId": 21
        },
        {
            "lga": "Kibiya",
            "stateId": 21
        },
        {
            "lga": "Kiru",
            "stateId": 21
        },
        {
            "lga": "Kumbotso",
            "stateId": 21
        },
        {
            "lga": "Kunchi",
            "stateId": 21
        },
        {
            "lga": "Kura",
            "stateId": 21
        },
        {
            "lga": "Madobi",
            "stateId": 21
        },
        {
            "lga": "Makoda",
            "stateId": 21
        },
        {
            "lga": "Minjibir",
            "stateId": 21
        },
        {
            "lga": "Nasarawa",
            "stateId": 21
        },
        {
            "lga": "Rano",
            "stateId": 21
        },
        {
            "lga": "Rimin-Gado",
            "stateId": 21
        },
        {
            "lga": "Rogo",
            "stateId": 21
        },
        {
            "lga": "Shanono",
            "stateId": 21
        },
        {
            "lga": "Sumaila",
            "stateId": 21
        },
        {
            "lga": "Takai",
            "stateId": 21
        },
        {
            "lga": "Tarauni",
            "stateId": 21
        },
        {
            "lga": "Tofa",
            "stateId": 21
        },
        {
            "lga": "Tsanyawa",
            "stateId": 21
        },
        {
            "lga": "Tudun-Wada",
            "stateId": 21
        },
        {
            "lga": "Ungogo",
            "stateId": 21
        },
        {
            "lga": "Warawa",
            "stateId": 21
        },
        {
            "lga": "Wudil",
            "stateId": 21
        },
        {
            "lga": "Adavi",
            "stateId": 22
        },
        {
            "lga": "Ajaokuta",
            "stateId": 22
        },
        {
            "lga": "Ankpa",
            "stateId": 22
        },
        {
            "lga": "Dekina",
            "stateId": 22
        },
        {
            "lga": "Ibaji",
            "stateId": 22
        },
        {
            "lga": "Idah",
            "stateId": 22
        },
        {
            "lga": "Igalamela-Odolu",
            "stateId": 22
        },
        {
            "lga": "Ijumu",
            "stateId": 22
        },
        {
            "lga": "Kabba-Bunu",
            "stateId": 22
        },
        {
            "lga": "Kogi",
            "stateId": 22
        },
        {
            "lga": "Lokoja",
            "stateId": 22
        },
        {
            "lga": "Mopa-Muro",
            "stateId": 22
        },
        {
            "lga": "Ofu",
            "stateId": 22
        },
        {
            "lga": "Ogori-Magongo",
            "stateId": 22
        },
        {
            "lga": "Okehi",
            "stateId": 22
        },
        {
            "lga": "Okene",
            "stateId": 22
        },
        {
            "lga": "Olamaboro",
            "stateId": 22
        },
        {
            "lga": "Omala",
            "stateId": 22
        },
        {
            "lga": "Oyi",
            "stateId": 22
        },
        {
            "lga": "Yagba-East",
            "stateId": 22
        },
        {
            "lga": "Yagba-West",
            "stateId": 22
        },
        {
            "lga": "Bakori",
            "stateId": 23
        },
        {
            "lga": "Batagarawa",
            "stateId": 23
        },
        {
            "lga": "Batsari",
            "stateId": 23
        },
        {
            "lga": "Baure",
            "stateId": 23
        },
        {
            "lga": "Bindawa",
            "stateId": 23
        },
        {
            "lga": "Charanchi",
            "stateId": 23
        },
        {
            "lga": "Dan-Musa",
            "stateId": 23
        },
        {
            "lga": "Dandume",
            "stateId": 23
        },
        {
            "lga": "Danja",
            "stateId": 23
        },
        {
            "lga": "Daura",
            "stateId": 23
        },
        {
            "lga": "Dutsin-Ma",
            "stateId": 23
        },
        {
            "lga": "Faskari",
            "stateId": 23
        },
        {
            "lga": "Funtua",
            "stateId": 23
        },
        {
            "lga": "Ingawa",
            "stateId": 23
        },
        {
            "lga": "Jibia",
            "stateId": 23
        },
        {
            "lga": "Kafur",
            "stateId": 23
        },
        {
            "lga": "Kaita",
            "stateId": 23
        },
        {
            "lga": "Kankara",
            "stateId": 23
        },
        {
            "lga": "Kankia",
            "stateId": 23
        },
        {
            "lga": "Katsina",
            "stateId": 23
        },
        {
            "lga": "Kurfi",
            "stateId": 23
        },
        {
            "lga": "Kusada",
            "stateId": 23
        },
        {
            "lga": "Mai-Adua",
            "stateId": 23
        },
        {
            "lga": "Malumfashi",
            "stateId": 23
        },
        {
            "lga": "Mani",
            "stateId": 23
        },
        {
            "lga": "Mashi",
            "stateId": 23
        },
        {
            "lga": "Matazu",
            "stateId": 23
        },
        {
            "lga": "Musawa",
            "stateId": 23
        },
        {
            "lga": "Rimi",
            "stateId": 23
        },
        {
            "lga": "Sabuwa",
            "stateId": 23
        },
        {
            "lga": "Safana",
            "stateId": 23
        },
        {
            "lga": "Sandamu",
            "stateId": 23
        },
        {
            "lga": "Zango",
            "stateId": 23
        },
        {
            "lga": "Asa",
            "stateId": 24
        },
        {
            "lga": "Baruten",
            "stateId": 24
        },
        {
            "lga": "Edu",
            "stateId": 24
        },
        {
            "lga": "Ekiti (Araromi/Opin)",
            "stateId": 24
        },
        {
            "lga": "Ilorin-East",
            "stateId": 24
        },
        {
            "lga": "Ilorin-South",
            "stateId": 24
        },
        {
            "lga": "Ilorin-West",
            "stateId": 24
        },
        {
            "lga": "Isin",
            "stateId": 24
        },
        {
            "lga": "Kaiama",
            "stateId": 24
        },
        {
            "lga": "Moro",
            "stateId": 24
        },
        {
            "lga": "Offa",
            "stateId": 24
        },
        {
            "lga": "Oke-Ero",
            "stateId": 24
        },
        {
            "lga": "Oyun",
            "stateId": 24
        },
        {
            "lga": "Pategi",
            "stateId": 24
        },
        {
            "lga": "Agege",
            "stateId": 25
        },
        {
            "lga": "Ajeromi-Ifelodun",
            "stateId": 25
        },
        {
            "lga": "Alimosho",
            "stateId": 25
        },
        {
            "lga": "Amuwo-Odofin",
            "stateId": 25
        },
        {
            "lga": "Apapa",
            "stateId": 25
        },
        {
            "lga": "Badagry",
            "stateId": 25
        },
        {
            "lga": "Epe",
            "stateId": 25
        },
        {
            "lga": "Eti-Osa",
            "stateId": 25
        },
        {
            "lga": "Ibeju-Lekki",
            "stateId": 25
        },
        {
            "lga": "Ifako-Ijaiye",
            "stateId": 25
        },
        {
            "lga": "Ikeja",
            "stateId": 25
        },
        {
            "lga": "Ikorodu",
            "stateId": 25
        },
        {
            "lga": "Kosofe",
            "stateId": 25
        },
        {
            "lga": "Lagos-Island",
            "stateId": 25
        },
        {
            "lga": "Lagos-Mainland",
            "stateId": 25
        },
        {
            "lga": "Mushin",
            "stateId": 25
        },
        {
            "lga": "Ojo",
            "stateId": 25
        },
        {
            "lga": "Oshodi-Isolo",
            "stateId": 25
        },
        {
            "lga": "Shomolu",
            "stateId": 25
        },
        {
            "lga": "Surulere",
            "stateId": 25
        },
        {
            "lga": "Yewa-South",
            "stateId": 25
        },
        {
            "lga": "Akwanga",
            "stateId": 26
        },
        {
            "lga": "Awe",
            "stateId": 26
        },
        {
            "lga": "Doma",
            "stateId": 26
        },
        {
            "lga": "Karu",
            "stateId": 26
        },
        {
            "lga": "Keana",
            "stateId": 26
        },
        {
            "lga": "Keffi",
            "stateId": 26
        },
        {
            "lga": "Kokona",
            "stateId": 26
        },
        {
            "lga": "Lafia",
            "stateId": 26
        },
        {
            "lga": "Nasarawa",
            "stateId": 26
        },
        {
            "lga": "Nasarawa-Eggon",
            "stateId": 26
        },
        {
            "lga": "Obi",
            "stateId": 26
        },
        {
            "lga": "Wamba",
            "stateId": 26
        },
        {
            "lga": "Toto",
            "stateId": 26
        },
        {
            "lga": "Agaie",
            "stateId": 27
        },
        {
            "lga": "Agwara",
            "stateId": 27
        },
        {
            "lga": "Bida",
            "stateId": 27
        },
        {
            "lga": "Borgu",
            "stateId": 27
        },
        {
            "lga": "Bosso",
            "stateId": 27
        },
        {
            "lga": "Chanchaga",
            "stateId": 27
        },
        {
            "lga": "Edati",
            "stateId": 27
        },
        {
            "lga": "Gbako",
            "stateId": 27
        },
        {
            "lga": "Gurara",
            "stateId": 27
        },
        {
            "lga": "Katcha",
            "stateId": 27
        },
        {
            "lga": "Kontagora",
            "stateId": 27
        },
        {
            "lga": "Lapai",
            "stateId": 27
        },
        {
            "lga": "Lavun",
            "stateId": 27
        },
        {
            "lga": "Magama",
            "stateId": 27
        },
        {
            "lga": "Mariga",
            "stateId": 27
        },
        {
            "lga": "Mashegu",
            "stateId": 27
        },
        {
            "lga": "Mokwa",
            "stateId": 27
        },
        {
            "lga": "Moya",
            "stateId": 27
        },
        {
            "lga": "Paikoro",
            "stateId": 27
        },
        {
            "lga": "Rafi",
            "stateId": 27
        },
        {
            "lga": "Rijau",
            "stateId": 27
        },
        {
            "lga": "Shiroro",
            "stateId": 27
        },
        {
            "lga": "Suleja",
            "stateId": 27
        },
        {
            "lga": "Tafa",
            "stateId": 27
        },
        {
            "lga": "Wushishi",
            "stateId": 27
        },
        {
            "lga": "Abeokuta-North",
            "stateId": 28
        },
        {
            "lga": "Abeokuta-South",
            "stateId": 28
        },
        {
            "lga": "Ado-Odo-Ota",
            "stateId": 28
        },
        {
            "lga": "Ewekoro",
            "stateId": 28
        },
        {
            "lga": "Ifo",
            "stateId": 28
        },
        {
            "lga": "Ijebu-East",
            "stateId": 28
        },
        {
            "lga": "Ijebu-North",
            "stateId": 28
        },
        {
            "lga": "Ijebu-North-East",
            "stateId": 28
        },
        {
            "lga": "Ijebu-Ode",
            "stateId": 28
        },
        {
            "lga": "Ikenne",
            "stateId": 28
        },
        {
            "lga": "Imeko-Afon",
            "stateId": 28
        },
        {
            "lga": "Ipokia",
            "stateId": 28
        },
        {
            "lga": "Obafemi-Owode",
            "stateId": 28
        },
        {
            "lga": "Odeda",
            "stateId": 28
        },
        {
            "lga": "Odogbolu",
            "stateId": 28
        },
        {
            "lga": "Ogun-Waterside",
            "stateId": 28
        },
        {
            "lga": "Remo-North",
            "stateId": 28
        },
        {
            "lga": "Shagamu",
            "stateId": 28
        },
        {
            "lga": "Yewa North",
            "stateId": 28
        },
        {
            "lga": "Akoko North-East",
            "stateId": 29
        },
        {
            "lga": "Akoko North-West",
            "stateId": 29
        },
        {
            "lga": "Akoko South-West",
            "stateId": 29
        },
        {
            "lga": "Akoko South-East",
            "stateId": 29
        },
        {
            "lga": "Akure-North",
            "stateId": 29
        },
        {
            "lga": "Akure-South",
            "stateId": 29
        },
        {
            "lga": "Ese-Odo",
            "stateId": 29
        },
        {
            "lga": "Idanre",
            "stateId": 29
        },
        {
            "lga": "Ifedore",
            "stateId": 29
        },
        {
            "lga": "Ilaje",
            "stateId": 29
        },
        {
            "lga": "Ile-Oluji-Okeigbo",
            "stateId": 29
        },
        {
            "lga": "Irele",
            "stateId": 29
        },
        {
            "lga": "Odigbo",
            "stateId": 29
        },
        {
            "lga": "Okitipupa",
            "stateId": 29
        },
        {
            "lga": "Ondo West",
            "stateId": 29
        },
        {
            "lga": "Ondo-East",
            "stateId": 29
        },
        {
            "lga": "Ose",
            "stateId": 29
        },
        {
            "lga": "Owo",
            "stateId": 29
        },
        {
            "lga": "Atakumosa West",
            "stateId": 30
        },
        {
            "lga": "Atakumosa East",
            "stateId": 30
        },
        {
            "lga": "Ayedaade",
            "stateId": 30
        },
        {
            "lga": "Ayedire",
            "stateId": 30
        },
        {
            "lga": "Boluwaduro",
            "stateId": 30
        },
        {
            "lga": "Boripe",
            "stateId": 30
        },
        {
            "lga": "Ede South",
            "stateId": 30
        },
        {
            "lga": "Ede North",
            "stateId": 30
        },
        {
            "lga": "Egbedore",
            "stateId": 30
        },
        {
            "lga": "Ejigbo",
            "stateId": 30
        },
        {
            "lga": "Ife North",
            "stateId": 30
        },
        {
            "lga": "Ife South",
            "stateId": 30
        },
        {
            "lga": "Ife-Central",
            "stateId": 30
        },
        {
            "lga": "Ife-East",
            "stateId": 30
        },
        {
            "lga": "Ifelodun",
            "stateId": 30
        },
        {
            "lga": "Ila",
            "stateId": 30
        },
        {
            "lga": "Ilesa-East",
            "stateId": 30
        },
        {
            "lga": "Ilesa-West",
            "stateId": 30
        },
        {
            "lga": "Irepodun",
            "stateId": 30
        },
        {
            "lga": "Irewole",
            "stateId": 30
        },
        {
            "lga": "Isokan",
            "stateId": 30
        },
        {
            "lga": "Iwo",
            "stateId": 30
        },
        {
            "lga": "Obokun",
            "stateId": 30
        },
        {
            "lga": "Odo-Otin",
            "stateId": 30
        },
        {
            "lga": "Ola Oluwa",
            "stateId": 30
        },
        {
            "lga": "Olorunda",
            "stateId": 30
        },
        {
            "lga": "Oriade",
            "stateId": 30
        },
        {
            "lga": "Orolu",
            "stateId": 30
        },
        {
            "lga": "Osogbo",
            "stateId": 30
        },
        {
            "lga": "Afijio",
            "stateId": 31
        },
        {
            "lga": "Akinyele",
            "stateId": 31
        },
        {
            "lga": "Atiba",
            "stateId": 31
        },
        {
            "lga": "Atisbo",
            "stateId": 31
        },
        {
            "lga": "Egbeda",
            "stateId": 31
        },
        {
            "lga": "Ibadan North",
            "stateId": 31
        },
        {
            "lga": "Ibadan North-East",
            "stateId": 31
        },
        {
            "lga": "Ibadan North-West",
            "stateId": 31
        },
        {
            "lga": "Ibadan South-East",
            "stateId": 31
        },
        {
            "lga": "Ibadan South-West",
            "stateId": 31
        },
        {
            "lga": "Ibarapa-Central",
            "stateId": 31
        },
        {
            "lga": "Ibarapa-East",
            "stateId": 31
        },
        {
            "lga": "Ibarapa-North",
            "stateId": 31
        },
        {
            "lga": "Ido",
            "stateId": 31
        },
        {
            "lga": "Ifedayo",
            "stateId": 31
        },
        {
            "lga": "Irepo",
            "stateId": 31
        },
        {
            "lga": "Iseyin",
            "stateId": 31
        },
        {
            "lga": "Itesiwaju",
            "stateId": 31
        },
        {
            "lga": "Iwajowa",
            "stateId": 31
        },
        {
            "lga": "Kajola",
            "stateId": 31
        },
        {
            "lga": "Lagelu",
            "stateId": 31
        },
        {
            "lga": "Ogo-Oluwa",
            "stateId": 31
        },
        {
            "lga": "Ogbomosho-North",
            "stateId": 31
        },
        {
            "lga": "Ogbomosho-South",
            "stateId": 31
        },
        {
            "lga": "Olorunsogo",
            "stateId": 31
        },
        {
            "lga": "Oluyole",
            "stateId": 31
        },
        {
            "lga": "Ona-Ara",
            "stateId": 31
        },
        {
            "lga": "Orelope",
            "stateId": 31
        },
        {
            "lga": "Ori-Ire",
            "stateId": 31
        },
        {
            "lga": "Oyo-West",
            "stateId": 31
        },
        {
            "lga": "Oyo-East",
            "stateId": 31
        },
        {
            "lga": "Saki-East",
            "stateId": 31
        },
        {
            "lga": "Surulere",
            "stateId": 31
        },
        {
            "lga": "Barkin-Ladi",
            "stateId": 32
        },
        {
            "lga": "Bassa",
            "stateId": 32
        },
        {
            "lga": "Bokkos",
            "stateId": 32
        },
        {
            "lga": "Jos-East",
            "stateId": 32
        },
        {
            "lga": "Jos-North",
            "stateId": 32
        },
        {
            "lga": "Jos-South",
            "stateId": 32
        },
        {
            "lga": "Kanam",
            "stateId": 32
        },
        {
            "lga": "Kanke",
            "stateId": 32
        },
        {
            "lga": "Langtang-North",
            "stateId": 32
        },
        {
            "lga": "Langtang-South",
            "stateId": 32
        },
        {
            "lga": "Mangu",
            "stateId": 32
        },
        {
            "lga": "Mikang",
            "stateId": 32
        },
        {
            "lga": "Pankshin",
            "stateId": 32
        },
        {
            "lga": "Qua'an Pan",
            "stateId": 32
        },
        {
            "lga": "Riyom",
            "stateId": 32
        },
        {
            "lga": "Shendam",
            "stateId": 32
        },
        {
            "lga": "Wase",
            "stateId": 32
        },
        {
            "lga": "Abua-Odual",
            "stateId": 33
        },
        {
            "lga": "Ahoada-East",
            "stateId": 33
        },
        {
            "lga": "Ahoada-West",
            "stateId": 33
        },
        {
            "lga": "Akuku Toru",
            "stateId": 33
        },
        {
            "lga": "Andoni",
            "stateId": 33
        },
        {
            "lga": "Asari-Toru",
            "stateId": 33
        },
        {
            "lga": "Bonny",
            "stateId": 33
        },
        {
            "lga": "Degema",
            "stateId": 33
        },
        {
            "lga": "Eleme",
            "stateId": 33
        },
        {
            "lga": "Emuoha",
            "stateId": 33
        },
        {
            "lga": "Etche",
            "stateId": 33
        },
        {
            "lga": "Gokana",
            "stateId": 33
        },
        {
            "lga": "Ikwerre",
            "stateId": 33
        },
        {
            "lga": "Khana",
            "stateId": 33
        },
        {
            "lga": "Obio-Akpor",
            "stateId": 33
        },
        {
            "lga": "Ogba-Egbema-Ndoni",
            "stateId": 33
        },
        {
            "lga": "Ogba-Egbema-Ndoni",
            "stateId": 33
        },
        {
            "lga": "Ogu-Bolo",
            "stateId": 33
        },
        {
            "lga": "Okrika",
            "stateId": 33
        },
        {
            "lga": "Oyigbo",
            "stateId": 33
        },
        {
            "lga": "Opobo-Nkoro",
            "stateId": 33
        },
        {
            "lga": "Omuma",
            "stateId": 33
        },
        {
            "lga": "Port-Harcourt",
            "stateId": 33
        },
        {
            "lga": "Tai",
            "stateId": 33
        },
        {
            "lga": "Binji",
            "stateId": 34
        },
        {
            "lga": "Bodinga",
            "stateId": 34
        },
        {
            "lga": "Dange-Shuni",
            "stateId": 34
        },
        {
            "lga": "Gada",
            "stateId": 34
        },
        {
            "lga": "Goronyo",
            "stateId": 34
        },
        {
            "lga": "Gudu",
            "stateId": 34
        },
        {
            "lga": "Gwadabawa",
            "stateId": 34
        },
        {
            "lga": "Illela",
            "stateId": 34
        },
        {
            "lga": "Kebbe",
            "stateId": 34
        },
        {
            "lga": "Kware",
            "stateId": 34
        },
        {
            "lga": "Rabah",
            "stateId": 34
        },
        {
            "lga": "Sabon Birni",
            "stateId": 34
        },
        {
            "lga": "Shagari",
            "stateId": 34
        },
        {
            "lga": "Silame",
            "stateId": 34
        },
        {
            "lga": "Sokoto-North",
            "stateId": 34
        },
        {
            "lga": "Sokoto-South",
            "stateId": 34
        },
        {
            "lga": "Tambuwal",
            "stateId": 34
        },
        {
            "lga": "Tangaza",
            "stateId": 34
        },
        {
            "lga": "Tureta",
            "stateId": 34
        },
        {
            "lga": "Wamako",
            "stateId": 34
        },
        {
            "lga": "Wurno",
            "stateId": 34
        },
        {
            "lga": "Yabo",
            "stateId": 34
        },
        {
            "lga": "Ardo-Kola",
            "stateId": 35
        },
        {
            "lga": "Bali",
            "stateId": 35
        },
        {
            "lga": "Donga",
            "stateId": 35
        },
        {
            "lga": "Gashaka",
            "stateId": 35
        },
        {
            "lga": "Gassol",
            "stateId": 35
        },
        {
            "lga": "Ibi",
            "stateId": 35
        },
        {
            "lga": "Jalingo",
            "stateId": 35
        },
        {
            "lga": "Karim-Lamido",
            "stateId": 35
        },
        {
            "lga": "Kurmi",
            "stateId": 35
        },
        {
            "lga": "Lau",
            "stateId": 35
        },
        {
            "lga": "Sardauna",
            "stateId": 35
        },
        {
            "lga": "Takum",
            "stateId": 35
        },
        {
            "lga": "Ussa",
            "stateId": 35
        },
        {
            "lga": "Wukari",
            "stateId": 35
        },
        {
            "lga": "Yorro",
            "stateId": 35
        },
        {
            "lga": "Zing",
            "stateId": 35
        },
        {
            "lga": "Bade",
            "stateId": 36
        },
        {
            "lga": "Bursari",
            "stateId": 36
        },
        {
            "lga": "Damaturu",
            "stateId": 36
        },
        {
            "lga": "Fika",
            "stateId": 36
        },
        {
            "lga": "Fune",
            "stateId": 36
        },
        {
            "lga": "Geidam",
            "stateId": 36
        },
        {
            "lga": "Gujba",
            "stateId": 36
        },
        {
            "lga": "Gulani",
            "stateId": 36
        },
        {
            "lga": "Jakusko",
            "stateId": 36
        },
        {
            "lga": "Karasuwa",
            "stateId": 36
        },
        {
            "lga": "Machina",
            "stateId": 36
        },
        {
            "lga": "Nangere",
            "stateId": 36
        },
        {
            "lga": "Nguru",
            "stateId": 36
        },
        {
            "lga": "Potiskum",
            "stateId": 36
        },
        {
            "lga": "Tarmuwa",
            "stateId": 36
        },
        {
            "lga": "Yunusari",
            "stateId": 36
        },
        {
            "lga": "Yusufari",
            "stateId": 36
        },
        {
            "lga": "Anka",
            "stateId": 37
        },
        {
            "lga": "Birnin Magaji/Kiyaw",
            "stateId": 37
        },
        {
            "lga": "Gummi",
            "stateId": 37
        },
        {
            "lga": "Gusau",
            "stateId": 37
        },
        {
            "lga": "Bukkuyum",
            "stateId": 37
        },
        {
            "lga": "Isa",
            "stateId": 37
        },
        {
            "lga": "Kaura-Namoda",
            "stateId": 37
        },
        {
            "lga": "Kiyawa",
            "stateId": 37
        },
        {
            "lga": "Maradun",
            "stateId": 37
        },
        {
            "lga": "Shinkafi",
            "stateId": 37
        },
        {
            "lga": "Talata-Mafara",
            "stateId": 37
        },
        {
            "lga": "Tsafe",
            "stateId": 37
        },
        {
            "lga": "Zurmi",
            "stateId": 37
        }
    ]
    )
  },

  async down(db, client) {
   
    await db.collection('StateLgas').deleteMany({});
  }
};
