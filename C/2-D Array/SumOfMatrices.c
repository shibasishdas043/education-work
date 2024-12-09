//Find The Sum Of A Given Matrix Of n x m .
#include<stdio.h>
int main(){
    int r,c;
    printf("Enter The Number Of Rows = ");
    scanf("%d",&r);
    printf("Enter The Number Of Columns = ");
    scanf("%d",&c);
    printf("Enter All The Elements !\n");
    int arr[r][c];
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            scanf("%d",&arr[i][j]);
        }
        
    }
    printf("\n");
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            printf("%d",arr[i][j]);
        }
        printf("\n");
    }
    int sum = 0;
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            sum += arr[i][j];
        }
        
    }
    printf("The Sum Of Given Matrix Is = %d",sum);
    return 0;
}