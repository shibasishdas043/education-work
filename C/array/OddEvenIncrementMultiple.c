
// Question = Given An Array Of Integers, Change The Value Of All Odd Indexed Elements To Its Second Multiple and Increment All Even Indexed Value By 10 .

#include<stdio.h>
int main (){
    int arr[7] = {1,2,3,4,5,6,7};
    for (int i = 0; i <= 6; i++)
    {
        if (i%2 != 0)
        {
            arr[i] = arr[i]*2;
        }
        else
        {
            arr[i] = arr[i] + 10;
        }   
    }
    for (int i = 0; i <= 6; i++)
    {
        printf("%d ",arr[i] );
    }
    return 0;
}