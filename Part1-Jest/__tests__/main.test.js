const formatVolumeIconPath = require('../assets/scripts/main');


describe("Volume Indicator", () => {

    test("Volume level 3 test", () => {
        expect(formatVolumeIconPath(80)).toMatch("./assets/media/icons/volume-level-3.svg")
    });

    test("Volume level  test", () => {
        expect(formatVolumeIconPath(60)).toMatch("./assets/media/icons/volume-level-2.svg")
    });

    test("Volume level 3 test", () => {
        expect(formatVolumeIconPath(30)).toMatch("./assets/media/icons/volume-level-1.svg")
    });

    test("Volume level 3 test", () => {
        expect(formatVolumeIconPath(0)).toMatch("./assets/media/icons/volume-level-0.svg")
    });
});