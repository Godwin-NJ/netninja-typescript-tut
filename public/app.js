import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
// const invOne = new Invoice("maria", "purchase of inventory", 250);
// console.log(invOne);
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
// console.log(form);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
