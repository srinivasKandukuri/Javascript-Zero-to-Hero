<?php

function addNum($num){
	$sum =0;
	
	for($i=$num; $i>0; $i--){
		$sum +=$i;
	}
	
	return $sum;
}

echo addNum(12);
?>
