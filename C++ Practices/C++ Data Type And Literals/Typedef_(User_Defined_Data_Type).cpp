// C++ program to demonstrate typedef
#include <iostream>
using namespace std;

// After this line BYTE can be used
// in place of unsigned char
typedef unsigned char BYTE;

int main()
{
	BYTE b1, b2;
	b1 = 'c';
	cout << " " << b1;
	return 0;
}
