var app = new Vue({
    el: 'body',
    data: {
        sitename: 'LP',
        menulist: {
            0: {
                name: 'Inicio',
                url: '#inicio',
                classs: 's'
            },
            1: {
                name: 'Proyectos',
                url: '#proyectos',
                classs: 'c'
            },
            2: {
                name: 'Sobre Mí',
                url: '#sobremi',
                classs: 'c'
            },
            3: {
                name: 'Contacto',
                url: '#contacto',
                classs: 'c'
            }
        },
        columns: {
            0: {
                text: 'Column One'
            },
            1: {
                text: 'Column Two'
            },
            2: {
                text: 'Column Three'
            },
            3: {
                text: 'Column Four'
            }
        }
    },
    methods: {
    }
    
});
