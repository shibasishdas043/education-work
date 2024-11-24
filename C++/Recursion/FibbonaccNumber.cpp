#include<iostream>
using namespace std;
int fibbonacci(int num){
    if (num<=1)
    {
        return num;
    }
    int firstLast = fibbonacci(num-1);
    int secondLast = fibbonacci(num-2);
    return firstLast+secondLast;
}
int main(){
    for (int i = 0; i < 26; i++)
    {
        cout<<" "<<fibbonacci(i);
    }
    
    return 0;
}