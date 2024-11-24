#include <iostream>
using namespace std;
int main(){
    int x[2] = {13,12};
    int *ptr = &x[0];
    cout<<ptr<<endl;
    cout<<*ptr++<<endl;
    cout<<*ptr<<endl;
    cout<<++(*ptr)<<endl;
    cout<<(*ptr)++<<endl;
    cout<<*ptr<<endl;
    cout<<*++ptr<<endl;

return 0;
}