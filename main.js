"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
function initBot() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, links, _a, counter, validLink, elementLink, _b, _c, error_1, elementText, text, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, new selenium_webdriver_1.Builder().forBrowser('firefox').build()];
                case 1:
                    driver = _g.sent();
                    return [4 /*yield*/, driver.get('https://www.google.com/search?q=Parkour')];
                case 2:
                    _g.sent();
                    links = [];
                    _a = [0, 0], counter = _a[0], validLink = _a[1];
                    _g.label = 3;
                case 3:
                    if (!(validLink < 5 && counter < 20)) return [3 /*break*/, 9];
                    _g.label = 4;
                case 4:
                    _g.trys.push([4, 7, , 8]);
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[7]/div/div[11]/div/div[2]/div[2]/div/div/div[".concat(counter, "]/div/div/div[1]/div/a")))];
                case 5:
                    elementLink = _g.sent();
                    _b = links;
                    _c = validLink;
                    return [4 /*yield*/, elementLink.getAttribute('href')];
                case 6:
                    _b[_c] = _g.sent();
                    validLink += 1;
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _g.sent();
                    return [3 /*break*/, 8];
                case 8:
                    counter += 1;
                    return [3 /*break*/, 3];
                case 9: return [4 /*yield*/, driver.get(links[0])];
                case 10:
                    _g.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath('/html/body/div[1]/div/div[4]/main/div[2]/div[3]/div[1]/p[1]'))];
                case 11:
                    elementText = _g.sent();
                    return [4 /*yield*/, elementText.getText()];
                case 12:
                    text = _g.sent();
                    _e = (_d = console).log;
                    _f = "Site: ".concat;
                    return [4 /*yield*/, driver.getTitle()];
                case 13:
                    _e.apply(_d, [_f.apply("Site: ", [_g.sent(), " | PPL: "])]);
                    console.log(text.split('/\r\n|\r|\n/').length);
                    return [2 /*return*/];
            }
        });
    });
}
initBot();
