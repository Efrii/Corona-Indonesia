import Swal from 'sweetalert2';
class AppBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML =  `
        <style>
            .header{
                margin: 0;
                font-size: 18px;
                padding-bottom: 20px;
                padding-top: 20px;
                background-color: #26a69a;
                text-align: center;
                color: #fff;
            }
            .row {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                margin: auto;
                width: 100%;
                height: 350px;
            }
            .img{
                position: absolute;
                width: auto;
                max-width: 570px;
                top: -100px;
            }
            .col {
                -ms-flex-preferred-size: 0;
                flex-basis: 0;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                max-width: 100%;
                height: 350px;
            }
            .container {
                padding-right: 50px;
                padding-left: 50px;
                padding-top: 20px;
                margin-right: auto;
                margin-left: auto;
                background-color: #26a69a;
                color: #fff;
                height: 350px;
            }
            .container1{
                margin: auto;
            }
            @media screen and (max-width: 398px) {
                .container{
                    height: 195px;
                    padding: 10px;
                    padding-top: 0px;                   
                    margin-top: 50px;
                }
                .img{
                    max-width: 200px;
                    top: 20px;
                    right: 0.001em;
                }
                .col .text{
                    font-size: 0.63rem;
                    margin-right: 22px;
                }
                .col h1{
                    font-size: 0.89rem;
                }
                .col .btn{
                    font-size: 0.4rem;
                }
            }
            @media screen and (min-width: 399px) {
                .container{
                    height: 210px;
                    padding: 10px;
                    padding-top: 0px;
                    margin-top: 50px;
                }
                .img{
                    max-width: 200px;
                    top: 20px;
                    right: 0.001em;
                }
                .col .text{
                    font-size: 12px;
                    margin-right: auto;
                }
                .col h1{
                    font-size: 1.1rem;
                }
                .col .btn{
                    font-size: 0.5rem;
                }
            }
            @media screen and (min-width: 400px) {
                .container{
                    height: 220px;
                    padding: 10px;
                    padding-top: 0px;
                    margin-top: 50px;
                }
                .img{
                    max-width: 200px;
                    top: 20px;
                    right: 0.001em;
                }
                .col .text{
                    font-size: 12px;
                    margin-right: auto;
                }
                .col h1{
                    font-size: 1.2em;
                }
                .col .btn{
                    font-size: 0.57rem;
                }
            }
            @media screen and (min-width: 558px) {
                .container{
                    height: 210px;
                    padding: 20px;
                    padding-top: 0px;
                    margin-top: 50px;
                }
                .img{
                    max-width: 260px;
                    top: 20px;
                    right: 50px;
                }
                .col .text{
                    font-size: 0.82rem;
                    margin-right: auto;
                }
                .col h1{
                    font-size: 1.2em;
                }
                .col .btn{
                    font-size: 0.65rem;
                }
            }
            @media screen and (min-width: 961px) {
                .container{
                    height: 310px;
                    padding: 20px;
                    padding-top: 0px;
                    margin-top: 50px;
                }
                .img{
                    max-width: 420px;
                    top: 0px;
                    right: 100px;
                }
                .col .text{
                    font-size: 1.5rem;
                    margin-right: auto;
                }
                .col h1{
                    font-size: 1.9rem;
                }
                .col .btn{
                    font-size: 1rem;
                }
            }
            .text{
                top: 10px;
                font-size: 16px;
                margin-right: 120px;
            }            
            .btn {
                display: inline-block;
                font-weight: 400;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                border: 1px solid transparent;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                line-height: 1.5;
                border-radius: 10px;
                transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }            
            .btn-warning {
                color: #212529;
                background-color: #ffc107;
                border-color: #ffc107;
            }            
            .btn-warning:hover {
                color: #212529;
                background-color: #e0a800;
                border-color: #d39e00;
            }            
        </style>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div>
                            <h1>Waspadai Covid-19</h1>
                            <p class="text">Laporkan dan konsultasi ke rumah sakit rujukan terdekat jika anda atau
                            kerabat anda terindikasi gejala Covid-19</p>
                        </div>
                        <div class="container1">
                            <div class="row">
                                <div class="col">
                                    <div>
                                        <a href="https://covid19.go.id" target="_blank" id="contact">
                                            <span type="button" class="btn btn-warning" >Info Lebih Lanjut</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col">
                                <div>
                                    <a href="https://www.youtube.com/watch?v=bZ2OcvBgMQk&t=132s" target="_blank" id="question">
                                        <span type="button" class="btn btn-warning" >Tonton Video</span>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <img class="img" src="../assets/images/img_dokter.png" alt="img_dokter">
                    </div>
                </div>
            </div>            
        </div>
    <script>
document.getElementById("contact").addEventListener("click", question);

function question(){
    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
        resolve({
            'Ya': 'Ya',
            'Tidak': 'Tidak'
        })
        }, 1000)
    })
        Swal.mixin({
            input: 'radio',
            inputOptions: inputOptions,
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1','2','3','4','5']
        }).queue([
            {
            title: 'Question 1',
            text: 'Apakah anda saat ini sedang merasakan demam'
            },
            {
                title: 'Question 2',
                text: 'Apakah anda saat ini sedang merasakan batuk/pilek'
            },
            {
                title: 'Question 3',
                text: 'apakah ada saat ini sedang merasa kesulitan bernafas atau sesak nafas'
            },       
            {
                title: 'Question 5',
                text: 'apakah anda memiliki riwayat kontak erat dengan penderita terkonfirmasi COVID-19'
            },   
            {
            title: 'Question 6',
            text: 'apakah anda memiliki riwayat perjalanan ke luar negeri atau perjalanan ke daerah penularan COVID-19'
            }, 
        ]).then((result) => {
            if (result.value) {
            const answers = JSON.stringify(result.value)
            Swal.fire({
                title: 'All done!',
                showCancelButton: true,
                cancelButtonColor: '#008000',
                html: '
                Terimakasih sudah meluangkan waktu untuk mengisi 
                ',
                confirmButtonText: '<a href="https://covid19.go.id" target="_blank">Web Resmi</a>',
                cancelButtonText: '<a href="tel:199" target="_blank">Hotline</a>'
            })
            }
    })
} 
    </script>`;
    }
}

customElements.define("app-bar", AppBar);