<template>
    <div class="row place-item-block">
        <div class="col-4 col-sm-6 place-item-time">
            <p class="item-time">{{ placeItemData.hours | timeFilter }} <span class="time-minutes">{{ placeItemData.min | timeFilter }}</span></p>
        </div>
        <div class="col-8 col-sm-6 place-item-value" :class="{ active: isActive }">
            <div class="item-value-container">
                <span class="item-value">{{ placeValue | valueFilter }}</span>
                <button v-if="isActive" class="item-button" value="myValue" v-on:click.prevent="selectTime">Заказать онлайн</button>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                placeValue: 0,
                isActive: false
            }
        },
        props: ['placeItemData'],
        components:{
            //'other-component':OtherComponent
        },
        mounted: function () {
            this.mount();
        },
        methods: {
            mount: function () {
                this.placeValue = +this.placeItemData.value;
                if (this.placeValue > 0) {
                    this.isActive = true;
                }
                //this.orderLink = 'http://m10?cityFrom=' + this.placeItemData.cityFrom + '&cityTo=' + this.placeItemData.cityTo;
            },
            selectTime: function (event) {
                console.log ('Время выбрано');
                //event.preventDefault();
                this.$emit('select-time', this.placeItemData);
            }
        },
        filters: {
            valueFilter: function(value) {
                if (+value == 0) return 'Нет мест'
                if (+value > 3) return '+3'
                return value
            },
            timeFilter: function (value) {
                if (+value < 10) return '0' + value
                return value
            }
        }
    }
</script>
