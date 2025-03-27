#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int sIdx, int mid, int eIdx){
    int i, j, k;
    int leftArrSize = mid - sIdx + 1;
    int rightArrSize = eIdx - mid;

    int leftArr[leftArrSize], rightArr[rightArrSize];

    // Copy data to temporary arrays
    for (i = 0; i < leftArrSize; i++){
        leftArr[i] = arr[sIdx + i];
    }
    for (j = 0; j < rightArrSize; j++){
        rightArr[j] = arr[mid + 1 + j];
    }

    i = 0;
    j = 0;
    k = sIdx;
    while (i < leftArrSize && j < rightArrSize){
        if (leftArr[i] <= rightArr[j]){
            arr[k] = leftArr[i];
            i++;
        }
        else{
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < leftArrSize){
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightArrSize){
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int sIdx, int eIdx){
    if (sIdx < eIdx){
        int mid = sIdx + (eIdx - sIdx) / 2;

        mergeSort(arr, sIdx, mid);
        mergeSort(arr, mid + 1, eIdx);

        merge(arr, sIdx, mid, eIdx);
    }
}

int main(){
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);

    for (int i = 0; i < n; i++){
        printf("%d ", arr[i]);
    }
    return 0;
}
