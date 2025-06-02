//1.1 ES6 methods
//variable
const clients = [
  {
    name: 'Ionescu Ana',
    nrProd: 5,
    sum: 300,
    address: {
      city: 'Voluntari',
      nr: 10
    }
  },
  {
    name: 'Dobre Mihai-Cristian',
    nrProd: 1,
    sum: 50,
    address: {
      city: 'Cluj-Napoca',
      nr: 25
    }
  },
  {
    name: 'Mircea Elena',
    nrProd: 4,
    sum: 220,
    address: {
      city: 'Constanta',
      nr: 15
    }
  },
  {
    name: 'Nastase Diana',
    nrProd: 2,
    sum: 100,
    address: {
      city: 'Oradea',
      nr: 32
    }
  }
];

//make a list of my clients with "map"
const names = clients.map(c => c.name);
console.log('list of clients:', names);
console.log("\n");

//with "filter" i just only the data from some criteria
//here i selected clients which will buy more than 2 products
const selectedClients = clients.filter(c => c.nrProd > 2);
console.log('selected list of clients:', selectedClients);
console.log("\n");

//with reduce, from multiple values/array , can be put in one value, like sums
const totalRevenue = clients.reduce((sum, c) => sum + c.sum, 0);
console.log('total revenue from purchases is', totalRevenue); 
console.log("\n");

//print in console every client about purchases-> "forEach"
console.log('full list of clients in detail:');
clients.forEach((c, idx) => {
  console.log(`${idx + 1}. ${c.name} -> ${c.nrProd} products`);
});
console.log("\n");

//search/find specifically the clients
const lowSpendClient = clients.find(c => c.sum < 100);
console.log('the clients for that sum is', lowSpendClient); 
console.log("\n");

//return boolean, at least one client checked the criteria
const isSpendClients = clients.some(c => c.total > 500);
console.log('clients who spends too much:', isSpendClients); 
console.log("\n");

//return boolean, all clients checked the criteria
const isAllOrdered = clients.every(c => c.nrProd >= 1);
console.log('check if all clients buy:', isAllOrdered);
console.log("\n");

//1.2 var - let - const -> declaring variables

//not redeclaration & not reassignment -> intern modified
const client = {
  name: 'Nastase Diana',
  nrProd: 2,
  sum: 100,
  address: {
    city: 'Oradea',
    nr: 32
  }
};

//test if can modify data inside object
client.sum = 150;
client.address.city = 'Bucuresti';

console.log('updated info for', client);
console.log("\n");

//not redeclaration, but reassignment
let discount = 0;

if (client.sum > 100) {
  let discount = 10; //block scoped, different variable
  console.log('inside of cond =', discount); 
}

console.log('outside of cond =', discount); 
//test if can be reassigned
discount = 15;
console.log('after reassignment of discount =', discount); 
console.log("\n");

//redeclaration & reassignment
var clientNameTest = 'Dobre Mihai';

if (true) {
  var clientNameTest = 'Ionescu Ana'; 
  console.log('inside of if is', clientNameTest); 
}

console.log('outside of if is', clientNameTest); 
//test redeclaration
var clientNameTest = 'Mircea Elena';
console.log('after redeclaration:', clientNameTest);
console.log("\n");

//1.3 spread op

//add+shallow copies
//new clients
const newClients = [
  {
    name: 'Popescu Radu-Marius',
    nrProd: 3,
    sum: 155,
    address: {
      city: 'Ploiesti',
      nr: 12
    }
  },
  {
    name: 'Marin Teodora-Maria',
    nrProd: 7,
    sum: 825,
    address: {
      city: 'Ploiesti',
      nr: 34
    }
  }
];

console.log("\n");

//combine/concatenate the 2 lists
const allClients = [...clients, ...newClients];
console.log('all clients by far:', allClients);
console.log("\n");

//update data
const updatedClient = { ...clients[0], sum: 990 };
console.log('new details for client -> ', updatedClient);
console.log('original client -> ', clients[0]);
console.log("\n");

//spread in functions
function calcTotal(...sums) {
  return sums.reduce((total, sum) => total + sum, 0);
}
//take all the sums from each client
const sums = clients.map(client => client.sum);
//final sum
const totalSum = calcTotal(...sums);
console.log('new sum is', totalSum);
console.log("\n");

//string => array
const clientName = clients[1].name;
const nameChars = [...clientName];
console.log('characters from name =', nameChars);
console.log("\n");

//set => array
const uniqueSums = new Set(clients.map(client => client.sum));
const sumsArray = [...uniqueSums];
console.log('unique sums as array ->', sumsArray);
console.log("\n");

//1.4 obj

const origClient = clients[0];

//for iteration
console.log('client details:\n');
//iteration for all infos from a client
//take by key/elem from client's details
for (let key in origClient) {
  const value = origClient[key];
  //for obj
  if (typeof value === 'object') {
    console.log(`${key}:`);
    for (let subKey in value) {
        console.log(` ${subKey}: ${value[subKey]}`);
    }
  } else {
    console.log(`${key}: ${value}`);
  }
}
console.log("\n"); 

//deep copy = parse + stringify (JSON)
const copiedClient = JSON.parse(JSON.stringify(origClient));
//new values
copiedClient.address.city = 'London';
copiedClient.sum = 870;

console.log('orig client city:', origClient.address.city); 
console.log('orig client sum:', origClient.sum); 

console.log('cop client city:', copiedClient.address.city);     
console.log('cop client sum:', copiedClient.sum);     
console.log("\n"); 

//1.5 arrays -> accessor, iteration, mutator

// 1. accessor

//still use "newClients"

//concat = combine old + new clients
const combClients = clients.concat(newClients);
console.log('update list of clients -> ', combClients);
console.log("\n"); 

//create a list and the names will be separated by ","
const clientNames = clients.map(c => c.name);
const namesString = clientNames.join(', ');
console.log('list of the clients -> ', namesString);
console.log("\n"); 

//"includes" returns boolean
console.log('check if the name is in list -> ', clientNames.includes('Mircea Elena'));
console.log('random name: ', clientNames.includes('John Cheese'), ', which is not in clients'); 
console.log("\n"); 

//find the position/index of client from the list 
//position of this client is 1 <=> clients[1], it begins from 0
console.log('for a existing client', clientNames.indexOf('Dobre Mihai-Cristian')); 
//will return -1 bc this client doesn't exist in db in "clients" (from the beginning)
console.log('random name', clientNames.indexOf('John Cheese'));          
console.log("\n");               

//take some clients from a specific range
//here take the first 2 -> (0, 2)
const first2Clients = clients.slice(0, 2);
console.log('wanted clients are: ', first2Clients);
console.log("\n");

//2. iteration: from 1.1 -> map, filter, forEach etc.

//3. mutator

//add last
clients.push({ name: 'Marinache Alexandru-Petru', nrProd: 3, sum: 120 });
console.log('after push of client => ', clients.map(c => c.name));
console.log("\n");

//delete last
const lastClient = clients.pop();
console.log('what client we remove LAST ->', lastClient.name);
console.log('clients after "pop" => ', clients.map(c => c.name));
console.log("\n");

//delete first
const firstClient = clients.shift();
console.log('what client we remove FIRST ->', firstClient.name);
console.log('clients after "shift":', clients.map(c => c.name));
console.log("\n");

//add first
clients.unshift({ name: 'Baragan Marius', nrProd: 2, sum: 75 });
console.log('after unshift an client =>', clients.map(c => c.name));
console.log("\n");

//"splice" : remove or switch

//remove 1 client from index 1
const removedClients = clients.splice(1, 1);
console.log('after splice/removed =>', removedClients[0].name);
console.log('clients [new list] => ', clients.map(c => c.name));
console.log("\n");

//switch the client 0 with NOU CLIENT=...
clients.splice(0, 1, { name: 'Nastase Ana-Maria', nrProd: 5, sum: 200 });
console.log('after replace =>', clients.map(c => c.name));
console.log("\n");

//i'll sort by the sum they used
clients.sort((a, b) => a.sum - b.sum);
console.log('the sort list is', clients.map(c => `${c.name}: ${c.sum}`));
console.log('\n');

//reverse order
clients.reverse();
console.log('reverse order of clients is', clients.map(c => c.name));
console.log("\n");

//1.6 callback & promises

//to find client by name and log if found w/ "cb"
function findClientCB(name, callback) {
  setTimeout(() => {
    const client = clients.find(c => c.name === name);
    console.log("searching client by callback:", name);
    callback(client);
  }, 1000);
}
//searching for a certain client
findClientCB("Mircea Elena", (client) => {
  if (client) {
    console.log("client", client, "was found");
  } else {
    console.log("client not found");
  }
});

//with "promise" check if client spent >= 200
function checkClientSpending(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const client = clients.find(c => c.name === name);
      if (client) {
        if (client.sum > 200) {
          resolve(`${name} spent ${client.sum} cash`);
        } else {
          reject(`${name} spent only ${client.sum} cash`);
        }
      } else {
        reject(`client ${name} not found`);
      }
    }, 1000);
  });
}

//check the client
checkClientSpending("Dobre Mihai-Cristian")
  .then(msg => console.log("promise -> msj ->", msg))
  .catch(err => console.log("promise -> err ->", err));
console.log("\n");

//1.7 async & await

function getClientCity(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const client = clients.find(c => c.name === name);
      if (client) {
        resolve(`${name} lives in ${client.address.city}`);
      } else {
        reject(`client ${name} not found`);
      }
    }, 2000);
  });
}

async function showClientCity(name) {
  console.log("getting address for client", name);
  try {
    const result = await getClientCity(name);
    console.log("result from async ->", result);
  } catch (err) {
    console.error("err from async", err);
  }
  console.log("\n");
}
//2 tests: 1 succesed & 1 failed
showClientCity("Ionescu Ana");
showClientCity("Amarascu Radu"); 
console.log("\n"); 

//1.8 closure

//for example: closure with parameter

function createGreetinginApp(greeting) {
  return function(client) {
    //"keep it mind" the "greeting" , i mean the value "greeting" will be repeating
    console.log(`${greeting}, ${client.name}! you have purchased ${client.nrProd} items.`);
  };
}

const sayHello = createGreetinginApp('hello');
clients.forEach(sayHello);
console.log("\n"); 

//1.9 useState & useRef => react

//useState = counter, initial = 0

/*
import React, { useState } from 'react';

function ClientCounter() {
  const [clients, setClients] = useState(0);

  const addClient = () => {
    setClients(clients + 1);
  };

  return (
    <div>
      <p>number of clients registered is {clients}</p>
      <button onClick={addClient}>Add client</button>
    </div>
  );
}
*/

//useRef = input elem, change value from "null"

/*
import React, { useRef } from 'react';

function LastClient() {
  const lastClientName = useRef("");

  const saveClient = (name) => {
    lastClientName.current = name;
    console.log("last client saved is", lastClientName.current);
  };

  return (
    <div>
      <button onClick={() => saveClient("Ionescu Ana")}>Save client</button>
    </div>
  );
}
*/
