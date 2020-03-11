<?php

$router = $di->getRouter();

// Define your routes here
$router->add (
  '/route',
    [
        'controller' => 'api',
        'action' => 'routes'
    ]
);

$router->add (
    '/trips',
    [
        'controller' => 'api',
        'action' => 'trips'
    ]
);

$router->handle($_SERVER['REQUEST_URI']);
