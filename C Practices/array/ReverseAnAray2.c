// question = Rotate The Given Array 'a' By k Steps , Where k Is Non-Nagative .
// Note = k Can Be Greater Than n As Well Where n Is The Size Of Array 'a' .
// 1st Step . Althogh First Technic .
// #include<stdio.h>
// void reverse(int arr[]){
//     int i =0;
//     int j = 4;
//     while (i < j)
//     {
//         int temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
//     return 0;
// }
// int main(){
//     int arr[7] = {1,2,3,4,5,6,7};
//    //reverse(arr);
//    //Make Index 1-4 Reverse .
//    for (int i = 1,j = 4; i <= j; i++,j--)
//    {
//        int temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//    }
   
//     for (int i = 0; i <= 6; i++)
//     {
//         printf("%d ",arr[i]);
//     }
//     return 0;
// }

// 2nd Step . 2nd Technic .
#include<stdio.h>
void reverse(int arr[], int si, int ei){
    for(int i=si,j=ei; i<j; i++,j--)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return 0;
}
int main(){
    int arr[7] = {1,2,3,4,5,6,7};
    reverse(arr,1,4);
    // If You Want To Reverse The Whole Array Just Type Instead Of reverse(arr,1,4) To reverse(arr,0,6) .
   //Make Index 1-4 Reverse .
   for (int i = 0; i <= 6; i++)
    {
        printf("%d ",arr[i]);
    }
    return 0;
}




