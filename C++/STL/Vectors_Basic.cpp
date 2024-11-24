#include <iostream>
using namespace std;
#include<vector>
int main(){
    vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(90);
    vec.push_back(80);
    vec.push_back(70);
    vec.push_back(50);
    vec.push_back(40);
    // for (auto x: vec){
    //     cout<<" "<<x;
    // }
    vector<int> vec1(10,10);
    // for(auto x: vec1){
    //     cout<<" "<<x;
    // }
    vector<int> vec2{10,20,30,40,50,60,70,80,90,100};
    // for(auto x: vec2){
    //     cout<<" "<<x;
    // }
    
    return 0;
}    
 

