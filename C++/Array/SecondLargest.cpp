#include <iostream>
using namespace std;
int main(){

    int arr[] = {1,2,3,4,5,6,7,8,10,12,14};
    int size = sizeof(arr)/4;
    int maximum = INT_MIN;

    for (int i = 0; i < size; i++)
    {
        if(maximum < arr[i]){
            maximum = arr[i];
        }
    }
    
    int smaximum = INT_MIN;

    for (int i = 0; i < size; i++)
    {
        if (smaximum < arr[i] && arr[i] < maximum)
        {
            smaximum = arr[i];
        }
        
    }
    
    cout<<"FIrst Maximum = "<<maximum;
    cout<<endl<<"Second Maximum = "<<smaximum;

return 0;
}