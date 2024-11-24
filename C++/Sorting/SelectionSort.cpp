#include <iostream>
using namespace std;
void sort_Array(int arr[],int n){
    int tem;
    for (int i = 0; i <= n-2; i++)
    {
        int min;
        min = i;
        for (int j = i; j <= n-1; j++)
        {
            if (arr[j] < arr[min])
            {
                min = arr[j];
            }
            
        }
        tem = arr[min];
        arr[min] = arr[i];
        arr[i] = tem;
    }
    for (int i = 0; i <= n-1; i++)
    {
        cout<<arr[i]<<" ";
    }
}
int main(){
    
    int j = 6;
    int arr[j] = {6,5,4,3,2,1};
    sort_Array(arr,j);
    
return 0;
}