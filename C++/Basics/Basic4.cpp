#include<iostream>
using namespace std;
#include<vector>
void reverse(int num){
    int copy = num;
    vector<int> vect;
    while (num>0)
    {
        int lastNumber = num %  10;
        vect.push_back(lastNumber);
        num = num / 10;
        
    }
    for(int x: vect){
        cout<<" "<<x;
    }
    
}
int main(){
    int n;
    cout<<"Enter Number = ";
    cin>>n;
    reverse(n);

    return 0;
}