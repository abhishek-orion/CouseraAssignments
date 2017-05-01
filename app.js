(function () {
'use strict';

var app = angular.module('ShoppingListCheckOff',[])
.controller('ToBuy',ToBuy)
.controller('Bought',Bought)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuy.$inject = ['ShoppingListCheckOffService'];
  function ToBuy(ShoppingListCheckOffService) {
    var ToBuyController = this;
    ToBuyController.items = ShoppingListCheckOffService.getToBuyList();

   ToBuyController.itemBought= function(itemIndex){
    ToBuyController.items = ShoppingListCheckOffService.prodBought(itemIndex);
  }


  }
  Bought.$inject = ['ShoppingListCheckOffService'];
  function Bought(ShoppingListCheckOffService){
    var AlreadyBoughtController = this;
    AlreadyBoughtController.items = ShoppingListCheckOffService.getBoughtList();
  }


function ShoppingListCheckOffService(){

  var shoppingService = this;

  var ToBuyList = [
    {name: "Cookie",
     quantity: 10
   },
   {
     name: "Pencil",
     quantity: 5
   },
   {
     name: "Fan",
     quantity: 2
   },
   {
     name: "Shoes",
     quantity: 4
   },
   {
     name: "Towel",
     quantity: 6
   }
 ];

 var boughtList = [];

 shoppingService.prodBought = function (itemIndex) {
   var prod = {
     name: ToBuyList[itemIndex].name,
     quantity: ToBuyList[itemIndex].quantity
   };
   boughtList.push(prod);
   ToBuyList.splice(itemIndex, 1);
   return ToBuyList;
 }

 shoppingService.getToBuyList = function(){
   return ToBuyList;
 }
 shoppingService.getBoughtList = function(){
   return boughtList;
 }

}
})();
