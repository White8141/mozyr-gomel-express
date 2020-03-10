<template>
    <div class="places-block">
        <div class="places-control card">
            <!--div class="card-header">{{ cityFrom }} - {{ cityTo }}</div-->
            <div class="card-body">
                <div class="row">
                    <div class="col-2 places-control-list">
                        <input type="text" :id="datepickerId" class="datepicker-here" readonly>
                        <label :for="datepickerId">
                            <img class="datepicker-icon" src="/img/09.jpg" alt="Calendar">
                        </label>
                    </div>
                    <div class="col-6 places-control-list list-item-0" :class="{selected: isDay0Select}"   v-on:click="changeViewDay(0)">
                        <p class="date-text">{{ day0Date }}</p>
                        <p class="day-text">{{ listDateArray[0]['day'] }}</p>
                    </div>
                    <div class="col-2 places-control-list list-item-1" :class="{selected: isDay1Select}"   v-on:click="changeViewDay(1)">
                        <p class="date-text">{{ day1Date }}</p>
                        <p class="day-text">{{ listDateArray[1]['day'] }}</p>
                    </div>
                    <div class="col-2 places-control-list list-item-2" :class="{selected: isDay2Select}"   v-on:click="changeViewDay(2)">
                        <p class="date-text">{{ day2Date }}</p>
                        <p class="day-text">{{ listDateArray[2]['day'] }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="places-list">
            <h4>Список свободных мест {{ currViewDate.getDate() | dateFilter }}.{{ 1 + currViewDate.getMonth() | dateFilter }}.{{ currViewDate.getFullYear() }}</h4>
            <div v-if="isPreloaderVisible" class="preloader">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div v-if="isListEmpty" class="place-list">
                <p class="place-list-empty">Свободных мест для бронирования онлайн не осталось. Для бронирования места <a class="modal-link" data-toggle="modal" href="#phoneCall" aria-expanded="false" aria-controls="phoneCall">позвоните</a> нашему оператору, он Вам поможет.</p>
            </div>
            <form v-else action="http://online.m10.by/"      method="post" class="place-list" :name="routeId" :key="routeId">
            <!--form v-else action="http://m10/"      method="post" class="place-list" :name="routeId" :key="routeId"-->
                <input type="hidden" :name="tokenKey"   :value="token"/>
                <input type="hidden" name="routeId"     :value="routeId"/>
                <input type="hidden" name="cityFrom"    :value="cityFrom"/>
                <input type="hidden" name="cityTo"      :value="cityTo"/>
                <input type="hidden" name="date"        value=""/>
                <input type="hidden" name="time"        value=""/>
                <input type="hidden" name="tripList"    value=""/>
                <input type="hidden" name="tripId"      value=""/>
                <place-item v-for="currPlace in currPlaceList" :place-item-data="currPlace" v-on:select-time="selectTime" :key="currPlace.tripID"></place-item>
                <!--p class="place-list-warning">Временно недоступен</p-->
            </form>
        </div>
    </div>
</template>
<script>
    import PlaceItem from './PlaceItemBlock.vue'

    export default{
        data(){
            return{
                datepickerId: '',
                day0Date:'',
                day1Date:'',
                day2Date:'',
                isDay0Select: true,
                isDay1Select: false,
                isDay2Select: false,
                dayNameArray: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', 'Пн', 'Вт'],
                currDate: new Date(),
                startViewDate: new Date(),
                currViewDate: new Date(),
                currViewTime: '',
                listDateArray: [],
                isListEmpty: false,
                isPreloaderVisible: true,
                //placeListArray: [],
                currPlaceList: [],
                tempPlaceList: [],
                currPlaceListKey: '',
                requestString: '',
                responceData: []
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
            },
            blockId: {
                type: String,
                required: true
            },
            routeId: {
                type: String,
                required: true
            },
            cityFrom: {
                type: String,
                required: true
            },
            cityTo: {
                type: String,
                required: true
            }
        },
        components:{
            'place-item': PlaceItem
        },
        filters: {
            dateFilter: function (value) {
                if (value < 10) return '0' + value
                return value
            }
        },
        created: function () {
            this.init();
        },
        mounted: function () {
            this.mount();
        },
        methods: {
            init: function () {
                this.datepickerId = 'calendarDatepicker' + this.blockId;

                this.listDateArray = [];
                this.listDateArray[0] = {'year': this.startViewDate.getFullYear(), 'month': this.startViewDate.getMonth(), 'date': this.startViewDate.getDate(), 'day': this.dayNameArray[this.startViewDate.getDay()]};
                this.startViewDate.setDate(this.startViewDate.getDate() + 1);
                this.listDateArray[1] = {'year': this.startViewDate.getFullYear(), 'month': this.startViewDate.getMonth(), 'date': this.startViewDate.getDate(), 'day': this.dayNameArray[this.startViewDate.getDay()]};
                this.startViewDate.setDate(this.startViewDate.getDate() + 1);
                this.listDateArray[2] = {'year': this.startViewDate.getFullYear(), 'month': this.startViewDate.getMonth(), 'date': this.startViewDate.getDate(), 'day': this.dayNameArray[this.startViewDate.getDay()]};
                this.startViewDate.setDate(this.startViewDate.getDate() - 2);

                this.day0Date = this.listDateArray[0]['date'] + ', Сегодня';
                this.day1Date = this.listDateArray[1]['date'];
                this.day2Date = this.listDateArray[2]['date'];

                this.currPlaceListKey = this.currDate.toDateString();
            },
            mount: function () {
                $('#' + this.datepickerId).datepicker({
                    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня, максимум на 2 недели вперед
                    minDate: new Date(),
                    maxDate: new Date (+this.currDate.getFullYear(),  +this.currDate.getMonth(), 14 + this.currDate.getDate()),
                    onSelect: this.selectStartViewDay
                });

                //this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + this.currDate.getDate() + '.' + (1 + this.currDate.getMonth()) + '.' + this.currDate.getFullYear() + ' 00:00:00/' + this.currDate.getDate() + '.' + (1 + this.currDate.getMonth()) + '.' + this.currDate.getFullYear() + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
                this.axiosRequest(this.currDate);
            },
            selectStartViewDay: function (fd, date, inst) {
                this.startViewDate = new Date (date.toDateString());
                this.currViewDate = new Date (date.toDateString());

                this.listDateArray[0] = {'year': this.startViewDate.getFullYear(), 'month': this.startViewDate.getMonth(), 'date': this.startViewDate.getDate(), 'day': this.dayNameArray[this.startViewDate.getDay()]};
                this.startViewDate.setDate(this.startViewDate.getDate() + 1);
                this.listDateArray[1] = {'year': this.startViewDate.getFullYear(), 'month': this.startViewDate.getMonth(), 'date': this.startViewDate.getDate(), 'day': this.dayNameArray[this.startViewDate.getDay()]};
                this.startViewDate.setDate(this.startViewDate.getDate() + 1);
                this.listDateArray[2] = {'year': this.startViewDate.getFullYear(), 'month': this.startViewDate.getMonth(), 'date': this.startViewDate.getDate(), 'day': this.dayNameArray[this.startViewDate.getDay()]};
                this.startViewDate.setDate(this.startViewDate.getDate() - 2);

                if (this.listDateArray[0]['date'] == this.currDate.getDate() && this.listDateArray[0]['month'] == this.currDate.getMonth()) {
                    this.day0Date = this.listDateArray[0]['date'] + ', Сегодня';
                } else {
                    this.currDate.setDate(this.currDate.getDate() + 1);
                    if (this.listDateArray[0]['date'] == this.currDate.getDate() && this.listDateArray[0]['month'] == this.currDate.getMonth()) {
                        this.day0Date = this.listDateArray[0]['date'] + ', Завтра';
                    } else {
                        this.day0Date = this.listDateArray[0]['date'];
                    }
                    this.currDate.setDate(this.currDate.getDate() - 1);
                };
                this.day1Date = this.listDateArray[1]['date'];
                this.day2Date = this.listDateArray[2]['date'];

                this.isDay0Select = true;
                this.isDay1Select = false;
                this.isDay2Select = false;

                //this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + this.currViewDate.getDate() + '.' + (1 + this.currViewDate.getMonth()) + '.' + this.currViewDate.getFullYear() + ' 00:00:00/' + this.currViewDate.getDate() + '.' + (1 + this.currViewDate.getMonth()) + '.' + this.currViewDate.getFullYear() + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
                this.axiosRequest(this.currViewDate);

                inst.hide();
            },
            changeViewDay: function (newDay) {
                //console.log ('Поменять днеь на ' + newDay);

                this.isDay0Select = false;
                this.isDay1Select = false;
                this.isDay2Select = false;
                switch (newDay) {
                    case 0:
                        this.isDay0Select = true;
                        this.currViewDate = new Date (+this.listDateArray[0].year, +this.listDateArray[0].month, +this.listDateArray[0].date);
                        this.axiosRequest(this.currViewDate);
                        break;
                    case 1:
                        this.isDay1Select = true;
                        this.currViewDate = new Date (+this.listDateArray[1].year, +this.listDateArray[1].month, +this.listDateArray[1].date);
                        this.axiosRequest(this.currViewDate);
                        break;
                    case 2:
                        this.isDay2Select = true;
                        this.currViewDate = new Date (+this.listDateArray[2].year, +this.listDateArray[2].month, +this.listDateArray[2].date);
                        this.axiosRequest(this.currViewDate);
                        break;
                }
            },
            selectTime: function (dateObj) {
                console.log ('Подготовка к отправке');
                var tempForm = document.forms[this.routeId];
                tempForm.tripId.value = dateObj.tripID;

                this.tempPlaceList = this.currPlaceList.map(function (item) {
                    return item.hours + ',' + item.min + ',' + item.tripID + ',' + item.value;
                });
                tempForm.tripList.value = this.tempPlaceList.join(';');

                tempForm.date.value = this.currViewDate.getFullYear() + '-' + this.currViewDate.getMonth() + '-' + this.currViewDate.getDate();
                if (+dateObj.hours < 10) {this.currViewTime = '0' +  dateObj.hours;} else {this.currViewTime = dateObj.hours;}
                this.currViewTime += ':';
                if (+dateObj.min < 10) {this.currViewTime += '0' +  dateObj.min;} else {this.currViewTime += dateObj.min;}
                tempForm.time.value = this.currViewTime;
                console.log ('Можно отправлять');
                tempForm.submit();

            },
            axiosRequest: function (viewDate) {
                this.isPreloaderVisible = true;
                axios({
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: {
                        [this.tokenKey]: this.token,
                        date: viewDate.getDate() + '.' + (1 + viewDate.getMonth()) + '.' + viewDate.getFullYear(),
                        route: this.routeId
                    },
                    url: '/api/trips'
                })
                .then(this.parseResponce)
                .finally(() => (this.isPreloaderVisible = false));
                /*axios
                    .get(this.requestString)
                    .then(this.parseResponce)
                    .finally(() => (this.isPreloaderVisible = false));*/
            },
            parseResponce: function (responce) {
                //console.log (responce.data);
                this.responceData = JSON.parse(responce.data);
                this.currPlaceList = [];

                this.responceData.forEach(function(item, i) {
                    var tripDate = new Date(item.TripDateUniverse);

                    /*if (+tripDate.getHours() == 6) {
                        console.log ('Рейс на 6 утра, ID: ' + item.ID);
                        //console.log ('Рейс на 6 утра, ID: ' + item.ID);
                    }*/

                    if (item.SeatsCount == 0) item.SeatsCount = 17;

                    this.currPlaceList[i] = {
                        'tripID': item.ID,
                        'min': tripDate.getMinutes(),
                        'hours': tripDate.getHours(),
                        'cityFrom': this.cityFrom,
                        'cityTo': this.cityTo,
                        'value': item.SeatsCount - item.SeatsBusyCount
                    };

                }, this);

                this.currPlaceList = this.currPlaceList.filter(item => item.value > 0);

                this.currPlaceList.sort(function(a, b) {
                    if (+a.hours > +b.hours) {
                        return 1;
                    } else {
                        if (+a.hours == +b.hours) {
                            if (+a.min > +b.min) {
                                return 1;
                            } else {
                                return -1;
                            }
                        } else {
                            return -1;
                        }
                    }
                });

                if (this.currPlaceList.length > 0) {
                    this.isListEmpty = false;
                } else {
                    this.isListEmpty = true;
                }

                this.currPlaceListKey = this.currViewDate.toDateString();
            }
        },
        watch: {
            routeId: function (val, oldVal) {
                //console.log ('Нужно обновить данные рейса');
                this.axiosRequest(this.currViewDate);
            }
        }
    }
</script>
