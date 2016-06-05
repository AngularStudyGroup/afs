function mockScriptsCalls() {
    inject(function ($httpBackend) {
        $httpBackend.whenGET(/app\/.*/).respond({});
    });
}
