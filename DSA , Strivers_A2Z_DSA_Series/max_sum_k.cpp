#include <iostream>
using namespace std;
int main(){
    int k;
    cout<<"Enter k : ";
    cin>>k;
    int len = 0;
    int a[] = {1,2,3,1,1,5,2,1,8,9};
    int size = sizeof(a)/sizeof(a[0]);
    int i = 0;//right
    int j = 0;//left
    int sum = a[0];
    while(i<size)
    {
        while(j <= i && sum > k)
        {
            sum = sum - a[j];
            j++;
        }
        if(i<size){
           sum = sum + a[i];//left
        }
        if (sum == k)
        {
            len = max(len,i-j+1);
            cout<<len<<" ";    
        }
        i++;
        
        
    }
    
return 0;
}