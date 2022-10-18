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
var firefox_1 = require("selenium-webdriver/firefox");
var readline_sync_1 = require("readline-sync");
// Function initBot, initialize the bot
function initBot() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, search, elementsLink, links, counter, link, _a, _b, _loop_1, counter, searchAgain;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, new selenium_webdriver_1.Builder()
                        .setFirefoxOptions(new firefox_1.Options().headless())
                        .forBrowser('firefox')
                        .build()];
                case 1:
                    driver = _c.sent();
                    _c.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 14];
                    search = '';
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        search = (0, readline_sync_1.question)('\nPesquisar por: ');
                        if (search === '') {
                            console.error('\x1b[31mValor para pesquisa vazio, digite algo.\x1b[0m');
                            continue;
                        }
                        console.log('');
                        break;
                    }
                    // Start search
                    return [4 /*yield*/, driver.get("https://www.google.com/search?q=".concat(search))];
                case 3:
                    // Start search
                    _c.sent();
                    return [4 /*yield*/, driver.findElements(selenium_webdriver_1.By.className('yuRUbf'))];
                case 4:
                    elementsLink = _c.sent();
                    links = [];
                    counter = 0;
                    _c.label = 5;
                case 5:
                    if (!(counter < 5)) return [3 /*break*/, 9];
                    return [4 /*yield*/, elementsLink[counter].findElement(selenium_webdriver_1.By.css('a'))];
                case 6:
                    link = _c.sent();
                    _b = (_a = links).push;
                    return [4 /*yield*/, link.getAttribute('href')];
                case 7:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 8;
                case 8:
                    counter += 1;
                    return [3 /*break*/, 5];
                case 9:
                    _loop_1 = function (counter) {
                        var elementText, text, textCharacters, vowels, consonant, _d, _e, _f;
                        return __generator(this, function (_g) {
                            switch (_g.label) {
                                case 0: return [4 /*yield*/, driver.get(links[counter])];
                                case 1:
                                    _g.sent();
                                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.css('body'))];
                                case 2:
                                    elementText = _g.sent();
                                    return [4 /*yield*/, elementText.getText()];
                                case 3:
                                    text = _g.sent();
                                    textCharacters = text.split('');
                                    vowels = 0;
                                    consonant = 0;
                                    textCharacters.forEach(function (element) {
                                        switch (element) {
                                            case 'a' || 'e' || 'i' || 'o' || 'u':
                                                vowels += 1;
                                                break;
                                            default:
                                                consonant += 1;
                                        }
                                    });
                                    // Print the results
                                    _e = (_d = console).log;
                                    _f = "Nome do Site: ".concat;
                                    return [4 /*yield*/, driver.getTitle()];
                                case 4:
                                    // Print the results
                                    _e.apply(_d, [_f.apply("Nome do Site: ", [_g.sent()])]);
                                    console.log("URL: ".concat(links[counter]));
                                    console.log("Contagem de vogais: ".concat(vowels));
                                    console.log("Contagem de consoantes: ".concat(consonant, "\n"));
                                    return [2 /*return*/];
                            }
                        });
                    };
                    counter = 0;
                    _c.label = 10;
                case 10:
                    if (!(counter < 5)) return [3 /*break*/, 13];
                    return [5 /*yield**/, _loop_1(counter)];
                case 11:
                    _c.sent();
                    _c.label = 12;
                case 12:
                    counter += 1;
                    return [3 /*break*/, 10];
                case 13:
                    searchAgain = '';
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        searchAgain = (0, readline_sync_1.question)('Fazer outra pesquisa [S/N]: ')
                            .trim()
                            .toUpperCase();
                        if (searchAgain !== 'N' && searchAgain !== 'S') {
                            console.error('\x1b[31mOpção inválida! Digite S para sim ou N para não.\x1b[0m');
                            continue;
                        }
                        break;
                    }
                    if (searchAgain === 'N') {
                        return [3 /*break*/, 14];
                    }
                    else {
                        return [3 /*break*/, 2];
                    }
                    return [3 /*break*/, 2];
                case 14: return [2 /*return*/];
            }
        });
    });
}
initBot();
