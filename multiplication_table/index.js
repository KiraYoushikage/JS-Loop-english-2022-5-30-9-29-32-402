for(let i=1;i<=9;i++){
	let arrs=[];
	for(let j=1;j<=i;j++){
		arrs.push(i+"*"+j+"="+(i*j)+" ");
	}
	console.log(...arrs);
}