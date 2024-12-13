type User = {
    name: string,
    age: number,
    status: boolean,
};

function userFilter(users: User[]): User[] {
    let filteredUsers: User[] = [];
    for (const user of users) {
        if (user.age > 30) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;

}

const users: User[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const filter: User[] = userFilter(users);
console.log(filter);
