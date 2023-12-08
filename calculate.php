<?php
$CONST= 1350;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $passport=$_POST["passport"];
    $idnp_idno=$_POST["indp_idno"];
    $area = $_POST["country"];
    $owner = $_POST["face"];
    $registration="Kishineu";
    $validly_period=$_POST["validly_period"];
    $transport_class=$_POST["transport_class"];
    $engine_car=$_POST["engine_car"];
    $driver_value=$_POST["driver_value"];
    $driver_expirience=$_POST["driver_expirience"];
    $number_accisent=$_POST["number_accisent"];
    $dtpCount=$_POST["dtpCount"];
    $seats=$_POST["seats"];
    $engine_tractor=$_POST["engine_tractor"];
    $engine_motorbike=$_POST["engine_motorbike"];
    $weight=$_POST["weight"];

//Выбор места регистрации
    if($area=="MD"){
        //Неограниченное кол-во допускаемых
        $step_1=$CONST*1.2;
        //Владелец транспорта явлвяется лицом
            if($owner=="fiz"){
                $step_2=$step_1*0.9;
            }
            else{
                $step_2=$step_1*1.5;
            }
            //Прописка владельца
                if($registration=="Kishineu"){
                    $step_3=$step_2*1.4;
                }
                else if($registration=="Belici"){
                    $step_3=$step_2*1;
                }
                else{
                    $step_3=$step_2*1;
                }
                //Класс транспортного средства
                        if($transport_class=="electro"){
                            $step_4=$step_3*0.9;
                        }
                        else if($transport_class=="car"){
                            switch(true){
                                case ($engine_car<=1200):
                                    $step_4=$step_3*0.7;
                                    break;
                                case($engine_car>1200 && $engine_car<=1600):
                                    $step_4=$step_3*1;
                                    break;
                                case($engine_car>1600 && $engine_car<=2000):
                                    $step_4=$step_3*1.1;
                                    break;
                                case($engine_car>2000 && $engine_car<=2400):
                                    $step_4=$step_3*1.2;
                                    break;
                                case($engine_car>2400 && $engine_car<=3000):
                                    $step_4=$step_3*1.5;
                                    break;
                                case($engine_car>3000):
                                    $step_4=$step_3*3;
                                    break;
                                default:
                                echo"Problems car...";
                            }
                        }
                        else if($transport_class=="motorbike"){
                            switch(true){
                                case ($engine_motorbike<=300):
                                    $step_4=$step_3*0.3;
                                    break;
                                case($engine_motorbike>300):
                                    $step_4=$step_3*0.5;
                                    break;
                                default:
                                echo"Problems motorbike";
                            }
                        }
                        else if($transport_class=="tractor"){
                            switch(true){
                                case ($engine_tractor<=45):
                                    $step_4=$step_3*0.5;
                                    break;
                                case($engine_tractor>45 && $engine_tractor<=100):
                                    $step_4=$step_3*0.7;
                                    break;
                                case($engine_tractor>100):
                                    $step_4=$step_3*0.9;
                                    break;
                                default:
                                echo"Problems tractor";
                           }
                        }
                        else if($transport_class=="track"){
                            switch(true){
                                case ($weight<=3500):
                                    $step_4=$step_3*1.5;
                                    break;
                                case($weight>3500 && $weight<=7500):
                                    $step_4=$step_3*1.7;
                                    break;
                                case($weight>7500 && $weight<=16000):
                                    $step_4=$step_3*2;
                                    break;
                                case($weight>16000):
                                    $step_4=$step_3*2.5;
                                    break;
                                default:
                                echo"Problems track";
                           }
                        }
                        else if($transport_class=="bus"){
                            switch(true){
                                case($seats<=17):
                                    $step_4=$step_3*1.5;
                                    break;
                                case($seats>17 && $seats<30):
                                    $step_4=$step_3*2;
                                    break;
                                case($seats>30):
                                    $step_4=$step_3*2.2;
                                    break;
                                default:
                                echo"Problems bus";

                            }
                        }
                        else{
                            echo"problems class transport";
                        }

                        if ($driver_expirience < 1) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 1;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 1.45;
                            }
                             elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 2.2;
                            }
                             else {
                                $step_5 = $step_4 * 2.5;
                            }
                        }
                        elseif ($driver_expirience == 1) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.95;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 1.3;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 1.9;
                            }
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 2) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.9;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 1.15;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 1.6;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 3) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.85;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 1;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 1.45;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 4) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.8;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 0.95;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 1.3;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 5) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.75;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 0.9;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 1.15;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 6) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.7;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 0.85;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 1;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 7) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.65;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 0.8;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 0.95;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 8) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.6;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 0.75;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 0.9;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        elseif ($driver_expirience == 9) {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.55;
                            } 
                            elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 0.7;
                            } 
                            elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 0.85;
                            } 
                            else {
                                $step_5 = $step_4 * 2.5;
                            }
                        } 
                        else {
                            if ($dtpCount == 0) {
                                $step_5 = $step_4 * 0.5;
                            } elseif ($dtpCount == 1) {
                                $step_5 = $step_4 * 0.65;
                            } elseif ($dtpCount == 2) {
                                $step_5 = $step_4 * 0.8;
                            } else {
                                $step_5 = $step_4 * 2.5;
                            }
                        }
                        $result=$step_5;
                        echo $result;
                    }
//Не гражданин Молдовы
    else{
        $step_1=$CONST*3;

        //Владелец транспорта явлвяется лицом
        if($owner=="fiz"){
            $step_2=$step_1*0.9;
        }
        else{
            $step_2=$step_1*1.5;
        }

        //Срок действия страховки
        if($validly_period==1){
            $step_3=$step_2*0.2;
        }
        elseif($validly_period==2){
            $step_3=$step_2*0.3;
        }
        elseif($validly_period==3){
            $step_3=$step_2*0.4;
        }
        elseif($validly_period==4){
            $step_3=$step_2*0.5;
        }
        elseif($validly_period==5){
            $step_3=$step_2*0.6;
        }
        elseif($validly_period==6){
            $step_3=$step_2*0.7;
        }
        elseif($validly_period==7){
            $step_3=$step_2*0.8;
        }
        elseif($validly_period==8){
            $step_3=$step_2*0.85;
        }
        elseif($validly_period==9){
            $step_3=$step_2*0.9;
        }

        else{
            $step_3=$step_2*1;
                //Класс транспортного средства
                if($transport_class=="electro"){
                    $step_4=$step_3*0.9;
                }
                else if($transport_class=="car"){
                    switch(true){
                        case ($engine_car<=1200):
                            $step_4=$step_3*0.7;
                            break;
                        case($engine_car>1200 && $engine_car<=1600):
                            $step_4=$step_3*1;
                            break;
                        case($engine_car>1600 && $engine_car<=2000):
                            $step_4=$step_3*1.1;
                            break;
                        case($engine_car>2000 && $engine_car<=2400):
                            $step_4=$step_3*1.2;
                            break;
                        case($engine_car>2400 && $engine_car<=3000):
                            $step_4=$step_3*1.5;
                            break;
                        case($engine_car>3000):
                            $step_4=$step_3*3;
                            break;
                        default:
                        echo"Problems car...";
                    }
                }
                else if($transport_class=="motorbike"){
                    switch(true){
                        case ($engine_motorbike<=300):
                            $step_4=$step_3*0.3;
                            break;
                        case($engine_motorbike>300):
                            $step_4=$step_3*0.5;
                            break;
                        default:
                        echo"Problems motorbike";
                    }
                }
                else if($transport_class=="tractor"){
                    switch(true){
                        case ($engine_tractor<=45):
                            $step_4=$step_3*0.5;
                            break;
                        case($engine_tractor>45 && $engine_tractor<=100):
                            $step_4=$step_3*0.7;
                            break;
                        case($engine_tractor>100):
                            $step_4=$step_3*0.9;
                            break;
                        default:
                        echo"Problems tractor";
                }
                }
                else if($transport_class=="track"){
                    switch(true){
                        case ($weight<=3500):
                            $step_4=$step_3*1.5;
                            break;
                        case($weight>3500 && $weight<=7500):
                            $step_4=$step_3*1.7;
                            break;
                        case($weight>7500 && $weight<=16000):
                            $step_4=$step_3*2;
                            break;
                        case($weight>16000):
                            $step_4=$step_3*2.5;
                            break;
                        default:
                        echo"Problems track";
                }
                }
                else if($transport_class=="bus"){
                    switch(true){
                        case($seats<=17):
                            $step_4=$step_3*1.5;
                            break;
                        case($seats>17 && $seats<30):
                            $step_4=$step_3*2;
                            break;
                        case($seats>30):
                            $step_4=$step_3*2.2;
                            break;
                        default:
                        echo"Problems bus";
                    }
                }
                $result=$step_4;
                echo $result;
                
            }
        }
    }
      var_dump($_POST);          

