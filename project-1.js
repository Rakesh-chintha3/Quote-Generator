let quote=document.querySelector(".quote");
let name=document.querySelector(".name");
let btn=document.querySelector(".get-quote");
const quotes=[{
    quote:`"iam from gangaram , currently staying in hyderabad. because of my career."`,
    name:`" Meda Ajit"`
}, {
    quote:`"iam from yellandu , currently staying in vizag. because of to doing job in Infinite software solutions."`,
    name:`" Rosik Raj"` 
},{
    quote:`"iam from vennaram , currently staying in Khammam. because of my business."`,
    name:`" Harish"`
},{
    quote:`"iam from pindipole , currently staying in khammam. because of i don't have any goals."`,
    name:`" Sai kumar"`
},{
    quote:`"iam from garla , currently staying in chennai. because of to doing job in TCS."`,
    name:`" Sathwik"`
},{
    quote:`"iam from dornakal , currently staying in Hyderabad. because of my coaching."`,
    name:`" Prudvi Raj"`
},{
    quote:`"iam from yellandu , currently staying in khammam. because of my job."`,
    name:`" Madhu Shudhan"`
},{
    quote:`"iam from rangareddy , currently staying in Hyderabad. because of my Coaching"`,
    name:`" Anil"`
},{
    quote:`"iam from Nirmal , currently staying in Hyderabad to enjoy the life. "`,
    name:`" Dheeraj"`
},{
    quote:`"iam from narsampet , currently staying in Goa. because of my job"`,
    name:`" Joe"`
},];

btn.addEventListener("click", function(){
    // alert();
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText =quotes[random].quote;
    name.innerText =quotes[random].name;
})