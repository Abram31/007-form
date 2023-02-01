import { selectRate } from "./selectRate.js";
import { choosingCity } from "./choosingCity.js";
import { formCalculate } from "./formCalculate.js";
import { validate } from "./validate.js";
import { yandexMap } from "./yandexMap.js";
import { datePicker } from "./datePicker.js";
import { formSendOrder } from "./formSendOrder.js";

ymaps.ready(choosingCity);
ymaps.ready(yandexMap);


formCalculate()
formSendOrder()
validate()
selectRate()
datePicker()

