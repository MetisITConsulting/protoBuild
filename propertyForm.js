var protoBuild = angular.module('protoBuild', []);

protoBuild.controller('propertyFormCtl', [function () {
    var self = this;
    var rooms = [
        {id: 0, type: 0, name: "Lounge", width: 0, length: 0, height: 0},
        {id: 1, type: 1, name: "Kitchen", width: 0, length: 0, height: 0},
        {id: 2, type: 2, name: "Master Bedroom", width: 0, length: 0, height: 0},
        {id: 3, type: 3, name: "WC", width: 0, length: 0, height: 0}
    ];


    self.myForm = {};
    self.myForm.address = "46 Maltings Close, London, E3 3TB";
    self.myForm.url  = "www.google.com";
    self.myForm.propertyType  = 1;
    self.myForm.rooms = rooms;


    self.propertyTypes = [
        {id: 0, name: 'Studio'},
        {id: 1, name: 'Flat'},
        {id: 2, name: 'Terrace'},
        {id: 3, name: 'Semi'},
        {id: 4, name: 'Detached'}
    ];

    self.roomTypes = [
        {id: 0, name: 'Lounge'},
        {id: 1, name: 'Kitchen'},
        {id: 2, name: 'Bedroom'},
        {id: 3, name: 'WC'}
    ];

    self.addRoom = function(addtype) {
        var lastRoom = _.last(self.myForm.rooms);
        var newInx = lastRoom.id + 1;
        self.myForm.rooms.push({id: newInx, type: addtype, width: 0, length: 0, hight: 0});
    }

    self.removeRoom = function(roomId) {
        var tempRooms = self.myForm.rooms;
        self.myForm.rooms = _.remove(tempRooms, function(n){return n.id !== roomId;})
    }

}]);