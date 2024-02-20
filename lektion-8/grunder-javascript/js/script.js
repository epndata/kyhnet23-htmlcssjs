/* 
    datatyper i javascript 
    ---------------------------------------------------
    string          för text
    number          för heltal och decimaltal
    boolean         för true/false
    null            för nullvärde
    object          för objekt, listor/arrayer och null
    undefined       för variabler som saknar någon datatyp

    deklarering av variabler i javascript
    ---------------------------------------------------
    name = "Hans"
    var name = "Hans"
    let name = "Hans"       <-- gör så här
    const name = "Hans"     <-- gör så här

    skriva text-strängar
    --------------------------------------------------
    let name = "Hans"
    let name = 'Hans'
    let name = `Hans`      (shift + ´)

    placeholders
    ---------------------------------------------------
    let text = "Hej" + name + ". Allt bra med dig?"
    let text = `Hej ${name}. Allt bra med dig?`

    listor
    ----------------------------------------------------
    let list = ["Hans", "Tommy", "Joakim"]

    list.push("Therése")           <-- lägger till i slutet av listan
    list.pop()                     <-- tar bort sista i listan
    list.unshift("Therése")        <-- lägger till i början av listan
    list.shift("Therése")          <-- tar bort första i listan

    loopar
    -----------------------------------------------------
    let list = ["Hans", "Tommy", "Joakim"]

    list.forEach(item => console.log(item))

    for (let item of list) {
        console.log(item)
    }

    for (let i=0; i < list.length; i++) {
         console.log(list[i])       
    }

    let count = 0;
    while(count < 10) {
        console.log(count)
        count++
    }

    let count = 0;
    do {
        console.log(count)
        count++
    } while(count < 10)


    if-satser och switch
    ---------------------------------------------------
    12 == "12"          <-- gör inte == använd ===
    12 != "13"          <-- gör inte != använd !==
                        === och !== kollar värde och datatyp
    
    if (value_1 === value_2) {}
    
    if (value_1 === value_2) {}
    else {}
    
    if (value_1 === value_2) {}
    else if (value_1 === value_3) {}
    else {}
    
    (value_1 === value_2) ? "sant" : "falskt"


    let value = "1";
    switch (value) {
        case "1":
            console.log("value is 1")
            break
        case "2":
            console.log("value is 2")
            break
        default:
            console.log('default value')
    }

    functioner
    -----------------------------------------------------
    function getUsers() {
        let list = ["Hans", "Tommy", "Joakim"]
        return list
    }

    const getUsers = () => {
        let list = ["Hans", "Tommy", "Joakim"]
        return list
    }

    function logMessage(message) {
        console.log(message)
    }

    const logMessage = (message) => {
        console.log(message)
    }

    DOM manipulering (document object model)
    ------------------------------------------------------------------------------------------------
    HTML:       <div id="result"></div>
    
    JS:         const element = document.getElementById('result')
    JS:         const element = document.querySelector('#result')

    const list = ["Hans", "Tommy", "Joakim"]
    const element = document.querySelector('#result')

    list.forEach(item => {
        element.innerHTML += 
        `
        <div class="card m-2">
            <div class="card-body">${item}</div>
        </div>
        `
    })


    EventListeners
    ----------------------------------------------------------------
    document.getElementById('btn-menu').addEventListener('click', () => {
        const button = document.getElementById('btn-menu')
        const menu = document.querySelector("#menu")
        menu.classList.toggle('hide')

        if (menu.classList.contains('hide')) {
        button.innerText = 'visa mer' 
        
        } else {
            button.innerText = 'dölj'
        }
    })


    function toggleFooter(index) {
        const element = document.getElementById(`cf-${index}`)
        element.classList.toggle('hide')
    }

    function displayData() {
        try {
            const list = ["Hans", "Tommy", "Joakim"]
            const element = document.querySelector('#result')
        
            list.forEach((item, index) => {
                element.innerHTML += 
                `
                <div class="card m-2">
                    <div class="card-body">
                        <button onclick="toggleFooter(${index})">Visa</button>
                        <div id="cf-${index}" class="card-footer hide">${item}</div>
                    </div>
                </div>
                `
            })
        }
        catch {}
    }


    displayData()
*/
