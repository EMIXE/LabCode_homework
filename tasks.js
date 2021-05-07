// 3. Создайте любой объект, добавьте в него новый ключ со значением, потом удалите любой существующий ключ. Потом проитерируйте объект используя Object.entries, Object.values, Object.keys.
let newObj = {name: "Artyom", sex: "male"}
newObj.old = 23
delete newObj.sex

console.log(Object.entries(newObj))
console.log(Object.values(newObj))
console.log(Object.keys(newObj))

//4. Создайте любой массив, измените массив используя методы push, unshift, shift, pop. Как можно удалить элемент из массива по значение и по номер элемента в массиве, напишите пример?
let newArr = [1, 2, 3, 4, 5]
newArr.push(10)
newArr.unshift(99)
newArr.shift()
newArr.pop()

newArr.splice(2,1) // удаление по индексу
console.log(newArr)

newArr.splice(newArr.indexOf(4), 1) // удаление по значению
console.log(newArr)