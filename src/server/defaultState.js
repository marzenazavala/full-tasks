import md5 from 'md5';

export const defaultState = {
    session: {
        authenticated: false
    },
    users: [
        {
            id: "U1",
            name: "Dev",
            passwordHash: md5("SOMETHING") 
        },
        {
            id: "U2",
            name: "Ben",
            passwordHash: md5("SOMETHING2") 
        }
    ],
    groups: [
        {
            name:"To Do",
            id: "G1",
            owner: "U1",
        },
        {
            name:"Doing",
            id: "G2",
            owner: "U1",
        },
        {
            name:"Done",
            id: "G3",
            owner: "U2",
        },
    ],
    tasks: [
        {
            name:"Do tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false
        },
        {
            name:"Call Ana",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false
        },
        {
            name:"Do math",
            id: "T2",
            group: "G3",
            owner: "U2",
            isComplete: true
        },
        {
            name:"Do gym",
            id: "T3",
            group: "G2",
            owner: "U1",
            isComplete: false
        },
        {
            name:"Set meeting with Elisabeth",
            id: "T3",
            group: "G2",
            owner: "U1",
            isComplete: false
        }
    ],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Good job!"
    }]
}