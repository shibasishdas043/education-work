#include <iostream>
using namespace std;
int main(){
    int a[10]={1,2,3,4,5,6,7,8,9,10};
    int k = 14;
    int size = sizeof(a)/sizeof(a[0]);
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size; j++)
        {
            if (a[i] == a[j])
            {
               continue;
            }
            if (a[i]+a[j] == k)
            {
                cout<<a[i]<<" "<<a[j];
                break;
            }
            
        }
        
    }
    

return 0;
}