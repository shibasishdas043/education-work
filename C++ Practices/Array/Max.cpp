#include<iostream>
using namespace std;
int main(){
    int arr[] = {1,2,3,4,5,6,7,8,9,10};
    int size = sizeof(arr)/4;
    int maximum = arr[0];
    for (int i = 0; i < size; i++)
    {
        if (arr[i]>maximum)
        {
            // max = arr[i];
            maximum = max(maximum,arr[i]);


        }
        
    }
    cout<<" "<<maximum;

    
    return 0;
}