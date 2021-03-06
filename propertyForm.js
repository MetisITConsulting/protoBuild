var protoBuild = angular.module('protoBuild', ['ngMaterial']);

protoBuild.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});

protoBuild.controller('propertyFormCtl', [function () {
    var self = this;

    self.saleTypes = [
        {id: 0, name: 'Auction'},
        {id: 1, name: 'Open Market'}
    ];

    self.propertyTypes = [
        {id: 0, name: 'Studio'},
        {id: 1, name: 'Flat'},
        {id: 2, name: 'Terrace'},
        {id: 3, name: 'Semi'},
        {id: 4, name: 'Detached'}
    ];

    self.roomTypes = [
        {id: 0, name: 'Lounge', defaultName: 'Lounge'},
        {id: 1, name: 'Kitchen', defaultName: 'Kitchen'},
        {id: 2, name: 'Bedroom', defaultName: 'Master Bedroom'},
        {id: 3, name: 'WC', defaultName: 'WC'},
        {id: 4, name: 'Hall', defaultName: 'Hall'},
        {id: 5, name: 'Dining Room', defaultName: 'Dining Room'},
        {id: 6, name: 'Reception Room', defaultName: 'Reception Room'},
        {id: 7, name: 'Study', defaultName: 'Study'},
        {id: 8, name: 'Garage', defaultName: 'Garage'},
        {id: 9, name: 'Utility Room', defaultName: 'Utility Room'},
        {id: 10, name: 'Basement', defaultName: 'Basement'},
        {id: 11, name: 'Bathroom', defaultName: 'Bathroom'},
        {id: 12, name: 'Shower Room', defaultName: 'Shower Room'},
        {id: 13, name: 'En Suite', defaultName: 'En Suite'},
        {id: 14, name: 'Changing Room', defaultName: 'Changing Room'},
        {id: 15, name: 'Cloakroom', defaultName: 'Cloakroom'},
        {id: 16, name: 'Conservatory', defaultName: 'Conservatory'},
        {id: 17, name: 'Dressing Room', defaultName: 'Dressing Room'},
        {id: 19, name: 'Games Room', defaultName: 'Games Room'},
        {id: 20, name: 'Gym', defaultName: 'Gym'},
        {id: 21, name: 'Laundry Room', defaultName: 'Laundry Room'},
        {id: 22, name: 'Library', defaultName: 'Library'},
        {id: 23, name: 'Pantry', defaultName: 'Pantry'},
        {id: 24, name: 'Pool Room', defaultName: 'Pool Room'}
    ];

    var ShowAllButton = [
        {state: false, name: "Show More"},
        {state: true, name: "Show Less"}
    ];

    self.showAllRoomTypes = false;
    self.showAllRoomTypesButton = 'Show All';

    self.myForm = {};
    self.myForm.address = "46 Maltings Close, London, E3 3TB";
    self.myForm.url  = "www.google.com";
    self.myForm.priceFrom = 250000;
    self.myForm.priceTo = 30000;
    self.myForm.propertyType  = 1;
    self.myForm.rooms = [];

    self.addRoom = function(addtype) {
        var newInx = 0;
        if (self.myForm.rooms.length > 0){
            newInx = self.myForm.rooms[self.myForm.rooms.length - 1].id + 1;
        }

        var roomName = "";
        var tempRooms = _.filter(self.myForm.rooms, function(n){return n.type === addtype;});
        var roomType = _.filter(self.roomTypes, function(o){return o.id === addtype;});

        roomName = tempRooms.length === 0 ? roomType[0].defaultName : roomType[0].name + " " + (tempRooms.length + 1);

        self.myForm.rooms.push({id: newInx, type: addtype, name: roomName, width: '', length: '', height: ''});
    }

    self.removeRoom = function(roomId) {
        _.remove(self.myForm.rooms, function(n){return n.id === roomId;})
    }

    self.showRoomType = function(thisType) {
        if (self.showAllRoomTypes) return true;
        return -1 != _.findIndex(self.myForm.rooms, function(n){return n.type === thisType;});
    }

    self.toggleShowAllRoomTypes = function() {
        self.showAllRoomTypes = !self.showAllRoomTypes;
    }

    self.showAllButtonName = function() {
        return self.showAllRoomTypes ? 'Show Less' : 'Show More';
    }

    self.addRoom(0);
    self.addRoom(1);
    self.addRoom(2);
    self.addRoom(3);
    self.addRoom(4);
}]);