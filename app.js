var app = new Vue({
  el: '#app',
  data: {
    age: 0
  },
  methods: {
    clear: function () {
      this.message = ''
    },
    clickHandler: function () {
      alert('Clicked!')
    }
  }
})