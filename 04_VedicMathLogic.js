//here i am defining an arrray with values as zero.
let a= [[0,0,0],[0,0,0],[0,0,0]]
for(i=0;i<3;i++)
{
for(j=0;j<3;j++)
{
    //I have here assigned the values in the indexes of the array 
    //The positions were pre-determined to test the function.
    if(i === 1 && j === 2)
    a[i][j] = 1
else if(i === 2 && j === 0)
a[i][j]=2
else if(i === 0 && j === 1)
a[i][j]=4
else if(i === 0 && j === 0)
a[i][j]=3
else if(i === 1 && j === 1)
a[i][j]=5
else if(i === 2 && j === 2)
a[i][j]=6
else if(i === 2 && j === 1)
a[i][j]=7
else if(i === 0 && j === 2)
a[i][j]=8
else if(i === 1 && j === 0)
a[i][j]=9
}
}
//this function here performs the concations of the rows to form a matrix.
for (let i = 0; i < 3; i++) {
    let row = ""; 
    for (let j = 0; j < 3; j++) {
        row += a[i][j] + " "; 
    }
    console.log(row); 
}
function magicsquare(a)
{
    let row1 = 0;
    let row2 = 0;
    let row3 = 0;
     //adding all the rows  
        row1 += a[0][0]+a[0][1]+a[0][2];
        row2 += a[1][0]+a[1][1]+a[1][2];
        row3 += a[2][0]+a[2][1]+a[2][2];
//here we are adding all the coloumns
    let col1 = 0;
    let col2 = 0;
    let col3 = 0;
        col1 += a[0][0]+a[1][0]+a[2][0];
        col2 += a[0][1]+a[1][1]+a[2][1];
        col3 += a[0][2]+a[1][2]+a[2][2];
//here we are adding the diagnals 
    let d1=0
    let d2=0
    d1=a[0][0]+a[1][1]+a[2][2]
    d2=a[0][2]+a[1][1]+a[2][0]
    //gave an if condition to check the logic
    if (row1 === row2 && row2 === row3 && row3 === col1 && col1 === col2 && col2 === col3 && col3 === d1 && d1 === d2) {
    console.log("Hurray!!a magic square!");
} else {
    console.log("nawaaah!! not a magic square.");
}
        }
       //calling the function. 
        magicsquare(a);








