// Given An Integer Array arr , Move All 0's To The End Of It While Maintaining The Relative Order Of The Non Zero Elements.
#include<stdio.h>
int main(){

    int arr[9] = {5 , 0 , 2 , 0 , 0 , 4 , 1 , 3 , 0};
    int ans[9];
    int idx = 0;

    for (int i = 0; i < 9; i++)
    {
        if (arr[i] != 0)
        {
            ans[idx] = arr[i];
            idx++;
        }
        
    }

    while (idx != 9) 
    {
        ans[idx] = 0;
        idx++;
    }
    

    for (int i = 0; i < 9; i++)
    {
        printf("%d ",ans[i]);
    }
    
    return 0;
}
// Home Work
// Sort This Array Without Making Copy Of The  Array .
// Hint Use Bubble Sort .
#include<stdio.h>
int main(){

    int arr[9] = {5 , 0 , 2 , 0 , 0 , 4 , 1 , 3 , 0};
    int n = 9;

    for (int i = 0; i < n-1; i++)
    {
        for (int j = 0; j <= n - 1 -i; j++)
        {
            if (arr[j] == 0)
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            
        }
           
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d ",arr[i]);
    }
    
    return 0;
}