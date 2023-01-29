function getCheckedItems() {
    var items = document.getElementsByName("item");
    var checkedItems = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        checkedItems.push(items[i].value);
      }
    }
    document.getElementById("output").innerHTML = "Checked items: " + checkedItems.join(", ");
  }
  