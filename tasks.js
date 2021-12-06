// Задание 1
// Создать абстрактный класс “AClass” у которого будет свойство “Numbers” типа Array, 
// который будет содержать n натуральных чисел. Также AClass должен иметь метод “fill”, 
// который заполняет массив Numbers случайными числами; метод “factorial”, который возвращает
// массив факториалов из массива Numbers; и абстрактный метод “sort”. Конструктор принимает 
// один параметр “n” и вызывает метод “fill”. Метод “fill” можно вызывать только из методов 
// класса “AClass”. Метод “factorial” может вызываться из класса AClass и из дочерних классов.
// Реализовать два дочерних класса “Class1” и “Class2” с методом “sort” который сортирует 
// массив Numbers, а затем выдает массив факториалов. Способы сортировки в классах “Class1” и “Class2” должны различаться.

function getRandomInt(max) {
    //Возвращаем случайное число в диапозоне от 0 до max
    return Math.floor(Math.random() * max);
  }


class AClass {

    constructor(n) {
        this._fill(n);
        this._factorial(n);
      }

    Numbers = []; 
    Numbers_2 = [];

    _fill(point) {

        let i = 0;
        while (i < point) {
            this.Numbers.push(getRandomInt(10)); //Диапозон случайного числа
            i++;
        }
        return this.Numbers;
    }
    
    _factorial(point) {

        function factorial_func(n){     
            //Рекурсивно находим факториал числа
            if (n == 0 || n == 1) {
                return 1;
            }else {
                return n * factorial_func(n-1);
            }
        }

        let i = 0;
        while (i < point) {
            this.Numbers_2.push(factorial_func(this.Numbers[i]));
            i++;
        }

        return this.Numbers_2;
    }
    
    sort(A) {                        
            var n = A.length;
            for (var i = 0; i < n-1; i++)
            { var min = i;
            for (var j = i+1; j < n; j++)
                { if (A[j] < A[min]) min = j; } 
            var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
            }                    
        return A;  
        //Описана функционирующая сортировка выбором, но по ТЗ не используется
    }

}


class Class1 {

    constructor(unsorted_array, unsorted_array_2) {
        this.arr = unsorted_array;
        this.fact_arr = unsorted_array_2;
        this._BubbleSort(this.arr);
        this._BubbleSort(this.fact_arr);
      }

    _BubbleSort(A) { 
    //Сортируем полученный массив "пузырьком"
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (A[j+1] < A[j])
           { var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
        }
     }                     
    return A;
    }

}

class Class2 {

    constructor(unsorted_array, unsorted_array_2) {
        this.arr = unsorted_array;
        this.fact_arr = unsorted_array_2;
        this._ShellSort(this.arr);
        this._ShellSort(this.fact_arr);
      }

      _ShellSort(A) {
          //Для разнообразия 3 сортировкой выбрал сортировку Шелла
          var n = A.length, i = Math.floor(n/2);
          while (i > 0)
           { for (var j = 0; j < n; j++)
              { var k = j, t = A[j];
                while (k >= i && A[k-i] > t)
                 { A[k] = A[k-i]; k -= i; }
                A[k] = t;
              }
            i = (i==2) ? 1 : Math.floor(i*5/11);
           }
          return A;
      }
}
    

let first = new AClass(10); 

console.log(first.Numbers)
console.log(first.Numbers_2)

let first_sorted = new Class1(first.Numbers,first.Numbers_2);

console.log(first_sorted.arr)
console.log(first_sorted.fact_arr)

let second = new AClass(10); 

console.log(second.Numbers)
console.log(second.Numbers_2)

let second_sorted = new Class2(second.Numbers,second.Numbers_2);

console.log(second_sorted.arr)
console.log(second_sorted.fact_arr)