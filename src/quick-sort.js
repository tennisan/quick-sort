'use strict';

function quickSort(input) {
	
	if(Array.isArray(input)) {}
	else	
	throw "Not an Array";
	else if(input.length <1)
	{
	var emptyArray = {};
	return emptyArray;
	}
	else if(input.length < 2)
	return "sorted array" + input[0];
	
	else if(input.length > 1 && typeof (input[0]) == number)
	{
	var arr = input;
	//unsortedarray.sort();
	//return unsortedarray;

	var i = 0;
	var j = arr.length-1;
	var tmp;
	pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  
	/* partition */
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}

	/* recursion */
	if (left < j)
		quickSort(arr, left, j);
	if (i < right)
		quickSort(arr, i, right);
	return arr;

	}

	else if(input.length > 1 && typeof (input[0]) == string)
	{
		var unsortedarray = input;
		unsortedarray.sort();	
		return unsortedarray;
	}

	
};
module.exports = quickSort;