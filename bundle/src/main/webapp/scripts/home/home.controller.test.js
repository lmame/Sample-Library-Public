describe('HomeController', function () {
    var ctrl;

    beforeEach(module('com.example.samplelibrary.home'));

    beforeEach(inject(function ($controller, $rootScope) {
        ctrl = $controller('HomeController', {
            $scope: $rootScope.$new()
        });
    }));

    it('should exist', function () {
        expect(ctrl).toBeDefined();
    });
});