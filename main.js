<script>
  let displayCard = document.getElementById("displayCard"); my

  let amount = document.getElementById("amount");
  let title = document.getElementById("title");
  
  
  
  
//   function mtncard(min , max) {
    // return diaplayCard.innerHTML = Math.floor(Math.random() * ()) + 10000000000;
    // console.log(Math.floor(Math.random() * 100000000001));
//   }
;
 function mtncard(min, max) {
let a = Math.floor(Math.random() * (max - min )) + min;
let b = Math.floor(Math.random() * (max - min + 1)) + min ;
let c = Math.floor(Math.random() * (max - min + 1)) + min ;
let d = Math.floor(Math.random() * (max - min + 1)) + min ;
    displayCard.innerHTML = ` ${a} - ${b} -${c} - ${d}`
//    displayCard.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min + '-' + (Math.floor(Math.random() * (max - min + 1)) +min)+ '-' + (Math.floor(Math.random() * (max - min + 1)) +min) + '-' +  (Math.floor(Math.random() * (max - min + 1)) +min)  ;
  console.log(displayCard);
}

  function handleChange(params) {
    console.log(params.value);
    if (params.value == "Airtel") {
        title.innerHTML = `<p  style="color: red">AIRTEL</p>`
    }
    else if (params.value == "MTN") {
        title.innerHTML = `<p  style="color: yellow">MTN</p>`
    }
    else if (params.value == "GLO" ) {
        title.innerHTML = `<p  style="color: green">Globacom</p>`
    }
    else  {  
       title.innerHTML = `<p  style="color: yellowgreen">Etisalat</p>`
    }
}

</script
