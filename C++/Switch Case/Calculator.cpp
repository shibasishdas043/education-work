#include <iostream>
using namespace std;
int main(){

    int a , b;
     cout<< "enter the value of a";
     cin>>a;
     cout<<"enter the value of b";
     cin>>b;

     char op;
     cout<<"Enter The Operation You Want To Perform";
     cin>>op;
     switch (op)
     {
     case '+':cout<<(a+b)<< endl;
     break;
     case '-':cout<<(a-b)<<endl;
     break;
     case '*':cout<<(a*b)<<endl;
     break;
     case '/':cout<<(a/b)<<endl;
     break;
     case '%':cout<<(a%b)<< endl;
     break;
     default: cout<<"Please Enter A Valid Operation";
     break;
     }

    return 0;
}