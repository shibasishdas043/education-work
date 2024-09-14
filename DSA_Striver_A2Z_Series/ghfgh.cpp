#include <iostream>
using namespace std;
int main(){
    int arr[7] = {1,1,2,3,3,4,4};
    int xor1 = 0;
    for (int i = 0; i < 7; i++)
    {
        xor1 ^= arr[i];
    }
    cout<<xor1;


return 0;
}