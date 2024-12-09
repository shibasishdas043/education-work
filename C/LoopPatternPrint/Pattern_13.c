#include<stdio.h>
int main(){
    int row;
    printf("Enter row");
    scanf("%d",&row);
    int column;
    printf("Enter column");
    scanf("%d",&column);

    for (int i = 1; i <= row; i++)
    {
        for (int j = column; j >= 1; j--)
        {
            printf("%d ",j);
        }
        printf("\n");
    }
    

    return 0;
}