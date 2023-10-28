//Sort 0 And 1 . In An Array
#include <iostream>
using namespace std;

void sort(int arr[] , int n){
    int i = 0 , j = n - 1;
    while(i < j)
    {
        while(arr[i] == 0 && i < j)
        {
            i++;
        }
        while (arr[j] == 1 && i < j)
        {
            j--;
        }
       if(arr[i] == 1 && arr[j] == 0 && i < j)
        {
            swap(arr[i] , arr[j]);
            i++;
            j--;
        }
    
    }

}

int main(){
    int arr[8] = {1,0,1,0,0,1,0,0};
    
    sort(arr , 8);
    
    for(int i = 0; i <= 8 - 1; i++){
    cout << arr[i] <<" ";
    }
    cout << endl;
return 0;
}