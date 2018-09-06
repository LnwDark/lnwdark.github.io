let app = new Vue({
    el: "#app",
    data: {
        msg: 'ws',
        title:'ลงทะเบียน',
        name: [],
        profile: [],
    },
    created() {
        let vm = this;
        window.onload = function (e) {
            console.log('ok')
            liff.init(function (data) {
                vm.initializeApp(data);
               
            });

        };
        
    },
    methods: {
        sendMeg(){
            
        },
        initializeApp(data) {
            this.name.push(data)
            console.log(data)
            vm.getProfiles()
        },
        getProfiles() {
            let vm = this;
            liff.getProfile().then(function (pro) {
                vm.profile=pro
            }).catch(function (error) {
                window.alert("Error getting profile: " + error);
            });
        }
    }

})