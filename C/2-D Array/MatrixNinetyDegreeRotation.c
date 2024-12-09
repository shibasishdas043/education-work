// Write A Program To Rotate A Matrix 90` Clockwise .(Leetcode - 48)
#include<stdio.h>
int main(){
    int n;
    printf("Enter Number Of Rows/Columns = ");
    scanf("%d",&n);
    printf("Enter All The Elements = \n");
    int arr[n][n];
// Original Output 
//123
//456
//But Needed
//14
//25
//36
    // Input
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            //for transpose always swap arr[i][j] to arr[j][i]
            scanf("%d",&arr[i][j]);
        }
        
    }
    //Transpose .
    //here if i->0 goes to n-1 Then j->i goes to n-1
    for (int i = 0; i < n; i++)
    {
        for (int j = i; j < n; j++)//main thing here (j = i;)
        //also This Works j<=i;
        {
            int temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;

        }
        
    }
    //Output Of transpose .
    for (int i = 0; i < n; i++)
    {
        for (int k = 0; k < n; k++)
        {
            printf("%d ",arr[i][k]);
        }
        printf("\n");
    }
    //Rotate .
    for (int i = 0; i < n; i++)
    {
        int j = 0;
        int k = n - 1;
        while (j < k)
        {
            int temp = arr[i][j];
            arr[i][j] = arr[i][k];
            arr[i][k] = temp;
            j++;
            k--;
        }
        
    }

    //Output
     for (int i = 0; i < n; i++)
    {
        for (int k = 0; k < n; k++)
        {
            printf("%d ",arr[i][k]);
        }
        printf("\n");
    }        
    return 0;
}