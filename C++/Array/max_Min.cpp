#include <iostream>
using namespace std;
int getMax(int num[], int n){
    int maxi = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if (num[i] > max)
        {
            max = num[i];
        }
        
    }
    return max;
}
int getMin(int num[], int n){
    int min = INT_MAX;
    for (int i = 0; i < n; i++)
    {
        if (num[i] < min)
        {
            min = num[i];
        }
        
    }
    return min;
}
int main(){
int size;
cin>>size;
int num[100];
// input
for (int i = 0; i < size; i++)
{
    cin>>num[i];
}
cout<<"Maximum Value Is : "<< getMax(num , size)<<endl;
cout<<"Minimum Value Is : "<< getMin(num , size)<<endl;
return 0;
}