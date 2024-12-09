//Write A Program To Store Roll Number And Marks Obtained By 4 Students Side By Side In A Matrix .
#include<stdio.h>
int main(){
    int arr[4][2];
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 1; j++)
        {
            scanf("%d",&arr[i][j]);
        }
        
    }
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 1; j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    return 0;
}