// C++ Program to demonstrate the
// increment and decrement operators
#include <iostream>
using namespace std;

int main()
{
	int x = 5;

	// This statement Incremented 1
	cout << "x++ is " << x++ << endl;

	// This statement Incremented 1
	// from already Incremented
	// statement resulting in
	// Incrementing of 2
	cout << "++x is " << ++x << endl;

	int y = 10;
	
	// This statement Decremented 1
	cout << "y-- is " << y-- << endl;

	// This statement Decremented 1
	// from already Decremented
	// statement resulting in
	// Decrementing of 2
	cout << "--y is " << --y << endl;

	return 0;
}
