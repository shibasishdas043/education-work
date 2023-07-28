// leet code - Write A Program To Print The Transpose Of The Matrix Entered By The User .
#include<stdio.h>
int main(){
    int arr[2][3];
    int r,c;
    printf("Enter Number Of Rows = ");
    scanf("%d",&r);
    printf("Enter The Number Of Columns = ");
    scanf("%d",&c);
    printf("Enter All The Elements = \n");
// Original Output 
//123
//456
//But Needed
//14
//25
//36
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            scanf("%d",&arr[i][j]);
        }
        
    }
    printf("\n");
    int brr[c][r];
    for (int i = 0; i < c; i++)
    {
        for (int j = 0; j < r; j++)//main Thing Here
        {
            //printf("%d ",arr[j][i]);// main Thing And Here
            brr[i][j] = arr[j][i];
        }
        
    }
    for (int i = 0; i < c; i++)
    {
        for (int j = 0; j < r; j++)
        {
            printf("%d",brr[i][j]);
        }
        printf("\n");
    }
    
    return 0;
}