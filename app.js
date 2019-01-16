document.addEventListener("DOMContentLoaded", function() {

  const board = document.getElementById("board");
  console.log(board);

    for (let j = 0; j < 4; j++) {
      const rows = document.createElement('div');
      rows.setAttribute('class', 'row');
      board.appendChild(rows);
      console.log(rows);
      
  
      for (let i = 0; i < 4; i++) {
        const columns = document.createElement('div');
        columns.setAttribute('class', 'col');   
        rows.appendChild(columns);
        console.log(columns);
        
      }  
    }
    
    const column = document.getElementsByClassName('col');
    console.log(column);
    for (let i = 0; i < column.length; i++) {
      column[i].addEventListener('click', function(e){
        e.target.style.background = randomColor();
      })
    }

    function randomColor() {
      return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }
    



  // Add code here
})
