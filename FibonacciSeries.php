<?php 
$x =0;
$y =1;

echo $x;
echo $y;

for ($i=2; $i<10; $i++){

$z= $x +$y;

echo $z .", ";
$x=$y;
$y=$z;
}

?>