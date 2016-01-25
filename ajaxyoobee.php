<?php

//connect to db
$dbc = new mysqli( 'localhost', 'saralyn_ajax', 'yoobee01', 'sarahlyn_ajax_yoobee' );

//filters note
$note = $dbc ->real_escape_string( $_GET['note']);

//insert note into database
$sql = "INSERT INTO notes VALUES ( NULL, '$note', CURRENT_TIMESTAMP ) ";

echo $sql;

//run sql
$dbc->query( $sql );

