declare global {
    interface String {
        /**
         * Adds dots as thousand separators to the string representation of a number.
         * Examples:
         * const numberStr = "1234567";
         * console.log(numberStr.createDotsNumber()); // "1.234.567"
         * 
         * @returns {string} The string with dots added as thousand separators.
         */
        createDotsNumber(): string;
    }
}

String.prototype.createDotsNumber = function(): string {

    return this.replace(/\B(?=(\d{3})+(?!\d))/g,".")
}

export { }; 