<?php

function fncreverse($str){
	$strNew = '';
	
	for($i = strlen($str)-1; $i >=0; $i--){
		$strNew = $strNew.$str[$i];
	}
return $strNew;
}

echo fncreverse('hello');

?>