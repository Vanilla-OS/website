function countStatuses(table) {
    var statuses = {
        "Done": 0,
        "WIP": 0,
        "Final tests": 0,
        "Discontinued": 0,
        "Planned for the future": 0,
        "Replaced by": 0
    };
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        if (cells.length == 2) {
            var status = cells[1].innerText;
            if (status in statuses) {
                statuses[status]++;
            } else if (status.startsWith("Replaced by")) {
                statuses["Replaced by"]++;
            }
        }
    }
    return statuses;
}

function displayStatuses(table, statuses) {
    var div = document.createElement("div");
    div.className = "table-status";
    for (var status in statuses) {
        if (statuses[status] > 0) {
            var span = document.createElement("span");
            var statusClass = status.toLowerCase().replace(/ /g, "-");
            span.className = "table-status-" + statusClass;
            span.innerHTML = "<b>" + status + ":</b> " + statuses[status];
            div.appendChild(span);
        }
    }
    var h3 = table.previousElementSibling;
    if (h3.tagName == "H3") {
        h3.parentNode.insertBefore(div, h3.nextSibling);
    } else {
        table.parentNode.insertBefore(div, table);
    }
}

function countAndDisplayStatuses() {
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        var statuses = countStatuses(tables[i]);
        displayStatuses(tables[i], statuses);
    }
}

window.onload = countAndDisplayStatuses;
