#include <iostream>
using namespace std;
int main(){

    int k;
    cin>>k;

    int a[] = {1,2,3,4,5,6,7,8,9};
    int n = sizeof(a)/sizeof(a[0]);
    int left = 0, right = 1;
    for (int i = 0; i < n; i++)
    {
        for (int j = left+1; j < n; j++)
        {
            if(k==a[left]+a[j]){
                cout<<a[left]<<" "<<a[j];
            }
            else{
                left++;
            }
        }
        
    }

return 0;
}