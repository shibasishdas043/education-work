// Question = Write A Program To Reverse The Array Without Using Any Extra Array .

#include<stdio.h>
void reverse(int arr[]){
    int i =0;
    int j = 4;
    while (i < j)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return 0;
}
int main(){
    int arr[5] = {1,2,3,4,5};
    reverse(arr);
    for (int i = 0; i <= 4; i++)
    {
        printf("%d ",arr[i]);
    }
    return 0;
}