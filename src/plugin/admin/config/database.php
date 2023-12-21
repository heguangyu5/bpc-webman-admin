<?php

$jsonFile = BASE_PATH_REAL . '/plugin-admin-config-database.json';
if (is_file($jsonFile)) {
    return json_decode(file_get_contents($jsonFile), true);
} else {
    return [];
}
