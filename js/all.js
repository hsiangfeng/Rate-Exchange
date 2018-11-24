var wrap = new Vue({
    el: '#wrap',
    data: {
        NT: 0,
        US: 30.475,
        JPY: 0.2645,
        CNY: 4.356,
        HKD: 3.781,
        dateTime: '2018/11/24-AM:10:48'
    },
    computed: {
        japan: function() {
            return this.NT / this.JPY;
        },
        usa: function(){
            return this.NT / this.US;
        },
        china:function(){
            return this.NT / this.CNY;
        },
        hk:function(){
            return this.NT / this.HKD;
        }
    }
});