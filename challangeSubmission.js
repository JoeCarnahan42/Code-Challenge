const findSum = function(array) {
    // your code here - don't forget to return a number!
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
  };
  
const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let count = {}
  array.forEach(function (value) {
    if (!count[value]) {
      count[value] = 1
    }else {
      count[value] += 1
    }
  })
  let freq = Object.values(count)
  let freqMax = Math.max(...freq)
  let freqMin = Math.min(...freq)
  let mostFreq = Object.keys(count).filter(key => count[key] === freqMax)
  let leastFreq = Object.keys(count).filter(key => count[key] === freqMin)
  let result = {
    most: mostFreq,
    least: leastFreq
  }
  return result
}

  
  
const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  let reversedArray = []
  for(let i = 0; i < str.length; i++) {
    reversedArray.push(str[i])
  }
  reversedArray.reverse()
  const reversedString = reversedArray.join("")
  const reversedTestString = reversedString.toLowerCase()
  const forwardTestString = str.toLowerCase()
  if(forwardTestString == reversedTestString) {
    return true
  }else {
    return false
  }
  
};
  
const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let prods = []
  let highestProd = 0
  for(let i = 0; i < array.length; i++) {
    prods.push(array[i] * array[i + 1])
  }
  prods.forEach((num) => {
    if(num > highestProd) {
      highestProd = num
    }
  })
  return highestProd
};
  
const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  let array = []
  let newArray = []
  for(let i = 0; i < str.length; i++) {
    array.push(str[i])
  }
  const findParenthesis1 = array.findIndex((element) => {
    return element === "("
  })
  const findParenthesis2 = array.findIndex((element) => {
    return element === ")"
  })
  const comparisonArray = array.slice(findParenthesis1, findParenthesis2 + 1)
  newArray = array.splice(findParenthesis1, comparisonArray.length)
  const newString = array.join("")
  return newString
};
  
const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  calcPointsArray = []
  let wordArray = []
  const points = ['a', 1, 'e', 1, 'i', 1, 'o', 1, 'u', 1, 'l', 1, 'n', 1, 'r', 1, 's', 1, 't', 1, 'd', 2, 'g', 2, 'b', 3, 'c', 3, 'm', 3, 'p', 3, 'f', 4, 'h', 4, 'v', 4, 'w', 4, 'y', 4, 'k', 5, 'j', 8, 'x', 8, 'q', 10, 'z', 10]
  for(let i = 0; i < str.length; i++) {
    wordArray.push(str[i])
  }
  wordArray.forEach((letter) => {
    for(let i = 0; i < points.length; i++) {
      if(letter === points[i]) {
        calcPointsArray.push(points[i + 1])
      }
    }
  })
  const totalPoints = calcPointsArray.reduce((acc, curr) => {
    return acc + curr
  })
  return totalPoints
};
