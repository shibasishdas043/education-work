#include <iostream>
using namespace std;
void dummy(int n){
    cout<<"N Is :"<<endl;
    n++;
    cout<<n;
}
int main(){
    
    int n;
    cin>>n;
    
    dummy(n);
    
    cout<<"Number Is "<< n<<endl;

    return 0;
}