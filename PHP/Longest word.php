<?php

function longest($word){
	$ex = explode(' ', $word);
	
	$longestword = 0;
	$str = '';
	
	foreach($ex as $wordnew){
		if($longestword < strlen($wordnew)){
			$longestword = strlen($wordnew);
			$str = $wordnew;
		}
	}
	return $str;
}

echo $res = longest("Name is Hacker vas");

?>
