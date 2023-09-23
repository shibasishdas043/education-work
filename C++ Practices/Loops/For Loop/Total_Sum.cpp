#include <iostream>
using namespace std;
int main(){
    int n;
    cout<< "Enter The Value Of n : ";
    cin>>n;
    int sum = 0;
    for (int i = 0; i <= n; i++)
    {
        sum+=i;
    }
    cout<< sum<<endl;

return 0;
}