#include<iostream>
using namespace std;
int main(){
    int arr[] = { 2,3,4,5,6,7,8,9,10};
    int size = sizeof(arr)/4;
    int minimum = arr[0];
    for (int i = 0; i < size; i++)
    {
        if (arr[i]<minimum)
        {
            // max = arr[i];
            minimum = min(minimum,arr[i]);


        }
        
    }
    cout<<" "<<minimum;

    
    return 0;
}