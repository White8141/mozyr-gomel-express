<?php
declare(strict_types=1);

use Phalcon\Http\Request;

class ApiController extends ControllerApi
{

    //  /api
    public function indexAction()
    {
        //echo ('Api started');
    }

    //  /api/routes
    public function routesAction () {
        $this->dispatcher->forward(
            [
                'controller' => 'routes',
                'action' => ''
            ]
        );
    }

    public function tripsAction () {
        $this->dispatcher->forward(
            [
                'controller' => 'trips',
                'action' => ''
            ]
        );
    }
}

