//Question = Write A program To Copy The Contents Of One Array Into Another In The Reverse Order .

#include<stdio.h>
#include<limits.h>
int main(){
    int arr[5] = {1,2,3,4,5};
    int brr[5];
    // int max = INT_MIN;
    for (int i = 0; i <= 4; i++)
    {
        brr[i] = arr[4-i];
        printf("%d ",brr[i]);
    }
    return 0;
}