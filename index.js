function takeANumber(line, name) {
  var array = []
  for (var i = 0; i < line.length; i++) {
    array.push(name)
    return "Welcome, " + name + ". You are number " + line[i] + " in line."
  }
  return array
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line[0] + "."
    line.shift()
  }
}

function currentLine(line) {
  var i = 0
  var number = 1
  var array = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    while (i < line.length) {
      array[i] = " " + number + ". " + line[i]
      i++
      number++
    }
    return "The line is currently:" + array.toString()
  }
}

