let app = new Vue({
    el: "#app",
    data: {
        msg: 'ws',
        title: 'ลงทะเบียน',
        name: [],
        userId: '',
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
        initializeApp(data) {
            let vm = this;
            vm.name.push(data)
            vm.userId = data.context.userId;
            console.log(data)
        },
        getProfiles() {
            let vm = this;
            liff.getProfile().then(function (pro) {
                vm.profile = pro
            }).catch(function (error) {
                window.alert("Error getting profile: " + error);
            });
        },
        Success() {
            let richMenuId = 'richmenu-f971804c0d3036f376351d804fa582af'
            // let userId = this.userId;
            let userId = 'U0497635dd80ac997554582f8dac5e9cc'
            let channelAccessToken = 'Bx004QWDFqOEh8K8RKfZlW5LVZNwdYvCGJK2AWNwhwjhKWvv8hmgBrOuiB/sXJNj1WQkn+0kwIxnEr0L8D8zseB70do4R/Pjs/UuxApg4lm728mSokfwgt1oncvUTcpwIML8wYGKv9j8SwylAixN9gdB04t89/1O/w1cDnyilFU='

            const url = `https://api.line.me/v2/bot/user/${userId}/richmenu/${richMenuId}`
            axios.get('https://api.line.me/v2/bot/richmenu/list', {
                    headers: {
                        Authorization: 'Bearer{Bx004QWDFqOEh8K8RKfZlW5LVZNwdYvCGJK2AWNwhwjhKWvv8hmgBrOuiB/sXJNj1WQkn+0kwIxnEr0L8D8zseB70do4R/Pjs/UuxApg4lm728mSokfwgt1oncvUTcpwIML8wYGKv9j8SwylAixN9gdB04t89/1O/w1cDnyilFU=}',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then(function (response) {
                    alert(response)
                    console.log(response);
                })
                .catch(function (error) {
                    alert(error)
                    console.log(error);
                });
        }
    }

})