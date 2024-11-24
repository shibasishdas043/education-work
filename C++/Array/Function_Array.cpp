#include <iostream>
using namespace std;
// void printArray(int arr[], int size){
//     cout<<"Printying The Array"<<endl;
//     for (int i = 0; i < size; i++)
//     {
//         cout<< arr[i] <<" "<<endl;
//     }
//     cout<<"printing Done"<<endl;

// }
int main(){

    int arr[15];
    // printArray(arr,15);

    char ch[5] = {'a','b','c','r','p'};
    cout<<ch[3]<<endl;
    cout<<"Printying The Array"<<endl;
    for (int i = 0; i < 5; i++)
    {
        cout<< ch[i] <<" ";
    }
    cout<<endl<<"printing Done"<<endl;

    return 0;
}