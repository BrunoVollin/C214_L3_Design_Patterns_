

interface Ordenador {
    ordenar(array: number[]): number[];
}

class BubbleSort implements Ordenador {
    ordenar(array: number[]): number[]{
        var i, j;
        var len = array.length;

        var isSwapped = false;

        for (i = 0; i < len; i++) {

            isSwapped = false;

            for (j = 0; j < len; j++) {
                if (array[j] > array[j + 1]) {
                    var temp = array[j]
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    isSwapped = true;
                }
            }
            if (!isSwapped) {
                break;
            }
        }

        return array
    }
}

class QuickSort implements Ordenador {
    ordenar(array: number[]): number[] {
        if (array.length <= 1) {
            return array;
        }

        var pivot = array[0];

        var left = [];
        var right = [];

        for (var i = 1; i < array.length; i++) {
            array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }

        return this.ordenar(left).concat(pivot, this.ordenar(right));
    }
}

class SelectionSort implements Ordenador {
    ordenar(array: number[]): number[] {
        var minIdx, temp,
            len = array.length;
        for (var i = 0; i < len; i++) {
            minIdx = i;
            for (var  j = i+1; j<len; j++) {
                if (array[j]<array[minIdx]) {
                    minIdx = j;
                }
            }
            temp = array[i];
            array[i] = array[minIdx];
            array[minIdx] = temp;
        }
        return array;
    }
}



class Ordena {
    ordenador: Ordenador;

    constructor(ordenador: Ordenador) {
        this.ordenador = ordenador;
    }

    ordenar(array: number[]): number[] {
        return this.ordenador.ordenar(array);
    }
}

const ordenadorBubleSort = new Ordena(new BubbleSort());
const ordenadorQuickSort = new Ordena(new QuickSort());
const ordenadorSelectionSort = new Ordena(new SelectionSort());

console.log(ordenadorBubleSort.ordenar([5, 4, 3, 2, 1]));   
console.log(ordenadorQuickSort.ordenar([5, 4, 3, 2, 1]));
console.log(ordenadorSelectionSort.ordenar([5, 4, 3, 2, 1]));