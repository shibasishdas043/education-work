#include<stdio.h>
#include<limits.h>
int main(){
    int arr[7] = {7,4,5,9,8,2,1};
    int n = 7;
    printf("Unsorted Array\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d ",arr[i]);
    }
    
    // Selection Sort .
    //Make Dry Run Yourself . (Home Work)

    for (int i = 0; i < n - 1; i++) // n - 1 passes
    {
        int minElement = INT_MAX;
        int minIndex = -1;
        for (int j = i; j <= n - 1; j++)
        {
            if (minElement > arr[j])
            {
                minElement = arr[j];
                minIndex = j;
            }
            //Swapping The Minimum And First Element Of Unsorted Part
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        
    }
    printf("\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d ",arr[i]);
    }
    return 0;
}