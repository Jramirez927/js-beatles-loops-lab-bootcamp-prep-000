function theBeatlesPlay(musicians, instruments){
  var return_arr = new Array()
  for(var i = 0; i < musicians.length; i++){
    return_arr.push(musicians[i] + " plays " + instruments[i])
  }
  return return_arr
}