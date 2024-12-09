// Home Work = Find Out The Maximum Element And Minimum Element In A 2D Array .
//You Have To Find The Index Of Maximum Element .
#include<stdio.h>
int main(){

    int arr[3][3];

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            scanf("%d",&arr[i][j]);
        }
        
    }

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }

    int max_element = arr[0][0];// 0th index Of Both Row And Column .
    //Two variables maxElement and minElement are initialized with the value of arr[0][0] (the first element of the array) as a starting point.
    int min_element = arr[0][0];

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (arr[i][j] > max_element)
            {
                max_element = arr[i][j];
            }
            if (arr[i][j] < min_element)
            {
                min_element = arr[i][j];
            }
            
        }
        
    }

    //The program then iterates through all the elements of the array using nested loops. For each element, it checks if it is greater than the current maxElement. If it is, maxElement is updated with the new value. Similarly, it checks if the element is smaller than the current minElement, and if it is, minElement is updated with the new value.

    printf("Maximum element: %d\n", max_element);
    printf("Minimum element: %d\n", min_element);

    return 0;
}