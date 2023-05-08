<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Hekmatinasser\Verta\Verta;

class DateController extends Controller
{
    public function index(){
        $verta = array(
//            ['date' => 1, 'name' => 'milad'],
//            ['date' => 2, 'name' => 'milad'],
//            ['date' => 3, 'name' => 'milad'],
        );
        for ($i=1; $i<15; $i++){
            array_push($verta , [
                'date' => verta(+$i . 'day', 'iran')->year . '/' . verta(+$i . 'day', 'iran')->month . '/' . verta(+$i . 'day', 'iran')->day,
                'week' => verta(+$i . 'day', 'iran')->dayOfWeek+1 . '/' . verta(+$i . 'day', 'iran')->formatWord('l'),
            ]);
        }

        return ($verta) ;
    }
}
