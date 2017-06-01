(function () {
  angular.module('app', [])
    .component('pokemonForm', {
      templateUrl: './pokemon.html',
      controller: controller
    })

  controller.$inject = ['$http']
  function controller ($http) {
    const vm = this
    vm.loading = false
    vm.pokemon = {}

    vm.generatePokemon = function () {
      const rand = Math.ceil(Math.random() * 722)
      vm.pokemon = {}

      vm.loading = true
      $http.get(`http://pokeapi.co/api/v2/pokemon/${rand}`)
      .then(({ data }) => {
        vm.pokemon.name = data.name[0].toUpperCase() + data.name.slice(1)
        vm.pokemon.img = data.sprites.front_default
      })
    }
  }
})()
