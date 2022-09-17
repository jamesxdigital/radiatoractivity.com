// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from "jquery";

// ----------------------------------------------
// Formcarry
// ----------------------------------------------
const Formcarry = (() => {
  let s;

  return {
    settings() {
      return {
        html: $("html"),
        body: $("body"),
        form: $("#form"),
        formAction: $("#form").attr("action"),
        formMessage: $(".form__message"),
        animation: "fade-in",
        open: "js-popup-open",
        overflow: "js-overflow",
        closing: "js-popup-closing",
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.ajax();
    },

    ajax() {
      s.form.submit((e) => {});
    },
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Formcarry;
