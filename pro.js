
// console.log('Hello World');

// const password='pass123';

// const input='pass1234';

// const input='pass123';
// const iscorrectpassword= password==input;

// console.log(iscorrectpassword);


// const iscorrect=false;

// if(iscorrect){

//     console.log('T')
// }

// else{

//     console.log('F');
// }

// for(let i=0; i<=5; i++){

//     console.log(i);
// }



// const nameList=['Nimal','Sawdha','John','Fathima']

// console.log(nameList);

// console.log(nameList[1])


// let i=10
// let j=20

// function square(number){

//     console.log('Number is Multiplying');

//     return number * number
// }

// let sum= square(i) + square(j)

// let iSquared = square(i) 

// console.log(iSquared)




// //Json name list



// let key ="5f44eafd"

// function search(){

//     let movie=document.getElementById("searchBar").value
//     console.log(movie);


//     const htmlRequest = new XMLHttpRequest()

//     const link= "http://www.omdbapi.com/?apikey=5f44eafd&t="+movie

//     htmlRequest.open("GET",link)


//     htmlRequest.send()

//     htmlRequest.responseType='json'


//     htmlRequest.onload = function(){

//         console.log(htmlRequest.response)

//         const content=document.getElementById("content")
//         const imageTag=document.createElement("img")
//         imageTag.src=htmlRequest.response.Poster

//         while(content.firstChild){

//             content.removeChild(content.firstChild)
//         }

//         content.appendChild(imageTag)

//         const Title=document.getElementById('Title')
//         Title.innerHTML=htmlRequest.response.Title
//     }
// }