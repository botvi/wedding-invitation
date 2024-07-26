export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Alek Lifantoro',
            child: 'Putra ke 4',
            father: 'Marsandi',
            mother: 'Khotimah',
            image: './src/assets/images/wedd_memlaki.jpg'
        },
        P: {
            id: 2,
            name: 'Santa Destia Wati, S.E',
            child: 'Putri ke 4',
            father: 'Parlindungan Simamora',
            mother: 'Rohanah',
            image: './src/assets/images/wedd_memperem.jpg'
        },

        couple: './src/assets/images/5.jpg'
    },

    time: {
        marriage: {
            year: '2024',
            month: 'Agustus',
            date: '19',
            day: 'Senin',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2024',
            month: 'Agustus',
            date: '20',
            day: 'Selasa',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Akad Dikediaman mempelai perempuan di desa kuantan sako & Resepsi Dikediaman mempelai pria desa hulu teso blok E'
    },

    link: {
        calendar: 'https://calendar.app.google/2BqDMSPmtQeQtffC8',
        map: 'https://maps.app.goo.gl/Cf8erggqzSbtuQ6B9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpg'
        }
    ],

    bank: [
        {
            id: 2,
            name: 'SANTA DESTIA WATI',
            icon: './src/assets/images/bri.png',
            rekening: '764601006341534'
        },
    ],

    audio: './src/assets/audio/bgm.mp3',

    api: 'https://script.google.com/macros/s/AKfycbw20dzmJFBhCGIOMJXuKadQa9HQkABtLK47t-SWU9JMLeR25NiU5vF1Dxk0I3k_HmSZCQ/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}