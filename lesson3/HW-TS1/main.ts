interface User {
    name: string;
    age: number;
    status: boolean;
}

const users: User[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 32, status: true},
    {name: 'kolya', age: 33, status: true},
    {name: 'olya', age: 29, status: false},
    {name: 'max', age: 32, status: true},
    {name: 'anya', age: 30, status: false},
    {name: 'oleg', age: 27, status: false},
    {name: 'andrii', age: 29, status: true},
    {name: 'masha', age: 39, status: true},
    {name: 'misha', age: 22, status: false},
    {name: 'roma', age: 35, status: true},

];

for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}