// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
function superbowlWin(array){
   
   const res = record.find(resp =>resp.result ==="W")
   console.log(res)
    
}
superbowlWin()
