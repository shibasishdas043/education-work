#include <iostream>
using namespace std;
int main(){

    int arr[10] = {
        1,2,3,4,5,6,7,8,9,10
    };

    int size = sizeof(arr)/4;
    
    int temp = 0;
    int i = 0;
    int j = size - 1;
    while (i < j)
    {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    for (int i = 0; i < size; i++)
    {
        cout<<" "<<arr[i];
    }

return 0;
}