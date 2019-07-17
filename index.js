function takeANumber(list,name){ 
    list.push(name) 
     return `Welcome, ${name}. You are number ${list.length } in line.`
   }
   
   function nowServing(list){ 
     if (list.length !=0) { 
      let customer =  list.shift() // storing  the first elemtn of list array in food variable. using shift method
      let nowServing = `Currently serving ${customer}.` //the element (customer name) that was pushed is is used here.
      return nowServing //return 
     }
     else {
       return "There is nobody waiting to be served!"
     }
   }
   
   function currentLine(list){ //function with an array
     let line = ''//empty variable
     for(let i = 0; i < list.length;i++){ //a loop, initiliase a counter variable i, if i is less then the length of the array we loop through the array and add 1 to the counter. keeps looping until the counter variable is greter or equal to array.
       line += ` ${i+1}. `  //storing the calculation into line.
       line += list[i]  //adding the cirrent element of the array to the string.
       if (list.length !=i+1){// if statemtn it checks the length os the array, if not eeaual to counter 
            line+=',' //adds the comma
       }
       
       
     }
     line = "The line is currently:"+ line
     
     
     if (list.length==0){
       return 'The line is currently empty.'
     
     }
     
     else {
       return line 
     }
     
     
     
   }