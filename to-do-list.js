function fnTask() {
    //we are grabbing the values in each of the inputs we typed in 
    var task = document.getElementsByClassName("taskText")[0].value;
    var priority = document.getElementsByClassName("priority")[0].value;
    var deadline = document.getElementsByClassName("deadline")[0].value;
    // we want to know how many rows are already there
    var numberOfRows = document.getElementsByTagName("tr").length;
    console.log("currently there are " + numberOfRows + " number of rows");
    // var remove = "<button class='delete'>Delete</button>";
    // Creating button and adding properties we want --> text, onclick
    var removeButton = document.createElement("button");
    removeButton.innerHTML="Delete";
    console.log("I created a button when onclick will remove row at the ", numberOfRows);
    removeButton.onclick= function() {
      console.log("I will remove row at ", numberOfRows, " because I was clicked");
      removeSelectedRow(numberOfRows);
    }

    alert("Task added : "+task);
    
    var tableBody = document.getElementsByTagName("tbody")[0];

    var newRow = tableBody.insertRow(-1);
    console.log("I am creating a new row. Now there are ", numberOfRows+1, " rows");
    var cellOne = newRow.insertCell(0);
    var cellTwo = newRow.insertCell(1);
    var cellThree = newRow.insertCell(2);
    var cellFour = newRow.insertCell(3);

    cellOne.innerHTML = task;
    cellTwo.innerHTML = priority;
    cellThree.innerHTML = deadline;
    // cellFour.innerHTML = remove;
    cellFour.appendChild(removeButton);

    // let newRow = tableRef.insertRow(-1);
    // var addRow = tableBody.insertRow(0);
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementsByTagName('table')[0];
    switching = true;
    // Set the sorting direction to ascending:
    dir = 'asc';
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName('td')[n];
        y = rows[i + 1].getElementsByTagName('td')[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
          
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function removeSelectedRow(rowIndex){
    console.log("I am removing row at index ", rowIndex);
    var removeRow = document.getElementsByTagName("tr")[rowIndex];
    removeRow.remove();
  }