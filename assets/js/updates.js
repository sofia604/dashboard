let runScripts = () =>{
    let chart_bars=document.getElementById("chart-bars");
    //console.log(chart_bars);

    let icons = document.getElementsByTagName("i");
    //console.log(icons);

    let cards = document.getElementsByClassName("card");
    //console.log(cards);
};

let modifyText = () =>{
    let listOfP = document.getElementsByTagName("p");
    console.log(listOfP)
    let elemtP = listOfP[3];
    console.log(elemtP);
    elemtP.innerHTML = "Dinero acutal";
    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 = listOfH4[0];
    elementH4.innerHTML = "$301k"
};


let updateData = () =>{
    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];  

    let [ users, clients, sales ] = data;

    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;

    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

    let listOfElements = document.getElementsByClassName('text-end pt-1') 
    let [ , second, third, fourth ] = listOfElements;
    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;

};


let cambio = () =>{
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]

    

    let porcentaje_de_cambio = (prev,next) => ((next - prev)*100/prev).toFixed(2);

    let clase_cambio = (pocentaje) => {
        let clase = pocentaje > 0 ? "text-success" : "text-danger";
        return clase
    };

    let listOfElements = document.getElementsByClassName('card-footer p-3') 

    for (var i = 0; i < 4; i++) {
         let messg = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(cambios[i].valor_previo,cambios[i].valor_actual))} font-weight-bolder"> ${porcentaje_de_cambio(cambios[i].valor_previo,cambios[i].valor_actual)}% </span> ${cambios[i].mensaje_tiempo} </p>`
         listOfElements[i].innerHTML=messg
      }
};

runScripts();
modifyText();
updateData();
cambio();