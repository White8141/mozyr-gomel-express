<?php
declare(strict_types=1);

use Phalcon\Http\Request;

class ApiController extends ControllerApi
{

    //get: /api
    public function indexAction()
    {
        echo ('Api started');
    }

    //post: /api/routes
    public function routesAction ($action = 0) {
        if ($this->request->isPost()) {
            $_POST = json_decode(file_get_contents('php://input'), true);
            //echo var_dump($this->request->getPost());

            if ($this->security->checkToken()) {

                if ($action == 0) {

                    /*$this->dispatcher->forward(
                        [
                            'controller' => 'routes',
                            'action' => 'index'
                        ]
                    );*/

                    if( $curl = curl_init() ) {
                        curl_setopt($curl, CURLOPT_URL, 'http://93.84.84.168:9494/BiletionApiService/routes?apikey=56tRR980oPkbx');
                        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);

                        $out = curl_exec($curl);
                        echo json_encode($out, JSON_UNESCAPED_UNICODE);

                        curl_close($curl);
                    } else {
                        echo ('Post Route '.$action);
                    }
                } else {
                    echo ('Post Route '.$action);
                }
            } else {
                echo ('Access denied');
            }
        }

        if ($this->request->isGet()) {
            echo ('Get Routes');
        }

        if ($this->request->isAjax()) {
            echo ('Ajax Routes');
        }
    }
}

