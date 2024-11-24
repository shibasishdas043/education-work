#include<iostream>
using namespace std;
void greet(){
    cout<<"Heyyyy !";
    greet();
}
int main(){
    greet();

    return 0;
}