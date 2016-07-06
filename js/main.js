var app = angular.module("LazyAssVegan", ["LazyAssVegan.controllers", "ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            // controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "views/about.html",
            // controller: "aboutController"
        })
        .when("/allrecipes", {
            templateUrl: "views/allrecipes.html",
            // controller: "allRecipesController"
        })
        .when("/breakfast", {
            templateUrl: "views/breakfast.html",
            // controller: "breakfastController"
        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            // controller: "contactController"
        })
        .when("/cookingdisasters", {
            templateUrl: "views/cookingdisasters.html",
            // controller: "cookingDisastersController"
        })
        .when("/desserts", {
            templateUrl: "views/desserts.html",
            // controller: "dessertsController"
        })
        .when("/ingredients", {
            templateUrl: "views/ingredients.html",
            // controller: "ingredientsController"
        })
        .when("/locator", {
            templateUrl: "views/locator.html",
            // controller: "locatorController"
        })
        .when("/maindishes", {
            templateUrl: "views/maindishes.html",
            // controller: "maindishesController"
        })
        .when("/breakfast", {
            templateUrl: "views/breakfast.html",
            // controller: "breakfastController"
        })
        .when("/recipe/:singleRecipeView", {
            templateUrl: "views/recipe.html",
            // controller: "singleRecipeController"
        })
        .when("/resources", {
            templateUrl: "views/resources.html",
            // controller: "resourcesController"
        })
        .when("/sides", {
            templateUrl: "views/sides.html",
            // controller: "sidesController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);