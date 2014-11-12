// ideas list table
$('#table-ideas-list').dataTable({
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});

// projects list table
$('#table-projects-list').dataTable({
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});
