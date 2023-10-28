#include <iostream>
using namespace std;
int power(){

    int c, d;
    int a, b;
    cin>>a>>b;
    
    int ans = 1;

    for(int i = 1; i <= b; i++)
    {
        ans = ans * a;
    }
    return ans;
}
int main(){

   int answer = power();
   cout << "The Answer Is : " << answer;

   return 0;
}