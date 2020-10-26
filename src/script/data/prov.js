function prov(){
    const url = "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com";
    fetch(`${url}/indonesia/provinsi/`)
        .then(response => {
            return response.json(); 
        })
        .then(ambil => {
            if(ambil.error){
                console.log(error);
            } else {
                for(var i=0;i<ambil.length; i++){
                    renderPro(ambil[i].attributes)
                }
            }
        })
        .catch(err => {
            console.error('error : ', err);
        }) 

    const renderPro = (ambil) => {
        const listIndo = document.querySelector("#body");
        listIndo.innerHTML += `
            <tr>
                <td scope="col">${ambil.Provinsi}</td>
                <td scope="col">${ambil.Kasus_Posi}</td>
                <td scope="col">${ambil.Kasus_Semb}</td>
                <td scope="col">${ambil.Kasus_Meni}</td>
            </tr>
        `;
    }
}

export default prov;