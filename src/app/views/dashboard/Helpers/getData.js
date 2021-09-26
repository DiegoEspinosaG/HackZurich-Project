import axios from "axios";

export const getStats = async () => {
    /* TODO: Traer info de api */

    return {
        totalEmployees: '3050',
        totalBrigades: '85',
        registeredUsers: '3000',
        missingUsers: '50',
        totalIncidents: '1200',
    }
};

export const getTotalEmployees = async () => {
    /* TODO: Traer info de api */

    const aux = {
        data: [
            {
                username: 'Emma',
                userBrigade: 'A',
                userStatus: 'Safe',
            },
            {
                username: 'Ava',
                userBrigade: 'B',
                userStatus: 'Injured',
            },
            {
                username: 'Mohamed',
                userBrigade: 'C',
                userStatus: 'Delicate',
            },
            {
                username: 'Judith',
                userBrigade: 'D',
                userStatus: 'Dead',
            },
            {
                username: 'Alí',
                userBrigade: 'E',
                userStatus: 'Missing',
            },
        ]
    }

    return aux;
};