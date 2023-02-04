//---1º---//
let exibir = ["Arroz","Feijão","Carne","Salada","Suco"]
console.log(exibir)

//---2º---//

exibir.unshift("Batata")
console.log(exibir)

//---3º---//

exibir.pop()
console.log(exibir)

//---4º---//

exibir.push("Ovo","Pão")
console.log(exibir)

//---5º---//

exibir.shift()
console.log(exibir)

//---6º---//

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

//---7º---//

let objeto = [
    {
        nome:"Vinicius",
        idade:"23",
       cidade:"Salvador"
    }
]
 console.log(objeto)

//---8º---//

 objeto.estado = "Bahia"
 console.log(objeto)
 console.log(objeto.estado)

 //---9º---//

 delete objeto.estado
 console.log(objeto)

 //---10º---//

 console.log(objeto[0])
 

 //---11º---//

 cadastro = [  {
    nome: "João",
   idade: 35,    
   telefone: "999",    
   amigos: ["Maria", "José", "Joy", "Pedro"]
  },
  {
    nome: "Maria",
    idade: 30,
    telefone: "888",
    amigos: ["João", "José", "Joy", "Manoel"]
  },
  {
    nome: "José",
    idade: 40,
    telefone: "777",
    amigos: ["Joy", "Maria", "João", "Pedro"]
  },
  {
    nome: "Ana",
    idade: 25,
    telefone: "666",
    amigos: ["Alex", "Maria", "João", "Marcos"]
  },
  {
    nome: "Pedro",
    idade: 20,
    telefone: "555",
    amigos: ["Ana", "Maria", "José", "Carlos"]
  }
]

 //---12º---//

 console.log(cadastro[0]["amigos"][0]);
 console.log(cadastro[1]["amigos"][0]);
 console.log(cadastro[2]["amigos"][0]);
 console.log(cadastro[3]["amigos"][0]);
 console.log(cadastro[4]["amigos"][0]);
