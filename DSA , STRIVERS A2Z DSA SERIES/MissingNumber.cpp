#include <iostream>
using namespace std;
int main(){
    int arr[5] = {1,2,3,4,5};
    int brr[5] = {1,2,3,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    int l = sizeof(brr)/sizeof(brr[0]);
    int k = (n*(n+1))/2;
    int m = (l*(l+1))/2;
    cout<<k<<endl;
    cout<<m<<endl;
    int it = arr[0];
    int kt = brr[0];
    int sum = 0;
    int sum1 = 0;
    for (int i = 0; i < n; i++)
    {
        sum = sum + arr[i];
        
    }
    for (int i = 0; i < l; i++)
    {
        sum1 = sum1 + brr[i];
        
    }
    cout<<sum-sum1;

return 0;
}