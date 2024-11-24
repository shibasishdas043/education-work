#include<iostream>
using namespace std;
#include<string.h>
void printName(int st,int end){
    if (st>end)
    {
        return;
    }
    else{
    // string str = "Shibasish Das";
    // cout<<str<<endl;
    cout<<end<<" ";
    end--;
    printName(st,end);
    }
}
int main(){
    int start,ending;
    cout<<"Enter Start = ";
    cin>>start;
    cout<<"Ending = ";
    cin>>ending;
    printName(start,ending);
    return 0;
}