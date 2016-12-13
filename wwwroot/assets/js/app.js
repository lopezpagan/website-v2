var app = new Vue({
    el: 'body',
    data: {
        sitename: 'Site Name',
        menulist: {
            0: {
                name: 'Start',
                url: '#start',
                classs: 's'
            },
            1: {
                name: 'Hero Section',
                url: '#hero-section-view',
                classs: 'c'
            },
            2: {
                name: 'First Section',
                url: '#first-section-view',
                classs: 'c'
            },
            3: {
                name: 'Last Section',
                url: '#last-section-view',
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
