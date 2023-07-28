// Write A Program To Print The Multiplication Of Two Matrices Given By The User .
//Rules Of Multiplication
// If There Is two Matrices 1-> a[m][n] And b->b[p][q] Then [n] Sould Be Equal To [p]
//ex-> n == p
//Then Result Order Always Be Row-> m And Column -> q
// Example -> res[m][q]
//Its Mean Result In Order Is -> m x q
//A X B != B X A
#include<stdio.h>
int main(){
    // 1 2
    // 3 4
    // 5 6
    int a[3][2] = {{1,2},{3,4},{5,6}};
    //1 2 3 4
    //5 6 7 8
    int b[2][4] = {{1,2,3,4},{5,6,7,8}};
    int res[3][4];
    //Special Element
    int cr = 2; //first arrays column (Of question) = 2nd arrays row (Of Question){rc = row and column}
    //multiplying
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            //code ith Row Of a[][] And j column Of b[][]
            //{a[i][0],a[i][1],a[i][2].......} * {b[0][j],b[1][j],b[2][j]........}
            res[i][j] = 0;
            for (int k = 0; k < cr; k++)
            {
                res[i][j] += a[i][k] * b[k][j];
            }
            
            
        }
        
    }
    //print res
    // 11 14 17 20
    // 23 30 37 44
    // 35 46 57 68
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            printf("%d ",res[i][j]);
        
        }
        printf("\n");
    }
    

    return 0;
}

