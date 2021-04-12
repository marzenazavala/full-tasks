export const defaultState = {
    users: [
        {
            id: "U1",
            name: "Dev"
        },
        {
            id: "U2",
            name: "Ben"
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
            owner: "U1",
        },
    ],
    tasks: [
        {
            name:"Do tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isCompleted: false
        },
        {
            name:"Call Ana",
            id: "T1",
            group: "G1",
            owner: "U1",
            isCompleted: false
        },
        {
            name:"Do math",
            id: "T2",
            group: "G3",
            owner: "U2",
            isCompleted: true
        },
        {
            name:"Do gym",
            id: "T3",
            group: "G2",
            owner: "U1",
            isCompleted: false
        },
        {
            name:"Set meeting with Elisabeth",
            id: "T3",
            group: "G2",
            owner: "U1",
            isCompleted: false
        }
    ],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Good job!"
    }]
}