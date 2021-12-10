    fetch('https://jsonplaceholder.typicode.com/users')
    .then(x=>{return x.json()})
    .then(user=>{
        console.log(user)
        for(let i=0;i<user.length;i++)
        {
            let city =user[i].address.city;
            let email =user[i].email;
            let street=user[i].address.street;
            let zipcode=user[i].address.zipcode
            

            let table= document.getElementById('tab');
            let tr=document.createElement('tr')
            tr.innerHTML='<td>'+city+'</td>'+'<td>'+email+'</td>'+'<td>'+street+'</td>'+'<td>'+zipcode+'<td>';
            table.appendChild(tr)



        }


    })
    .catch(z=>{console.log("this is error")})