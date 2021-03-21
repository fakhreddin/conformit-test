const comments = [
    {creationDate: '2016-04-22T06:23:00Z', author: 'Jean Valjean', content: "Océane est arrivée il y a seulement 3 mois"},
    {creationDate: '2007-03-20T07:34:00Z', author: 'Océane Quessy', content: "Je n'étais pas formé à ca"},
    {creationDate: '2012-08-27T08:54:00Z', author: 'Martin Duranseau', content: "Le marteau n'étais pas dans la malette"},
    {creationDate: '2009-04-22T01:12:00Z', author: 'Martin Duranseau', content: "La procédure était très ancienne"},
    {creationDate: '2016-12-09T11:34:00Z', author: 'Adrien Lacharité', content: "L'alarme est défaillante"},
    {creationDate: '2018-01-21T06:59:00Z', author: 'Belisarda Mazuret', content: "Le sol est abimé"}
]

const events = [
    {
        "id": 47,
        "creationDate": "2008-03-30T05:13:23Z",
        "createdBy": "Kirstin",
        "involvedEmployee": {
            "id": 1868,
            "firstname": "Adelle",
            "lastname": "Thornburg"
        },
        "title": "Accident avec Adelle",
        "description": "",
        "statusName": "Open",
        "Témoins": [
            "Mureil",
            "Melina"
        ]
    },
    {
        "id": 81,
        "creationDate": "1983-05-30T11:35:46Z",
        "createdBy": "Louella",
        "involvedEmployee": {
            "id": 8139,
            "firstname": "Amara",
            "lastname": "Ivens"
        },
        "title": "Accident avec Amara",
        "description": "",
        "statusName": "Closed",
        "Témoins": [
            "Tina",
            "Luci"
        ]
    },
    {
        "id": 38,
        "creationDate": "2017-11-15T08:08:14Z",
        "createdBy": "Nannie",
        "involvedEmployee": {
            "id": 2532,
            "firstname": "Helena",
            "lastname": "Hewitt"
        },
        "title": "Accident avec Helena",
        "description": "",
        "statusName": "InProgress",
        "Témoins": [
            "Jeanna",
            "Jerry"
        ]
    }
]

/**
 * Retourne un événement
 * Return an event
 * @function
 * @param {Number} index - Id de l'événement / Id of the event
 */
export function getEvent(index) {
    if (typeof(index) !== "number") {
        throw "Invalid index";
    }

    let event = events.find(x => x.id === index);

    if (event) {
        return event;
    } else {
        throw "Event not found"
    }
}

export function getEventList(){
    return events;
}

/**
 * Retourne la liste des commentaires associées à un événement
 * Return the comments associated with an event
 * @function
 * @param {Number} index - Id de l'événement / Id of the event
 */
export function GetEventComments(index) {
    if (typeof(index) !== "number") {
        throw "Invalid index";
    }

    if (index === 47) {
        return comments.slice(0,2);
    } else if (index === 81) {
        return comments.slice(2,5);
    }  else {
        return []
    }
}