<?php
declare(strict_types=1);

use Phalcon\Http\Request;

class TripsController extends ControllerApi
{
    public function indexAction()
    {
        if ($this->request->isPost()) {
            $_POST = json_decode(file_get_contents('php://input'), true);

            if ($this->security->checkToken(null, null, false)) {

                if( $curl = curl_init() ) {
                    curl_setopt($curl, CURLOPT_URL, "http://93.84.84.168:9494/BiletionApiService/trips/filter3/".$this->request->getPost('date')."%2000:00:00/".$this->request->getPost('date')."%2023:59:59/".$this->request->getPost('route')."/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx");
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);

                    $out = curl_exec($curl);
                    echo json_encode($out, JSON_UNESCAPED_UNICODE);

                    curl_close($curl);
                } else {
                    echo ('{Curl Error!}');
                }
            } else {
                echo ('{Access denied}');
            }
        }
    }
}

