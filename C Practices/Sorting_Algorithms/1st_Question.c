// Given An Array Of Integers With 1 To n Elements And The size O The array if n+1 . One elementm Is 
//Occuring More Than Once Iether Duplicate Number Is Present . Find The DUplicate Element .

// 1st Method ..

// #include<stdio.h>
// int main(){
//     int arr[10] = {1 , 2 ,3 , 4 , 5 , 6 , 7 , 8 , 7 , 10};
//     for (int i = 0; i < 10 - 1; i++)
//     {
//         for (int j = i + 1; j < 10 ; j++)
//         {
//             if (arr[i] = arr[i] )
//             {
//                 printf("The Duplicate Number Is : %d",arr[i]);
//                 break;
//             }
//             else
//             {
//                 printf("There Is No Duplicate Number !");
//             }
            
            
//         }
        
//     }
//     return 0;
// }

//Method 2 ..

#include<stdio.h>
int main(){
    int arr[10] = {1 , 2 ,3 , 4 , 5 , 6 , 7 , 8 , 7 , 10};
    int brr[10] = 0;
}

// Method 3 . . (Best)

// #include<stdio.h>
// int main(){
//     int arr[10] = {1 , 2 ,3 , 4 , 5 , 6 , 7 , 8 , 7 , 10};
//     int n = 1;
//     int sum , sum2;
//     sum = (n*(n+1))/2;
//     for (int i = 0; i < 10; i++)
//     {
//         for (int j = i + 1; j < 10; j++)
//         {
//             sum2 = arr[i] + 1;
//         }
        
//     }
//     int minus;
//     minus = sum2 - sum;
//     printf("%d",minus);
//     return 0;
// }