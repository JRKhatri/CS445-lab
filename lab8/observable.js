const {Observable} = rxjs;

window.onload = function(){
    document.getElementById("button").onclick = function(){
      let observable = Observable.create(observer =>{
         let dataPromise = fetch('https://randomuser.me/api/?results=10');
         let bodyItem = dataPromise.then(response => response.json());
          bodyItem.then(data => {
              observer.next(data.results);
              observer.complete();
          })
          

        });
        observable.subscribe(dataArray =>{
            const employeeList = document.getElementById("employee-list");
            employeeList.innerHTML ="";
            dataArray.forEach(element => {
                let template = `
                <div class="col">
                ${element.name.first} ${element.name.last}
                </div>
                <div class="col">
                <h4>Location</h4>
                <p>${element.location.street.number} ${element.location.street.name}</p>
                <p> ${element.location.city}, ${element.location.state} ${element.location.country} ${element.location.postcode}</p>

                    </div> 
                `;
                const div = document.createElement('div');
                div.innerHTML = template;
                employeeList.appendChild(div)

                
            })

        })
    }
}