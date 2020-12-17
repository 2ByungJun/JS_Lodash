const { initial } = require('lodash');
var _ = require('lodash');

/**
 * UnderscoreJS 배열 관련 함수 정리
 */


// 배열의 첫 요소
var firstV =  _.first([5,4,3,2,1]);
console.log( 'first : ')
console.log(firstV)
console.log('\n')

// 배열의 마지막 요서를 제외 후 리턴
var initialV =  _.initial([5,4,3,2,1]);
console.log( 'initial : ')
console.log(initialV)
console.log('\n')

// 배열의 마지막 요소 리턴
var lastV =  _.last([5,4,3,2,1]);
console.log( 'last : ')
console.log(lastV)
console.log('\n')

/*** 임시적으로 동작안함 ***/
// 주어진 배열에서 index 까지의 요소를 제외하고 마저미 값을 가진 배열 리턴
// ( array, index )
// var restV =  _.rest([5,4,3,2,1], 2);
// console.log( 'rest : ' + restV + '\n')

// 주어진 배열 안의 요소들을 단일레벨의 배열로 병합
// ( array, shallow(true/false))
var flattenV =  _.flatten([5,[4],[[3]],[[[2]]],[[[[1]]]]]);
console.log( 'flatten : ')
console.log(flattenV)
console.log('\n')

    // true인 경우 : 1레벨씩만 제외시킴
    var flattenV2 =  _.flatten([ 5,[4],[[3]],[[[2]]],[[[[1]]]] ], true);
    console.log( 'flatten(true) :')
    console.log(flattenV2)
    console.log('\n')

// 주어진 배열에서 특정 값을 제외하고 리턴
// ( array, *values)
// *values는 가변인자로 여러 인자들을 넘길 수 있음
var withoutV =  _.without([5,4,1,1,1,1,1,3,3,3,3,3,3,2,1], 1, 3);
console.log( 'without : ')
console.log(withoutV)
console.log('\n')

