#include<stdio.h>
int main(){

    int arr[10] = {1 , 5 , 3 , 4 , 2 , 6 , 7 , 8 , 9 , 10};// Sort This Home Work Trhough Insertion Sort

    int n = 10;

    for (int i = 1; i <= n - 1; i++)
    {
        int j = i;
        while (j >= 1 && arr[j] < arr[j - 1])
        {
            int temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
        
    }

    printf("\n");
    
    for (int i = 0; i < n; i++)
    {
        printf("%d ",arr[i]);
    }
    
    return 0;
}