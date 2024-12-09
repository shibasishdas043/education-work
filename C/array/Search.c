// question = Given An array , L a Number 'x' . fixed Out If 'x' Lies In The Array Or Not , Yes Then Print The Index . 
// #include<stdio.h>
// int main(){
//     int arr[7] = {1,2,3,4,5,6,7};
//     int x = 4;
//     for (int i = 0; i <= 6; i++)
//     {
//         if (arr[i] == x)
//         {
//             printf("%d Is Present In The Array And Its Index Is = %d",x,i);
//             break;
//         }
        
//     }
//     return 0;
// }
//another type . When 'break' Statement Is Out .
#include<stdio.h>
int main(){
    int arr[7] = {1,2,3,4,4,5,6,7};
    int x = 4;
    for (int i = 0; i <= 6; i++)
    {
        if (arr[i] == x)
        {
            printf("%d Is Present In The Array And Its Index Is = %d \n",x,i);
            // break;
        }
        
    }
    return 0;
}