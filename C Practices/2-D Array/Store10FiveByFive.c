//Write A Program To Store 10 At Every Index Of A 2D Matrix With 5 Rows And 5 Columns . 
#include<stdio.h>
int main(){
    int arr[5][5];
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            scanf("%d",&arr[i][j]);
        }
        
    }
    printf("\n");
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    
    return 0;
}