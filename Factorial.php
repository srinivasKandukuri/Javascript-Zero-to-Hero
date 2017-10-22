<?php

function fact($num){
	$fac = 1;
	
	for($i =1; $i<=$num; $i++){
	
		$fac = $fac*$i;
	
	}
	echo $fac;

}

fact(5);
?>