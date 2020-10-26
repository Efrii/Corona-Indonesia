class Footer extends HTMLElement{
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
            .container p{
                text-align: center;
            }            
            .footer-info {
                padding: 5px;
                color: white;
                background-color: #26a69a;
            }
            .row {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                margin: auto;
            }
            .col{
                -ms-flex-preferred-size: 0;
                flex-basis: 0;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                max-width: 100%;
                position: relative;
                width: 100%;
                min-height: 1px;
                padding-right: 15px;
                padding-left: 15px;
            }
            .icon{
                width: 10%; 
                max-width: 100%;
                margin-top: 10px;
            }
            .col .icon{
                margin-left: auto;
                margin-right: auto;
                display: block;
            }
            @media screen and (max-width: 450px) {
                .icon{
                    width: 15%;
                }
            }        
        </style>
        <div class="footer-info">
        <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="https://www.instagram.com/efrii__/" target="_blank" rel="noopener noreferrer">
                            <span>
                                <img class="icon" src="../assets/images/icon-ig.png" alt="Icon_instagram">
                            </span>
                        </a>
                    </div>
                <div class="col">
                    <a href="https://codepen.io/Efrii" target="_blank" rel="noopener noreferrer">
                        <span>
                            <img class="icon" src="../assets/images/icon_codepen.png" alt="Icon_codepen">
                        </span>
                    </a>
                </div>
                <div class="col">                
                    <a href="https://www.facebook.com/efrii.xrmblx" target="_blank" rel="noopener noreferrer">
                        <span>
                                <img class="icon" src="../assets/images/icon_facebook.png" alt="icon_facebook">
                        </span>
                    </a>                    
                </div>
            </div>
                <p class="copyright">&copy; Copyright 2020 Teguh Efriyanto</p>
            </div>
        </div>    
        `;
    }
}

customElements.define("footer-info", Footer);