<?php
function letter($word){

	
 $oldAlph = array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
 $newAlph = array("b","c","d","E","f","g","h","I","j","k","l","m","n","O","p","q","r","s","t","U","v","w","x","y","z","A");
	
$newStr = '';
$strlength = strlen($word);

$newword = str_split($word);

	for($i=0; $i<$strlength; $i++){
		
		$strposition[] = array_search($newword[$i] , $oldAlph);
	}
	//print_r($strposition);
	foreach ($strposition as $key=>$pos){
	
		
			if($pos  == 0){
				$flag = 'a';
			}
		if($pos == false || $flag !='a'){
			echo $newStr=  $newword[$key];
		}else{
			echo $newStr = $newAlph[$pos];
		}
		
	}

	
}
	
letter("ab");



?>