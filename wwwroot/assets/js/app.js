var app = new Vue({
    el: 'body',
    data: {
        sitename: 'Site Name',
        menulist: {
            0:{
                name: 'One',
                url: '#one',
                classs: 's'
            },
            1:{
                name: 'Two',
                url: '#two',
                classs: 'c'
            } 
        },
        columns: {
            0:{
                text: 'Column One'
            },
            1:{
                text: 'Column Two'
            },
            2:{
                text: 'Column Three'
            },
            3:{
                text: 'Column Four'
            }  
        }
    }
    
})