// Question = Find The Second Largest Element In The Given Array .

// #include<stdio.h>
// #include<limits.h>
// int main(){
//     int arr[7] = {-10,-4,-200,-80,-19,-5,-12};
//     int max = INT_MIN; //Sob Theke Choto Number . 
//     int smax = INT_MIN; //Sob Theke Choto Number .
//     for (int i = 1; i <= 6; i++)
//     {
//         if (max <arr[i])
//         {
//             max = arr[i];
//         }
        
//     }
//     //smax = -4 Sob Theke Choto Apatoto Peye Gechi .
//     for (int i = 1; i <= 6; i++)
//     {
//         if (arr[i] != max && smax < arr[i])
//         {
//             smax = arr[i];
//         }
        
//     }
//     printf("%d",smax);
//     return 0;
// }

// 1 Line Loop Technic .
// #include<stdio.h>
// #include<limits.h>
// int main(){
//     int arr[7] = {1,2,3,4,5,6,7};
//     int max = INT_MIN; //Sob Theke Choto Number . 
//     int smax = INT_MIN; //Sob Theke Choto Number .
//     for (int i = 0; i <= 6; i++)
//     {
//         if (max <arr[i])
//         {
//             max = arr[i];
//         }
//         if (arr[i] != max && smax < arr[i])
//         {
//             smax = arr[i];
//         }
        
//     }
//     printf("%d",smax);
//     return 0;
// }

// 3rd Technic .
// #include<stdio.h>
// #include<limits.h>
// int main(){
//     int arr[7] = {1,2,3,4,5,6,7};
//     int max = INT_MIN; //Sob Theke Choto Number . 
//     int smax = INT_MIN; //Sob Theke Choto Number .
//     for (int i = 0; i <= 6; i++)
//     {
//         if (max <arr[i])
//         {
//             smax = max; // samx Is Now Previous max .
//             max = arr[i]; //max Is Now New max .
//         }
//     }
//     printf("%d",smax);
//     return 0;
// }

//4th Technic . For Decreasing Order .
// #include<stdio.h>
// #include<limits.h>
// int main(){
//     int arr[7] = {7,6,5,4,3,2,1}; // For Reverse Decreasing Order .
//     int max = INT_MIN; //Sob Theke Choto Number . 
//     int smax = INT_MIN; //Sob Theke Choto Number .
//     for (int i = 0; i <= 6; i++)
//     {
//         if (max <arr[i])
//         {
//             max = arr[i];
//         }
//         else if (smax < arr[i]) // max > arr[i]
//         {
//             smax = arr[i];
//         }
//     }
//     printf("%d",smax);
//     return 0;
// }

//5th Technic . For Mixed Order . But it's not Proper Working code .
// #include<stdio.h>
// #include<limits.h>
// int main(){
//     int arr[7] = {1,2,3,4,4,2,1}; // For Mixed Order .
//     int max = INT_MIN; //Sob Theke Choto Number . 
//     int smax = INT_MIN; //Sob Theke Choto Number .
//     for (int i = 0; i <= 6; i++)
//     {
//         if (max <arr[i])
//         {
//             max = arr[i];
//         }
//         else if (smax < arr[i]) // max > arr[i]
//         {
//             smax = arr[i];
//         }
//     }
//     printf("%d",smax);
//     return 0;
// }

//6th technic . for Mixed Order . Proper Worked .
#include<stdio.h>
#include<limits.h>
int main(){
    int arr[7] = {1,2,3,4,4,2,1}; // For Mixed Order .
    int max = INT_MIN; //Sob Theke Choto Number . 
    int smax = INT_MIN; //Sob Theke Choto Number .
    for (int i = 0; i <= 6; i++)
    {
        if (max <arr[i])
        {
            smax = max;
            max = arr[i];
        }
        else if (smax < arr[i] && max != arr[i]) // max > arr[i]
        {
            smax = arr[i];
        }
    }
    printf("%d",smax);
    return 0;
}