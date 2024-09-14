#include<iostream>
using namespace std;
void print(int n){
    cout<<"HEyyyy";
    print();
}
int main(){
    print(3);
    return 0;
}