<template>
    <div class="form-block">
        <div class="reklama-container">
            <div class="reklama-item">
                <a href="http://mozyr-kiev-express.by">
                    <p class="card-header">Новый маршрут!</p>
                    <p class="card-body">Мозырь-Киев-Мозырь</p>
                </a>
            </div>
        </div>
        <p class="select-route-container">Выберите направление:</p>
        <div class="row route-list" :key="routeList.length">
            <div class="col-6 col-md-4" v-for="routeItem in routeSortedList">
                <div class="card route-item" @click="changeRoute(routeItem)">
                    <div class="card-header">
                        {{ routeItem.CityFrom }} - {{ routeItem.CityTo }}
                    </div>
                    <div class="card-body">
                        В пути {{ routeItem.DistanceTime }}
                    </div>
                </div>
            </div>
        </div>
        <p class="section-title">{{ currCityFrom }} - {{ currCityTo }}</p>
        <places-block class="col-12" :city-from="currCityFrom" :city-to="currCityTo" block-id="0" :route-id="currRouteId" :token="token" :token-key="tokenKey"></places-block>
        <!--places-block class="col-12 col-lg-6" city-from="Гомель" city-to="Мозырь" block-id="1" route-id="ed254dcc-2a8f-443a-855b-f0303836016d" route-reverse-id="2a989739-f20c-4f64-b8a3-3c95724133c3"></places-block-->
    </div>
</template>
<script>
    import PlacesBlock from './PlacesBlock.vue'

    export default{
        data(){
            return{
                requestString:'',
                responceData: {},
                routeList: [],
                routeSortedList: [],
                currRouteId: '2a989739-f20c-4f64-b8a3-3c95724133c3',
                currCityFrom: 'Мозырь',
                currCityTo: 'Гомель'

            }
        },
        props: {
            token: {
                type: String,
                required: true
            },
            tokenKey: {
                type: String,
                required: true
            }
        },
        components:{
            'places-block': PlacesBlock
        },
        mounted: function () {
            axios({
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: {
                    [this.tokenKey]: this.token
                },
                url: '/api/routes'
            })
            .then(this.parseRoutes);
        },
        methods: {
            parseRoutes: function (responce) {
                this.responceData = JSON.parse(responce.data);

                this.responceData.forEach(function(item) {
                    this.routeList.push(item);
                }, this);

                this.routeList = this.routeList.filter(function (item, i) {
                    return !(item['CityFrom'] == 'Киев' || item['CityTo'] == 'Киев');
                });

                this.routeList = this.routeList.sort(function (a, b) {
                    if (+a['Name'] > +b['Name']) {
                        return 1;
                    } else {
                        return -1;
                    }
                });

                this.routeList.map(function(item) {
                    if (item['CityFrom'] == 'Мозырь') {
                        this.routeSortedList.push(item);
                        var tempVar = this.routeList.find(function (routeItem) {
                            return routeItem['CityFrom'] == item['CityTo'];
                        }, this);
                        if (tempVar != undefined) this.routeSortedList.push(tempVar);
                    }
                }, this);
                //console.log ('Маршруты отстрртированы');
            },
            changeRoute: function (route) {
                //console.log ('Поменять маршрут');
                this.currRouteId = route.ID;
                this.currCityFrom = route.CityFrom;
                this.currCityTo = route.CityTo;
                //console.log ('Маршрут изменен');
            }
        }
    }
</script>
