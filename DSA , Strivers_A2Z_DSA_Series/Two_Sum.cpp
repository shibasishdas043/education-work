#include <iostream>
#include <algorithm>
using namespace std;
int main(){
    int max1 = 0,max2 = 0;

    int k;
    cin>>k;

    int a[] = {1,2,3,4,5,6,7,8,9};
    int n = sizeof(a)/sizeof(a[0]);
    int left = 0, right = 1;
    for (int i = 0; i < n-1 ; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if(k==a[left]+a[j]){
                // max1 = a[left];
                // max2 = a[j];
                // max1 = max(max1,a[left]);
                // max2 = max(max2,a[j]);
                cout<<a[left]<<" "<<a[j];
                break;
            }
            else{
                left++;
            }
        }
        
    }

return 0;
}