<?php
$routes = [
  '/' => 'src/views/access.php',
  '/access' => 'access.php',
  '/mailservice' => 'landpage.php',
];

$route = $_SERVER['REQUEST_URI'];
if (array_key_exists($route, $routes)) {
    include $routes[$route];
} else {
    // Página não encontrada (404)
    include 'src/views/404.php';
}

?>