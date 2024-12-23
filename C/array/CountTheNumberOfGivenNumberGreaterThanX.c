//Home Work . 
// Question = Count The Number Of Elements In given Array Greater Than A Given Number x .

#include<stdio.h>
int main(){
    int arr[20] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};
    int x = 1;
    int totalNumber = 0;
    for (int i = 0; i <= 20; i++)
    {
        if (x < arr[i])
        {
            totalNumber++;
        }
    }
    printf("Total Number Of Elements That Greater Than x Is = %d",totalNumber);
    return 0;
}