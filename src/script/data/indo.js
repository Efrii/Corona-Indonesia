function indo(){
    const url = "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com";
    
        fetch(`${url}/indonesia/`)
            .then(response => {
                return response.json(); 
            })
            .then(ambil => {
                if(ambil.error){
                    console.log(error);
                } else {
                    renderIndo(ambil[0])
                }
            })
            .catch(err => {
                console.error('error : ', err);
            }) 
    
            

    const renderIndo = (ambil)=>{
        const listIndo = document.querySelector("#Indonesia");
        listIndo.innerHTML = `
        <h2>Update Kasus Covid Indonesia</h2>
            <div class="row">
                <div class="col">
                    <div id="div1">
                        <div id="positif1">
                            <div id="POSITIF">
                                <p>POSITIF</p>
                                <span class="simg">
                                    <img class="sedih" src="../assets/images/img_positif.png">
                                </span>
                                <span class="child">
                                    <h4>${ambil.positif}</h4>
                                </span>
                            </div>                   
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div id="div2">
                        <div id="sembuh1">
                            <div id="SEMBUH">
                                <p>SEMBUH</p>
                                <span class="simg">  
                                    <img class="bahagia" src="../assets/images/img_sembuh.png">
                                </span>
                                <span class="child">
                                    <h4>${ambil.sembuh}</h4>
                                </span>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="col">
                    <div id="div3">
                        <div id="meninggal1">
                            <div id="MENINGGAL">
                                <p>MENINGGAL</p>
                                <span class="simg">
                                    <img class="berduka" src="../assets/images/img_meninggal.png">
                                </span>
                                <span class="child">
                                    <h4>${ambil.meninggal}</h4>
                                </span>
                            </div>                
                        </div> 
                    </div>
                </div>
                <div class="col">
                    <div id="div4">
                        <div id="dirawat1">
                            <div id="DIRAWAT">
                                <p>DIRAWAT</p>
                                <span class="simg">
                                    <img class="berduka" src="../assets/images/img_dirawat.png">
                                </span>
                                <span class="child">
                                    <h4>${ambil.dirawat}</h4>
                                </span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        `;
    }
}

export default indo;