#include<stdio.h>
int main(){
    int row;
    printf("Enter row");
    scanf("%d",&row);
    int column;
    printf("Enter column");
    scanf("%d",&column);

    for (int i = column; i >= 1; i--)
    {
        for (int j = 1; j <= column; j++)
        {
            printf("%d ",i);
        }
        printf("\n");
    }
    

    return 0;
}