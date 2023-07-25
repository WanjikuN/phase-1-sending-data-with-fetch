// Add your code here
let body = document.querySelector('body');
const submitData = () => {
    
    let newObj = {
      name: "Steve",
      email: "steve@steve.com"
    };
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
          },
      body: JSON.stringify(newObj)
    })
    .then(resp => resp.json())
    .then(d => {
        
        let p = document.createElement('p')
        p.textContent = d.id;
        body.appendChild(p)
        // listy is an error
    listy()
    } 
        )
    .catch(err => {
        let p1 = document.createElement('p')
        let msg = "Unauthorized Access"
        p1.textContent = msg
        body.appendChild(p1)
        
            // document.body.innerHTML += err.msg
         
    })
  };
  
  submitData();
