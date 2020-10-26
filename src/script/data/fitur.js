import Swal from 'sweetalert2';

document.getElementById("blog").addEventListener("click", blog);
document.getElementById("about").addEventListener("click", blog);
document.getElementById("contact").addEventListener("click", question);

function blog(){
    Swal.fire({
        icon: 'info',
        title: 'Mohon Maaf..',
        text: 'Halaman Masih Dalam Tahap Pengembangan',
    });
}


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
                html: `
                Terimakasih sudah meluangkan waktu untuk mengisi 
                `,
                confirmButtonText: '<a href="https://covid19.go.id" target="_blank">Web Resmi</a>',
                cancelButtonText: '<a href="tel:199" target="_blank">Hotline</a>'
            })
            }
    })
} 
