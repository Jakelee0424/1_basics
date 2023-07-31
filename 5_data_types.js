/**
 * 
 * Data Types
 * 
 * 여섯개의 Primitive Type과 한개의 오브젝트 타입
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언, 참,거짓)
 * 4) undefined (언디파인드) 
 * 5) null (널)
 * 6) symbol (심볼)
 * 
 * 7) object(객체)
 *     
 * 
 */

const age = 32;
const temperature = -10;
const pi = 3.14;
const infinity = Infinity;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log(infinity)



const name = 'jake';
const jake = "제이크"
console.log(typeof name);
console.log(jake);

/**
 * Template Literal
 * 
 * 
 * 
 * escape 문자
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) \\ -> 백슬래시 입력 
 */

// const lee = 'jake\njake, jeke\tjake, jake\\jake'
// console.log(lee);

const lee2 = `jake
jake \\ jake
    jake`
console.log(lee2);

//------------------
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * 값이 초기화 되지 않았을 때
 * 
 */

let noinit;

console.log(noinit);


/**
 * null 널값을 입력
 * 개발자가 명시적으로 없는 값으로 초기화
 * typeof하면 object로 나옴
*/
let noinit2 = null;
console.log(typeof noinit2);

/**
 * 
 * symbol 타입
 * 유일무이한 값을 생성
 * 
 */


const test1 ='1';
const test2 ='1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);


/**
 * Object 타입
 * 
 * MAp
 * 키:밸류의 쌍으로 이루어져 있다
 * key : value
 * 
 */


const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색'
};

console.log(dictionary)
console.log(dictionary['red']);
console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트ㅗ 나열 할 수 있는 타입
 */

const iveMembers = [
    '안유진',
    '가울',
    '레이',
];
console.log(iveMembers);
console.log(iveMembers[0]);

iveMembers[0] = '제이크'
console.log(iveMembers);

const dictionary2 = [
    '빨간색',
    '주황색',
    '노란색',
];

console.log(dictionary2)
console.log(dictionary2[0]);
dictionary2[0] = '검은색'
console.log(dictionary2)
console.log(typeof dictionary);


// index 0부터 할당


/**
 * static typing -> 변수를 선언할 때 어떤 타임의 변수를 선언할 지 명시(c)
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 안고 값에 의해 타입을 추론 (js)
 */