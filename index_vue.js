
Vue.component('todo-item', {
  props: ['todo'],
  template: '<div><p><b>Title</b>: {{ todo.Title }}</p><p><b>Year</b>: {{ todo.Year }}</p><p><b>Director</b>: {{ todo.Director }}</p></div>'
})

Vue.component('todo-item-img', {
  props: ['todo'],
  template: '<b-card v-bind:img-src="todo.Poster" img-alt="Card image" img-left class="mb-3"><b-card-text><todo-item v-bind:todo="todo"></todo-item></b-card-text></b-card>'
  //template: '<li>{{ todo.Title }} - {{ todo.Year }} - {{ todo.Director }} </li>'
})




var vm = new Vue({
	el: "#app",
	data: {
    info: null,
    seen: 0,
    datas:[],
    active: "Film Table",
    tabs: ["Film Table", "Film Grid"],
    fields: [
          {
            key: 'Title',
            sortable: true
          },
          {
            key: 'Year',
            sortable: true
          },
          {
            key: 'Director',
            sortable: true,
          }
        ],
	},

  methods: {
    myf: function (arg) {
      this.currentTab = arg;
      if(arg=='Film Table'){
        this.seen = 0;

      } else {
        this.seen = 1;

      }
    },

  },

  mounted () {
    var lista = ["0111161", "0068646", "0071562", "0468569", "0050083", "0108052", "0167260", "0110912", "0060196", "0120737", "0137523", "0109830", "0080684", "0167261", "0133093", "0099685", "0073486", "0047478", "0114369", "0317248", "6751668", "0118799", "0102926", "0038650", "0076759"];
    var i;
    for (i = 0; i < lista.length; i++){
      axios
        .get('http://www.omdbapi.com/?apikey=a7b2063d&i=tt' + lista[i])
        .then(
          response => (this.datas.push(response.data))
        )
      }

    }


});
