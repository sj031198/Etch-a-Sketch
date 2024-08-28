//Grid Display function
const container = document.querySelector(".container");

const numberOfSquares =8;
function makeGrid(number) {
    const squareSize = container.clientWidth/number;
    console.log(squareSize);
    for(let i=0;i<number;i++)
        {
            const gridRow = document.createElement("div");
            gridRow.classList.add("gridRow");
            gridRow.style.display="flex";
            for (let j=0;j<number;j++)
            {
                const square = document.createElement("div");
                square.classList.add("square");
                square.style.boxSizing ="border-box"
                square.style.width=squareSize +"px";
                square.style.height=squareSize+"px";
                square.style.borderColor="black";
                square.style.border="1px solid"
                gridRow.appendChild(square);
            }
            container.appendChild(gridRow);
        }
    }
makeGrid(numberOfSquares);

const button = document.querySelector("button");
button.addEventListener("click",()=>changeNumberOfSquare());
function changeNumberOfSquare(){
    const newSquareNumber =prompt("How many squares?",8);
    container.innerHTML="";
    makeGrid(newSquareNumber);
    paintSquare();
}
function paintSquare(){
    const square = document.querySelectorAll(".square");
    square.forEach((square)=>{
        square.addEventListener("mouseover",()=>{
        square.style.backgroundColor ="black";
    })
})
}
paintSquare();


    
    //CREATE 8 columns of containers, in each container contains 8 pixel divs

    //CREATE a row containing x squares, each square is a "pixel" div(to contain the drawn pixel ink)
    //THEN create x columns of that row
//Draw function
    //WHEN mouse hovers over a "pixel", change its background color

