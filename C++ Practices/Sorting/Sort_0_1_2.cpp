//Sort 0 And 1 , 2 . In An Array
#include <iostream>
using namespace std;
// Array Sorting
void sort012(int arr[] , int n){
    int low = 0, mid = 0, high = n - 1;

    while (mid <= high)
    {
        switch (arr[mid])
        {
        
            // If The Elementy Is 0
        case 0:
            swap(arr[low], arr[mid]);
            low++;
            mid++;
            break;
           // If The Element Is 1
        case 1:
            mid++;
            break;
            // If The Element Is 2
        case 2:
            swap(arr[mid], arr[high]);
            high--;
            break;
        
        default: cout<<" error :(";
            break;
        }
    }

}
// Array Ptrinting
void print(int arr[], int n){
    for (int i = 0; i < n; i++)
    {
        cout<< arr[i]<< " ";
    }
}
int main(){
    
    int arr[10] = {1,0,1,2,0,1,2,0,2,1};
    sort012(arr , 10);    
    print(arr, 10);

    return 0;
}