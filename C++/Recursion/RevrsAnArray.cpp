#include<iostream>
using namespace std;
void reverse(int left,int right,int arr[]){
    if (left>=right)
    {
        return;
    }
    swap(arr[left],arr[right]);
    reverse(left+1,right-1,arr);
}
int main(){
    int n;
    cout<<"Enter Array Size = ";
    cin>>n;
    int arr[n];
    cout<<" Fil The Array = ";
    for (int i = 0; i < n; i++)
    {
        cin>>arr[i];
    }
    
    int l = 0;
    int r = n;
    
    reverse(l,r-1,arr);
    cout<<" Reversed Array = ";
    for (int i = 0; i < n; i++)
    {
        cout<<" "<<arr[i];
    }
    return 0;
}
