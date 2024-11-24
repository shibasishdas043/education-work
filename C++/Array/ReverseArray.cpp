#include <iostream>
using namespace std;

int main(){

    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    int brr[10] = {0};

    int size = sizeof(arr)/4;

    for (int i = 0; i <= 9; i++)
    {
        int j = size - 1 - i;
        brr[i] = arr[j];       
    }
    
    for (int i = 0; i <= 9; i++)
    {
        cout<<" "<<brr[i];
    }
    
return 0;
}