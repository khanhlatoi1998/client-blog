/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,scss}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lobster:['Lobster'],
                dancing: [ 'Dancing Script', 'cursive']
            },

            colors: {
                color_01: '#fff',
                color_02: '#000',
                color_03: '#e5e7eb69',
                color_04: '#ffbf35',
                color_05_border: '#0000001c',
                color_06: '#ffffff54',
                color_07: '#ff4747',
                color_08: '#0000008c',
                color_09: '#191b26',
                color_10: '#ffffff26',
                color_11: '#8d8d8d',
                color_12: '#5472d2',
                color_13: '#ff7358',
                color_14: '#f8f8f8',
                color_15: '#f7941d',
                color_16: '#444C5E',
                color_fb: '#516eab',
                color_17: '#1877f2',
                color_18: '#000000b3',
            },

            fontSize: {
                lo: '1px'
            },

            minHeight: {
                '1/2': '50px',
            },

            backgroundImage: {
                'banner': "url('../public/Images/banner.jpg')",
                'login': 'linear-gradient(45deg,rgba(0,69,130,.8) 0%,rgba(38,134,146,.8) 100%)',
                'instagram': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
                'text': 'linear-gradient(to bottom,rgba(0,0,0,0) 40%,rgba(0,0,0,.7) 100%)',
            },

            boxShadow: {
                'input': "0 0 5px 1px #0000001c",
                'header': "1px 0 10px 1px #0000001c",
                'around': "0 0 10px 0 rgb(0 0 0 / 12%)",
            },

            width: {
                '100': '100px',
                '200': '200px',
                '300': '300px',
                '400': '400px',
                '500': '500px',
                '600': '600px',
                '700': '700px',
                '800': '800px',
                '900': '900px',
            },

            height: {
                '100': '100px',
                '200': '200px',
                '300': '300px',
                '400': '400px',
                '500': '500px',
                '600': '600px',
                '700': '700px',
                '800': '800px',
                '900': '900px',
            }
        },
    },
    plugins: [],
}
