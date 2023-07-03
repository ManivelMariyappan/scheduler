//Interface details
export interface AppointmentInterface {
    appointmentID: number,
    patientId: number,
    patientName: string,
    description: string,
    startDate: Date,
    endDate: Date,
    chairId: number,
    appType: number[],
}

export interface chairDataInterface {
    text: string;
    id: number;
}

export interface AppColors {
    text: string,
    id: number,
    color: string,
}


//Data
export const appColors: AppColors[] = [
    {
        text: 'Samantha Bright',
        id: 1,
        color: '#cb6bb2',
    }, {
        text: 'John Heart',
        id: 2,
        color: '#56ca85',
    }, {
        text: 'Todd Hoffman',
        id: 3,
        color: '#1e90ff',
    }, {
        text: 'Sandra Johnson',
        id: 4,
        color: '#ff9747',
    },
];

export const appointments: AppointmentInterface[] = [
    {
        "appointmentID": 1,
        "patientId": 634,
        "patientName": "Pauletta Gerhts",
        "description": "pgerhts0@soundcloud.com",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 1,
        "appType": [
            3
        ],
    },
    {
        "appointmentID": 2,
        "patientId": 978,
        "patientName": "Keene Portman",
        "description": "kportman1@indiatimes.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 3,
        "patientId": 327,
        "patientName": "Taddeusz Perigo",
        "description": "tperigo2@vistaprint.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 1,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 4,
        "patientId": 239,
        "patientName": "Smith Leward",
        "description": "sleward3@meetup.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 5,
        "patientId": 269,
        "patientName": "Federica Adriano",
        "description": "fadriano4@house.gov",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 1,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 6,
        "patientId": 700,
        "patientName": "Derrik Moysey",
        "description": "dmoysey5@blogger.com",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 1,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 7,
        "patientId": 50,
        "patientName": "Malachi Arnely",
        "description": "marnely6@pagesperso-orange.fr",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 1,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 8,
        "patientId": 64,
        "patientName": "Homer Scrimgeour",
        "description": "hscrimgeour7@berkeley.edu",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 9,
        "patientId": 28,
        "patientName": "Rebecka Heppner",
        "description": "rheppner8@berkeley.edu",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 1,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 10,
        "patientId": 0,
        "patientName": "Reinold Theaker",
        "description": "rtheaker9@flickr.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 11,
        "patientId": 895,
        "patientName": "Tucky Stubbings",
        "description": "tstubbingsa@dailymotion.com",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 1,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 12,
        "patientId": 225,
        "patientName": "Berky Oran",
        "description": "boranb@msn.com",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 1,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 13,
        "patientId": 971,
        "patientName": "Darbee Gentsch",
        "description": "dgentschc@walmart.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 14,
        "patientId": 655,
        "patientName": "Mariann Maling",
        "description": "mmalingd@stanford.edu",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 1,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 15,
        "patientId": 590,
        "patientName": "Valle Mar",
        "description": "vmare@istockphoto.com",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 16,
        "patientId": 655,
        "patientName": "Hilly Gaskell",
        "description": "hgaskellf@hatena.ne.jp",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 17,
        "patientId": 306,
        "patientName": "Brennen Blaxill",
        "description": "bblaxillg@amazon.com",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 1,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 18,
        "patientId": 860,
        "patientName": "Nels Armall",
        "description": "narmallh@imageshack.us",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 1,
        "appType": [
            3
        ]
    },

    //chair two

    {
        "appointmentID": 19,
        "patientId": 791,
        "patientName": "Sheelagh Rosell",
        "description": "sroselli@constantcontact.com",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 2,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 20,
        "patientId": 45,
        "patientName": "Chick Aukland",
        "description": "cauklandj@businessinsider.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 2,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 21,
        "patientId": 807,
        "patientName": "Reg Dri",
        "description": "rdrik@adobe.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 2,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 22,
        "patientId": 348,
        "patientName": "Chrotoem Piegrome",
        "description": "cpiegromel@addthis.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 2,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 23,
        "patientId": 956,
        "patientName": "Belinda Blackett",
        "description": "bblackettm@prweb.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 2,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 24,
        "patientId": 111,
        "patientName": "Roddy Hanbridge",
        "description": "rhanbridgen@un.org",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 2,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 25,
        "patientId": 286,
        "patientName": "Wang Edmed",
        "description": "wedmedo@nbcnews.com",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 2,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 26,
        "patientId": 544,
        "patientName": "Wolfy Veschambes",
        "description": "wveschambesp@apple.com",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 2,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 27,
        "patientId": 130,
        "patientName": "Trixi Gauden",
        "description": "tgaudenq@earthlink.net",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 2,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 28,
        "patientId": 2,
        "patientName": "Karalee Jepson",
        "description": "kjepsonr@adobe.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 2,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 29,
        "patientId": 821,
        "patientName": "Luce Staterfield",
        "description": "lstaterfields@addtoany.com",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 2,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 30,
        "patientId": 785,
        "patientName": "Georgie Renad",
        "description": "grenadt@list-manage.com",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 2,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 31,
        "patientId": 38,
        "patientName": "Korie Baxstare",
        "description": "kbaxstareu@bloglovin.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 2,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 32,
        "patientId": 225,
        "patientName": "Sarine Itzcovichch",
        "description": "sitzcovichchv@time.com",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 2,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 33,
        "patientId": 600,
        "patientName": "Lucas MacLure",
        "description": "lmaclurew@paypal.com",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 2,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 34,
        "patientId": 626,
        "patientName": "Janela Stallebrass",
        "description": "jstallebrassx@1688.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 2,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 35,
        "patientId": 814,
        "patientName": "Lizette Orrocks",
        "description": "lorrocksy@chicagotribune.com",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 2,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 35,
        "patientId": 814,
        "patientName": "Lizette Orrocks",
        "description": "lorrocksy@chicagotribune.com",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 2,
        "appType": [
            3
        ]
    },

    //chair 3
    {
        "appointmentID": 36,
        "patientId": 870,
        "patientName": "Natasha Shord",
        "description": "nshordz@addtoany.com",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 3,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 37,
        "patientId": 222,
        "patientName": "Johnath Fancy",
        "description": "jfancy10@seattletimes.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 3,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 38,
        "patientId": 769,
        "patientName": "Katinka Braga",
        "description": "kbraga11@army.mil",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 3,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 39,
        "patientId": 944,
        "patientName": "Lance Mouat",
        "description": "lmouat12@bloglines.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 3,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 40,
        "patientId": 675,
        "patientName": "Penni Bardey",
        "description": "pbardey13@blog.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 3,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 41,
        "patientId": 715,
        "patientName": "Eugenie Imesen",
        "description": "eimesen14@icq.com",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 3,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 42,
        "patientId": 561,
        "patientName": "Dallis Stanbury",
        "description": "dstanbury15@sfgate.com",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 3,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 43,
        "patientId": 686,
        "patientName": "Gretel Priel",
        "description": "gpriel16@seesaa.net",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 3,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 44,
        "patientId": 401,
        "patientName": "Barbette Abelovitz",
        "description": "babelovitz17@rambler.ru",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 3,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 45,
        "patientId": 710,
        "patientName": "Emylee Inskipp",
        "description": "einskipp18@vinaora.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 3,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 46,
        "patientId": 924,
        "patientName": "Elspeth Prandin",
        "description": "eprandin19@senate.gov",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 3,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 47,
        "patientId": 792,
        "patientName": "Collen Rowlson",
        "description": "crowlson1a@amazon.co.uk",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 3,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 48,
        "patientId": 656,
        "patientName": "Ilario Misk",
        "description": "imisk1b@comsenz.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 3,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 49,
        "patientId": 249,
        "patientName": "Wendye Hearsum",
        "description": "whearsum1c@jigsy.com",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 3,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 50,
        "patientId": 771,
        "patientName": "Casper Cowen",
        "description": "ccowen1d@goo.ne.jp",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 3,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 51,
        "patientId": 697,
        "patientName": "Florencia Renfrew",
        "description": "frenfrew1e@quantcast.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 3,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 52,
        "patientId": 824,
        "patientName": "Geno Grocutt",
        "description": "ggrocutt1f@ning.com",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 3,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 53,
        "patientId": 389,
        "patientName": "Isidro Pooley",
        "description": "ipooley1g@github.io",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 3,
        "appType": [
            1
        ]
    },

    //chair 4
    {
        "appointmentID": 54,
        "patientId": 823,
        "patientName": "Waylin Gillcrist",
        "description": "wgillcrist1h@ow.ly",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 4,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 55,
        "patientId": 279,
        "patientName": "Albina Weigh",
        "description": "aweigh1i@psu.edu",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 4,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 56,
        "patientId": 782,
        "patientName": "Nisse Camerati",
        "description": "ncamerati1j@ezinearticles.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 4,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 57,
        "patientId": 85,
        "patientName": "Rafi Tiptaft",
        "description": "rtiptaft1k@csmonitor.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 4,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 58,
        "patientId": 258,
        "patientName": "Veronika Casa",
        "description": "vcasa1l@gizmodo.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 4,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 59,
        "patientId": 515,
        "patientName": "L;urette Ruffle",
        "description": "lruffle1m@npr.org",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 4,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 60,
        "patientId": 35,
        "patientName": "Chevalier Weekly",
        "description": "cweekly1n@apache.org",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 4,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 61,
        "patientId": 436,
        "patientName": "Dieter Testro",
        "description": "dtestro1o@fc2.com",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 4,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 62,
        "patientId": 347,
        "patientName": "Pebrook Ruffey",
        "description": "pruffey1p@icq.com",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 4,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 63,
        "patientId": 475,
        "patientName": "Lyndy Anthes",
        "description": "lanthes1q@bing.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 4,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 64,
        "patientId": 413,
        "patientName": "Cass Van Dale",
        "description": "cvan1r@eventbrite.com",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 4,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 65,
        "patientId": 907,
        "patientName": "Wernher Lighton",
        "description": "wlighton1s@timesonline.co.uk",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 4,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 66,
        "patientId": 644,
        "patientName": "Mia Cordie",
        "description": "mcordie1t@hugedomains.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 4,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 67,
        "patientId": 376,
        "patientName": "Pierre Arch",
        "description": "parch1u@nih.gov",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 4,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 68,
        "patientId": 900,
        "patientName": "Ileana Pyper",
        "description": "ipyper1v@phoca.cz",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 4,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 69,
        "patientId": 369,
        "patientName": "Forest Keech",
        "description": "fkeech1w@elpais.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 4,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 70,
        "patientId": 274,
        "patientName": "Waiter Custy",
        "description": "wcusty1x@nsw.gov.au",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 4,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 71,
        "patientId": 858,
        "patientName": "Teressa Navarijo",
        "description": "tnavarijo1y@gov.uk",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 4,
        "appType": [
            1
        ]
    },

    //chair 5
    {
        "appointmentID": 72,
        "patientId": 615,
        "patientName": "Seamus McCory",
        "description": "smccory1z@comsenz.com",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 5,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 73,
        "patientId": 519,
        "patientName": "Maia Lindermann",
        "description": "mlindermann20@blogs.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 5,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 74,
        "patientId": 890,
        "patientName": "Marnie Dudliston",
        "description": "mdudliston21@chron.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 5,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 75,
        "patientId": 434,
        "patientName": "Shayne Timeby",
        "description": "stimeby22@github.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 5,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 76,
        "patientId": 86,
        "patientName": "Emmett Judd",
        "description": "ejudd23@archive.org",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 5,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 77,
        "patientId": 798,
        "patientName": "Fenelia Agiolfinger",
        "description": "fagiolfinger24@soup.io",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 5,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 78,
        "patientId": 239,
        "patientName": "Stewart Melson",
        "description": "smelson25@surveymonkey.com",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 5,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 79,
        "patientId": 708,
        "patientName": "Josephine Bakey",
        "description": "jbakey26@youtube.com",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 5,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 80,
        "patientId": 821,
        "patientName": "Jourdan Haggidon",
        "description": "jhaggidon27@nsw.gov.au",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 5,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 81,
        "patientId": 217,
        "patientName": "Alissa Guinn",
        "description": "aguinn28@yolasite.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 5,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 82,
        "patientId": 14,
        "patientName": "Isacco Souten",
        "description": "isouten29@odnoklassniki.ru",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 5,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 83,
        "patientId": 759,
        "patientName": "Constantina Brunstan",
        "description": "cbrunstan2a@gov.uk",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 5,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 84,
        "patientId": 590,
        "patientName": "Maurie Kalf",
        "description": "mkalf2b@wordpress.org",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 5,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 85,
        "patientId": 454,
        "patientName": "Mirabel Langfat",
        "description": "mlangfat2c@vimeo.com",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 5,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 86,
        "patientId": 699,
        "patientName": "Amandy Meffan",
        "description": "ameffan2d@sbwire.com",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 5,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 87,
        "patientId": 524,
        "patientName": "Saunders Tume",
        "description": "stume2e@reverbnation.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 5,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 88,
        "patientId": 373,
        "patientName": "Zebulen Magarrell",
        "description": "zmagarrell2f@unblog.fr",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 5,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 89,
        "patientId": 709,
        "patientName": "Nevsa Beaushaw",
        "description": "nbeaushaw2g@mapquest.com",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 5,
        "appType": [
            1
        ]
    },

    //chair 6
    {
        "appointmentID": 90,
        "patientId": 837,
        "patientName": "Forester Banishevitz",
        "description": "fbanishevitz2h@bloglines.com",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 6,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 91,
        "patientId": 456,
        "patientName": "Golda Burberry",
        "description": "gburberry2i@lulu.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 6,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 92,
        "patientId": 753,
        "patientName": "Fanchon De Mico",
        "description": "fde2j@wufoo.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 6,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 93,
        "patientId": 761,
        "patientName": "Nada Kapelhof",
        "description": "nkapelhof2k@google.com.au",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 6,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 94,
        "patientId": 324,
        "patientName": "Sherie Ceeley",
        "description": "sceeley2l@alibaba.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 6,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 95,
        "patientId": 954,
        "patientName": "Elisha Reddihough",
        "description": "ereddihough2m@npr.org",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 6,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 96,
        "patientId": 789,
        "patientName": "Alasdair Rein",
        "description": "arein2n@g.co",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 6,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 97,
        "patientId": 577,
        "patientName": "Cointon Beak",
        "description": "cbeak2o@weibo.com",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 6,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 98,
        "patientId": 618,
        "patientName": "Gerard Aiken",
        "description": "gaiken2p@creativecommons.org",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 6,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 99,
        "patientId": 790,
        "patientName": "Douglas Gorrissen",
        "description": "dgorrissen2q@ibm.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 6,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 100,
        "patientId": 351,
        "patientName": "Trula Rothermel",
        "description": "trothermel2r@nhs.uk",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 6,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 101,
        "patientId": 439,
        "patientName": "Barbette Wigzell",
        "description": "bwigzell2s@photobucket.com",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 6,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 102,
        "patientId": 756,
        "patientName": "Casey Ost",
        "description": "cost2t@etsy.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 6,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 103,
        "patientId": 197,
        "patientName": "Noel Binning",
        "description": "nbinning2u@google.nl",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 6,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 104,
        "patientId": 819,
        "patientName": "Humphrey Syson",
        "description": "hsyson2v@bizjournals.com",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 6,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 105,
        "patientId": 374,
        "patientName": "Roxana Woolley",
        "description": "rwoolley2w@hp.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 6,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 106,
        "patientId": 506,
        "patientName": "Maurine Dobbins",
        "description": "mdobbins2x@soundcloud.com",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 6,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 107,
        "patientId": 406,
        "patientName": "Elsa Jeal",
        "description": "ejeal2y@live.com",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 6,
        "appType": [
            1
        ]
    },

    //chair 7
    {
        "appointmentID": 109,
        "patientId": 918,
        "patientName": "Emyle Cosgrave",
        "description": "ecosgrave30@tinyurl.com",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 7,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 110,
        "patientId": 413,
        "patientName": "Dacy Iacomelli",
        "description": "diacomelli31@facebook.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 7,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 111,
        "patientId": 337,
        "patientName": "Faythe Christoforou",
        "description": "fchristoforou32@netlog.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 7,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 112,
        "patientId": 790,
        "patientName": "Damiano State",
        "description": "dstate33@aol.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 7,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 113,
        "patientId": 599,
        "patientName": "Luisa Bloschke",
        "description": "lbloschke34@quantcast.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 7,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 114,
        "patientId": 749,
        "patientName": "Emmett Blanshard",
        "description": "eblanshard35@slate.com",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 7,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 115,
        "patientId": 190,
        "patientName": "Giffer Mabbe",
        "description": "gmabbe36@jalbum.net",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 7,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 116,
        "patientId": 804,
        "patientName": "Darrell Callf",
        "description": "dcallf37@sina.com.cn",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 7,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 117,
        "patientId": 170,
        "patientName": "Ruperta Morley",
        "description": "rmorley38@nymag.com",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 7,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 118,
        "patientId": 394,
        "patientName": "Concettina Boreham",
        "description": "cboreham39@patch.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 7,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 119,
        "patientId": 96,
        "patientName": "Roldan Gook",
        "description": "rgook3a@zdnet.com",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 7,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 120,
        "patientId": 331,
        "patientName": "Mirabella Galgey",
        "description": "mgalgey3b@shareasale.com",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 7,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 121,
        "patientId": 268,
        "patientName": "Virgil Ostrich",
        "description": "vostrich3c@over-blog.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 7,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 122,
        "patientId": 409,
        "patientName": "Prue Gorvette",
        "description": "pgorvette3d@t-online.de",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 7,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 123,
        "patientId": 5,
        "patientName": "Berna MacAulay",
        "description": "bmacaulay3e@discuz.net",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 7,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 124,
        "patientId": 474,
        "patientName": "Micky Mullinger",
        "description": "mmullinger3f@kickstarter.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 7,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 125,
        "patientId": 340,
        "patientName": "Raddy Poyle",
        "description": "rpoyle3g@seesaa.net",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 7,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 126,
        "patientId": 224,
        "patientName": "Cathrin Baselio",
        "description": "cbaselio3h@nih.gov",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 7,
        "appType": [
            2
        ]
    },

    //chair 8

    {
        "appointmentID": 127,
        "patientId": 962,
        "patientName": "Linet Cleeves",
        "description": "lcleeves3i@toplist.cz",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 8,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 128,
        "patientId": 400,
        "patientName": "Erminia Cundy",
        "description": "ecundy3j@opensource.org",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 8,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 129,
        "patientId": 289,
        "patientName": "Armin Hurnell",
        "description": "ahurnell3k@oracle.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 8,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 130,
        "patientId": 362,
        "patientName": "Broddie Sharma",
        "description": "bsharma3l@weather.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 8,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 131,
        "patientId": 567,
        "patientName": "Kent Addyman",
        "description": "kaddyman3m@multiply.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 8,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 132,
        "patientId": 204,
        "patientName": "Britt Calley",
        "description": "bcalley3n@printfriendly.com",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 8,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 133,
        "patientId": 115,
        "patientName": "Aileen Ayshford",
        "description": "aayshford3o@homestead.com",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 8,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 134,
        "patientId": 309,
        "patientName": "Remington Keneleyside",
        "description": "rkeneleyside3p@mapy.cz",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 8,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 135,
        "patientId": 926,
        "patientName": "Eldredge Wogan",
        "description": "ewogan3q@sohu.com",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 8,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 136,
        "patientId": 77,
        "patientName": "Phylis Theseira",
        "description": "ptheseira3r@cloudflare.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 8,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 137,
        "patientId": 416,
        "patientName": "Eartha Grumble",
        "description": "egrumble3s@deliciousdays.com",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 8,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 138,
        "patientId": 577,
        "patientName": "Ruddy Drakers",
        "description": "rdrakers3t@archive.org",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 8,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 139,
        "patientId": 146,
        "patientName": "Any Guard",
        "description": "aguard3u@prlog.org",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 8,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 140,
        "patientId": 809,
        "patientName": "Gaylene Genge",
        "description": "ggenge3v@intel.com",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 8,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 141,
        "patientId": 477,
        "patientName": "Patricio Pfeuffer",
        "description": "ppfeuffer3w@nasa.gov",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 8,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 142,
        "patientId": 293,
        "patientName": "Brittney Keepe",
        "description": "bkeepe3x@japanpost.jp",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 8,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 143,
        "patientId": 744,
        "patientName": "Shell Blenkiron",
        "description": "sblenkiron3y@soup.io",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 8,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 144,
        "patientId": 278,
        "patientName": "Flint Wooderson",
        "description": "fwooderson3z@foxnews.com",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 8,
        "appType": [
            1
        ]
    },

    //chair 9
    {
        "appointmentID": 145,
        "patientId": 313,
        "patientName": "Franklin Murname",
        "description": "fmurname40@auda.org.au",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 9,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 146,
        "patientId": 267,
        "patientName": "Grover Durnin",
        "description": "gdurnin41@samsung.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 9,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 147,
        "patientId": 613,
        "patientName": "Clarine Foulks",
        "description": "cfoulks42@thetimes.co.uk",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 9,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 148,
        "patientId": 167,
        "patientName": "Sabrina Tremellier",
        "description": "stremellier43@last.fm",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 9,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 149,
        "patientId": 756,
        "patientName": "Audrye Cresser",
        "description": "acresser44@pbs.org",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 9,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 150,
        "patientId": 160,
        "patientName": "Elwood Janota",
        "description": "ejanota45@purevolume.com",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 9,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 151,
        "patientId": 656,
        "patientName": "Wainwright Brimner",
        "description": "wbrimner46@behance.net",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 9,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 152,
        "patientId": 98,
        "patientName": "Johnathon Maydway",
        "description": "jmaydway47@hugedomains.com",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 9,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 153,
        "patientId": 993,
        "patientName": "Jacinthe Keenleyside",
        "description": "jkeenleyside48@alibaba.com",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 9,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 154,
        "patientId": 478,
        "patientName": "Muhammad Skilling",
        "description": "mskilling49@amazonaws.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 9,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 155,
        "patientId": 125,
        "patientName": "Gearard McIlvaney",
        "description": "gmcilvaney4a@woothemes.com",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 9,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 156,
        "patientId": 683,
        "patientName": "Selena Roloff",
        "description": "sroloff4b@angelfire.com",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 9,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 157,
        "patientId": 932,
        "patientName": "Alvie Inworth",
        "description": "ainworth4c@diigo.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 9,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 158,
        "patientId": 834,
        "patientName": "Rupert Keary",
        "description": "rkeary4d@wikipedia.org",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 9,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 159,
        "patientId": 37,
        "patientName": "Carmelle Dobrowski",
        "description": "cdobrowski4e@arstechnica.com",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 9,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 160,
        "patientId": 688,
        "patientName": "Freida Aspy",
        "description": "faspy4f@marriott.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 9,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 161,
        "patientId": 207,
        "patientName": "Ephrem Keddie",
        "description": "ekeddie4g@pen.io",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 9,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 162,
        "patientId": 942,
        "patientName": "Hedda Stolte",
        "description": "hstolte4h@abc.net.au",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 9,
        "appType": [
            4
        ]
    },

    //chair 10

    {
        "appointmentID": 163,
        "patientId": 928,
        "patientName": "Niels Brugden",
        "description": "nbrugden4i@nyu.edu",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 10,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 164,
        "patientId": 988,
        "patientName": "Jorry Grogono",
        "description": "jgrogono4j@yelp.com",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 10,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 165,
        "patientId": 748,
        "patientName": "Gunilla Pinnell",
        "description": "gpinnell4k@ucsd.edu",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 10,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 166,
        "patientId": 224,
        "patientName": "Halsy Riepel",
        "description": "hriepel4l@wired.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 10,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 167,
        "patientId": 861,
        "patientName": "Lexine Allabarton",
        "description": "lallabarton4m@blog.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 10,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 168,
        "patientId": 313,
        "patientName": "Nicolais Riden",
        "description": "nriden4n@imageshack.us",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 10,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 169,
        "patientId": 766,
        "patientName": "Aubrie Nuccitelli",
        "description": "anuccitelli4o@cnet.com",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 10,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 170,
        "patientId": 601,
        "patientName": "Lem Humbert",
        "description": "lhumbert4p@intel.com",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 10,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 171,
        "patientId": 551,
        "patientName": "Theda McSwan",
        "description": "tmcswan4q@last.fm",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 10,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 172,
        "patientId": 652,
        "patientName": "Rebecca Henningham",
        "description": "rhenningham4r@nih.gov",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 10,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 173,
        "patientId": 518,
        "patientName": "Lucille Wager",
        "description": "lwager4s@drupal.org",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 10,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 174,
        "patientId": 583,
        "patientName": "Emmett Finney",
        "description": "efinney4t@slate.com",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 10,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 175,
        "patientId": 442,
        "patientName": "Krissie Linzey",
        "description": "klinzey4u@smh.com.au",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 10,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 176,
        "patientId": 105,
        "patientName": "Angel Yo",
        "description": "ayo4v@privacy.gov.au",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 10,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 177,
        "patientId": 743,
        "patientName": "Wallie Annell",
        "description": "wannell4w@bbc.co.uk",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 10,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 178,
        "patientId": 127,
        "patientName": "Eldon Klosser",
        "description": "eklosser4x@w3.org",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 10,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 179,
        "patientId": 577,
        "patientName": "Mariya Bunyan",
        "description": "mbunyan4y@lycos.com",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 10,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 180,
        "patientId": 330,
        "patientName": "Tiffany Bordes",
        "description": "tbordes4z@wired.com",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 10,
        "appType": [
            2
        ]
    },

    //chair 11
    {
        "appointmentID": 181,
        "patientId": 825,
        "patientName": "Denis Given",
        "description": "dgiven50@surveymonkey.com",
        "startDate": new Date('2023-07-03T08:00:00.000'),
        "endDate": new Date('2023-07-03T08:30:00.000'),
        "chairId": 11,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 182,
        "patientId": 577,
        "patientName": "Martainn Trembath",
        "description": "mtrembath51@bbc.co.uk",
        "startDate": new Date('2023-07-03T08:30:00.000'),
        "endDate": new Date('2023-07-03T09:00:00.000'),
        "chairId": 11,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 183,
        "patientId": 353,
        "patientName": "Rubi Seabridge",
        "description": "rseabridge52@walmart.com",
        "startDate": new Date('2023-07-03T09:00:00.000'),
        "endDate": new Date('2023-07-03T09:30:00.000'),
        "chairId": 11,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 184,
        "patientId": 871,
        "patientName": "Jewel Weild",
        "description": "jweild53@imdb.com",
        "startDate": new Date('2023-07-03T09:30:00.000'),
        "endDate": new Date('2023-07-03T10:00:00.000'),
        "chairId": 11,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 185,
        "patientId": 294,
        "patientName": "Timmy Huke",
        "description": "thuke54@naver.com",
        "startDate": new Date('2023-07-03T10:00:00.000'),
        "endDate": new Date('2023-07-03T10:30:00.000'),
        "chairId": 11,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 186,
        "patientId": 363,
        "patientName": "Kira Bothram",
        "description": "kbothram55@statcounter.com",
        "startDate": new Date('2023-07-03T10:30:00.000'),
        "endDate": new Date('2023-07-03T11:00:00.000'),
        "chairId": 11,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 187,
        "patientId": 949,
        "patientName": "Gabie Raddish",
        "description": "graddish56@springer.com",
        "startDate": new Date('2023-07-03T11:00:00.000'),
        "endDate": new Date('2023-07-03T11:30:00.000'),
        "chairId": 11,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 188,
        "patientId": 155,
        "patientName": "Indira Beyn",
        "description": "ibeyn57@wp.com",
        "startDate": new Date('2023-07-03T11:30:00.000'),
        "endDate": new Date('2023-07-03T12:00:00.000'),
        "chairId": 11,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 189,
        "patientId": 76,
        "patientName": "Jyoti Fothergill",
        "description": "jfothergill58@psu.edu",
        "startDate": new Date('2023-07-03T12:00:00.000'),
        "endDate": new Date('2023-07-03T12:30:00.000'),
        "chairId": 11,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 190,
        "patientId": 951,
        "patientName": "Jacobo Del Castello",
        "description": "jdel59@bandcamp.com",
        "startDate": new Date('2023-07-03T12:30:00.000'),
        "endDate": new Date('2023-07-03T13:00:00.000'),
        "chairId": 11,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 191,
        "patientId": 944,
        "patientName": "Janeta Yexley",
        "description": "jyexley5a@1688.com",
        "startDate": new Date('2023-07-03T13:00:00.000'),
        "endDate": new Date('2023-07-03T13:30:00.000'),
        "chairId": 11,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 192,
        "patientId": 827,
        "patientName": "Tomkin Erskin",
        "description": "terskin5b@dot.gov",
        "startDate": new Date('2023-07-03T13:30:00.000'),
        "endDate": new Date('2023-07-03T14:00:00.000'),
        "chairId": 11,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 193,
        "patientId": 156,
        "patientName": "Nonah Yateman",
        "description": "nyateman5c@newsvine.com",
        "startDate": new Date('2023-07-03T14:00:00.000'),
        "endDate": new Date('2023-07-03T14:30:00.000'),
        "chairId": 11,
        "appType": [
            4
        ]
    },
    {
        "appointmentID": 194,
        "patientId": 528,
        "patientName": "Noelle Franceschi",
        "description": "nfranceschi5d@java.com",
        "startDate": new Date('2023-07-03T14:30:00.000'),
        "endDate": new Date('2023-07-03T15:00:00.000'),
        "chairId": 11,
        "appType": [
            1
        ]
    },
    {
        "appointmentID": 195,
        "patientId": 139,
        "patientName": "Shay Keford",
        "description": "skeford5e@berkeley.edu",
        "startDate": new Date('2023-07-03T15:00:00.000'),
        "endDate": new Date('2023-07-03T15:30:00.000'),
        "chairId": 11,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 196,
        "patientId": 844,
        "patientName": "Saxe Dudin",
        "description": "sdudin5f@lycos.com",
        "startDate": new Date('2023-07-03T15:30:00.000'),
        "endDate": new Date('2023-07-03T16:00:00.000'),
        "chairId": 11,
        "appType": [
            3
        ]
    },
    {
        "appointmentID": 197,
        "patientId": 861,
        "patientName": "Dina Coats",
        "description": "dcoats5g@businessinsider.com",
        "startDate": new Date('2023-07-03T16:00:00.000'),
        "endDate": new Date('2023-07-03T16:30:00.000'),
        "chairId": 11,
        "appType": [
            2
        ]
    },
    {
        "appointmentID": 198,
        "patientId": 808,
        "patientName": "Katrina Halso",
        "description": "khalso5h@apple.com",
        "startDate": new Date('2023-07-03T16:30:00.000'),
        "endDate": new Date('2023-07-03T17:00:00.000'),
        "chairId": 11,
        "appType": [
            3
        ]
    },


];

export const chairData: chairDataInterface[] = [
    {
        text: 'Chair 1',
        id: 1,
    },
    {
        text: 'Chair 2',
        id: 2,
    },
    {
        text: 'Chair 3',
        id: 3,
    },
    {
        text: 'Chair 4',
        id: 4,
    },
    {
        text: 'Chair 5',
        id: 5,
    },
    {
        text: 'Chair 6',
        id: 6,
    },

    {
        text: 'Chair 7',
        id: 7,
    },
    {
        text: 'Chair 8',
        id: 8,
    },
    {
        text: 'Chair 9',
        id: 9,
    },
    {
        text: 'Chair 10',
        id: 10,
    },
    {
        text: 'Chair 11',
        id: 11,
    },
    // {
    //     text: 'Chair 13',
    //     id: 13,
    // },
    // {
    //     text: 'Chair 14',
    //     id: 14,
    // },
    // {
    //     text: 'Chair 15',
    //     id: 15,
    // },
];



export const scheduleTemplateList = [
    {
        "TemplateId": 1,
        "chairId": 1,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Cleaning",
        "Color": "#FFB6C1",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 2,
        "chairId": 1,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Check-up",
        "Color": "#90EE90",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 3,
        "chairId": 1,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "X-rays",
        "Color": "#ADD8E6",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 3,
        "chairId": 1,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "X-rays",
        "Color": "#E6E6FA",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    //--------------------chair 2
    {
        "TemplateId": 5,
        "chairId": 2,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Braces Adjustment",
        "Color": "#FFDAB9",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 6,
        "chairId": 2,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Pediatric Dentistry",
        "Color": "#D3D3D3",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    //chair 3
    {
        "TemplateId": 7,
        "chairId": 3,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "X-rays",
        "Color": "#87CEFA",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 8,
        "chairId": 3,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Extraction",
        "Color": "#F08080",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 9,
        "chairId": 3,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Crown",
        "Color": "#FFDAB9",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 10,
        "chairId": 3,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Oral Cancer Screening",
        "Color": "#F08080",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    //--------------------chair 4
    {
        "TemplateId": 11,
        "chairId": 4,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Emergency Dental Care",
        "Color": "#339900",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 12,
        "chairId": 4,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Oral Surgery",
        "Color": "#F9EBDF",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    //chair 5
    {
        "TemplateId": 13,
        "chairId": 5,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Root Canal",
        "Color": "	#CCCC00",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 14,
        "chairId": 5,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Dentures",
        "Color": "#996600",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 15,
        "chairId": 5,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Teeth Whitening",
        "Color": "#66CC00",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 16,
        "chairId": 5,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "TMJ Treatment",
        "Color": "#009900",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },

    //chair 6
    {
        "TemplateId": 17,
        "chairId": 6,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Emergency Dental Care",
        "Color": "#CC99FF",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 18,
        "chairId": 6,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Oral Surgery",
        "Color": "#CCFF33",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },

    // chair 7
    {
        "TemplateId": 19,
        "chairId": 7,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Root Canal",
        "Color": "#FF66CC",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 20,
        "chairId": 7,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Dentures",
        "Color": "#33CC66",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 21,
        "chairId": 7,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Teeth Whitening",
        "Color": "#66CCCC",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 22,
        "chairId": 7,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "TMJ Treatment",
        "Color": "#3399FF",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    ////chair 8
    {
        "TemplateId": 23,
        "chairId": 8,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "X-rays",
        "Color": "#87CEFA",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 24,
        "chairId": 8,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Extraction",
        "Color": "#F08080",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 25,
        "chairId": 8,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Crown",
        "Color": "#FFDAB9",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 26,
        "chairId": 8,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Oral Cancer Screening",
        "Color": "#F08080",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },

    //chair 9
    {
        "TemplateId": 27,
        "chairId": 9,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Cleaning",
        "Color": "#FFB6C1",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 27,
        "chairId": 9,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Check-up",
        "Color": "#90EE90",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 27,
        "chairId": 9,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "X-rays",
        "Color": "#ADD8E6",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 27,
        "chairId": 9,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "X-rays",
        "Color": "#E6E6FA",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    //chair 10
    {
        "TemplateId": 28,
        "chairId": 10,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Root Canal",
        "Color": "	#CCCC00",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 29,
        "chairId": 10,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Dentures",
        "Color": "#996600",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 30,
        "chairId": 10,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Teeth Whitening",
        "Color": "#66CC00",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 31,
        "chairId": 10,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "TMJ Treatment",
        "Color": "#009900",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },

    // chair 11
    {
        "TemplateId": 32,
        "chairId": 11,
        "ChairStartTimeHour": 8,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 10,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Root Canal",
        "Color": "#FF66CC",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 33,
        "chairId": 11,
        "ChairStartTimeHour": 10,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 13,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Dentures",
        "Color": "#33CC66",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 34,
        "chairId": 11,
        "ChairStartTimeHour": 13,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 15,
        "ChairEndTimeMinute": 0,
        "SelectedType": "Teeth Whitening",
        "Color": "#66CCCC",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },
    {
        "TemplateId": 35,
        "chairId": 11,
        "ChairStartTimeHour": 15,
        "ChairStartTimeMinute": 0,
        "ChairEndTimeHour": 17,
        "ChairEndTimeMinute": 0,
        "SelectedType": "TMJ Treatment",
        "Color": "#3399FF",
        "AppointmentTypeId": 260,
        "AppointmentClassId": 0,
        "IsCustomTemplate": false,
        "CustomTemplateDate": "2023-04-25T00:00:00",
        "IsActive": false,
        "CurrentUserId": null,
        "CustomTemplateLocationId": 0
    },


]