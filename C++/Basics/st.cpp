#include <iostream>
using namespace std;
void un(int first,int last,int arr[]){
    while (first<(last/2))
    {
        swap(first,last);
        first++;
        last--;
    }
    
}
int main(){
    int arr[5] = {1,2,3,4,5}; 
    int f,n;
    f = arr[0];
    n = sizeof(arr);
    int ut = un(f,n,arr);
    
    return 0;
}