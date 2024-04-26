function getNextDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 30) {
      return dd + 1 + "-" + mm + "-" + yyyy;
    } else {
      return 1 + "-" + mm + "-" + yyyy;
    }
  }



  export {getNextDate}