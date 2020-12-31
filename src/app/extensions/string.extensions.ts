export { }; // this will make it module

declare global { // this is important to access it as global type String
  interface String {
    capitalizeFirstLetter(): string;
    isNumeric(): boolean;
  }
}

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.isNumeric = function(): boolean {
  return !isNaN(this) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(this)) // ...and ensure strings of whitespace fail
}
