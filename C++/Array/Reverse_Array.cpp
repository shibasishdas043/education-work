#include <iostream>
using namespace std;

void alternate(int arr[], int size) {
    int start1 = 0;
    int start2 = 1;
    for (int i = 0; i < size; i++)
    {
        if (start2 < size)
        {
           swap(arr[start1],arr[start2]);
        }
        start1 += 2;
        start2 += 2;
        
    }

}
/*
void reverse(int arr[], int size) {
    int start = 0;
    int end = size - 1;
    while (start <= end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}
*/

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main(){
    int arr[6] = {1, 2, 3, 4, 5, 6};
//    int brr[5] = {7, 8, 9, 10, 11};

//    cout << "Original arr : ";
//    printArray(arr, 6);
    
    alternate(arr, 6);
    cout << "Alternate arr : ";
    printArray(arr, 6);

//    cout << "Original brr: ";
//    printArray(brr, 5);
    
//    alternate(brr, 5);
//    cout << "Reversed brr: ";
//    printArray(brr, 5);

    return 0;
}
