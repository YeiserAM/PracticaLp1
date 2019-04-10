var i=0;
var datos = document.getElementsByTagName("tbody")[0].innerHTML;
function guardar(){
    let ubi = document.getElementById("ubicacion").value;
    let client = document.getElementById("cliente").value;
    let dni = document.getElementById("DNI").value;
    console.log(ubi);
    console.log(client);
    console.log(dni);

    datos = datos + "<tr><td>"+(i+1)+"</td><td>"+ubi+"</td><td>"
    +client+"</td><td>"+dni+"</td></tr>";
    document.getElementsByTagName('tbody')[0].innerHTML =  datos;
    document.getElementById("ubicacion").value="";
    document.getElementById("cliente").value="";
    document.getElementById("DNI").value="";
    let data = document.getElementsByTagName("td");
    alinear_tdata(data);
    i+=1;
}
function alinear_tdata(data){
    for (let i = 0; i < data.length; i++) {
        const element = array[i];
        element.classList-addEventListener('dato');
    }
}