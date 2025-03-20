#include<iostream>
using namespace std;

int partition(int arr[], int low, int high){
    int idx = low-1;
    int pivot = arr[high];
    for (int j = low; j < high; j++){
        if (arr[j] <= pivot){
            idx++;
            swap(arr[j], arr[idx]);
        }
        
    }
    idx++;
    swap(arr[idx], arr[high]);
    return idx;
    
}

void quickSort(int arr[], int low, int high){
    if(low < high){

        int ptIndex = partition(arr, low, high);
        quickSort(arr, low, ptIndex-1);
        quickSort(arr, ptIndex+1, high);

    }
}


int main(){

    int arr[8] = {5,3,8,2,9,1,4,7};
    int size = sizeof(arr)/sizeof(arr[0]);

    quickSort(arr, 0, size-1);

    for (int i = 0; i < size; i++){
        cout<<arr[i]<<" ";
    }  

    return 0;
}