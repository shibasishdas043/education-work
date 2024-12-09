//Question - Given An n x m Matrix 'a' Print All The Elements Of The Matrix In Spiral Order. (Leet Code).
#include<stdio.h>
int main(){
    int m,n;
    printf("Enter No Of Rows Of Matrix : ");
    scanf("%d",&m);
    printf("Enter No Of Columns Of Matrix : ");
    scanf("%d",&n);
    int a[m][n];
    printf("Enter The Number Of Elements !");
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            scanf("%d",&a[i][j]);
        }
        
    }
    printf("\n");
    //Spiral print 
    int minRow = 0;
    int maxRow = m - 1;
    int minColumn = 0;
    int maxColumn = n - 1;
    int totalNumberElements = m * n;
    int count = 0;
    while (count < totalNumberElements)
    {
        //Print The Minimum Row .
        for (int j = minColumn; j <= maxColumn && count < totalNumberElements; j++)
        {
            printf("%d ",a[minRow][j]);
            count++;
        }
        minRow++;
        //Print The Maximum Column .
        for (int i = minRow; i <= maxRow && count < totalNumberElements; i++)
        {
            printf("%d ",a[i][maxColumn]);
            count++;
        }
        maxColumn--;
        //Print The Maximum Row Reverse .
        for (int j = maxColumn; j >= minColumn && count < totalNumberElements; j--)
        {
            printf("%d ",a[maxRow][j]);
            count++;
        }
        maxRow--;
        //Print The Minimum Column;
        for (int i = maxRow; i >= minRow && count < totalNumberElements; i--)
        {
            printf("%d ",a[i][minColumn]);
            count++;
        }
        minColumn++;

    }
    return 0;
}    