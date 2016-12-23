var app = new Vue({
    el: 'body',
    data: {
        header: [],
        start: [],
        proposition: [],
        projects: [],
        value: [],
        about: [],
        contact: [],
        footer: []
    },    
    created: function() {
        this.getSiteData();
    },
    methods: {
        getSiteData: function(){
            var dataUrl = 'content/site-data.json';
            this.$http.get(dataUrl)
                .then(function(res) {
                    this.header = res.data.head;
                    this.start = res.data.start;
                    this.proposition = res.data.proposition;
                    this.projects = res.data.projects;
                    this.value = res.data.value;
                    this.about = res.data.about;
                    this.contact = res.data.contact;
                    this.footer = res.data.footer;
                })
                .then(function() {
                    var imported = document.createElement('script');
                        imported.src = 'assets/js/interaction.js';
                        document.head.appendChild(imported);
                    
                });
        }
    }
    
});
