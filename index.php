<?php

if($_POST["from"])
{
    $from = $_POST["subject"];
    $handle = strtolower($_POST["text"]);

    $db = new SQLite3('chaincraft.db');

    $db->exec("INSERT INTO user (email, handle) VALUES (\"$from\", \"$handle\")");
}

?>
