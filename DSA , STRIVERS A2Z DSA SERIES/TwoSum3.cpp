#include <iostream>
using namespace std;
int main(){
    int a[10]={1,2,3,4,5,6,7,8,9,10};
    int k = 14;
    int size = sizeof(a)/sizeof(a[0]);
    int l = a[0];
    int r = a[size-1];
    while (l<r)
    {
        int sum = a[l]+a[r];
        if (sum == k)
        {
            cout<<l<<" "<<r;
            cout<<endl;
            cout<<a[l]<<" "<<a[r];
            break;
        }
        if (sum < k) 
        {
            l++;             // Increase l to get a bigger sum
        }
        else 
        {
            r--;             // Decrease r to get a smaller sum
        }

    }
    
    return 0;
}    