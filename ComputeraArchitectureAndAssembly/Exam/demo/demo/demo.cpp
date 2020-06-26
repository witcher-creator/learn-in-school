#include <iostream>
#include <string>
using namespace std;

string Dec2BinConverter(float temp) {
	string r;
	int phanNguyen = temp;
	while (phanNguyen != 0) {
		r = (phanNguyen % 2 == 0 ? "0" : "1") + r;
		phanNguyen /= 2;
	}
	
	if (0 != (temp -= int(temp))) {
		r += ".";
		while (temp != 1.0) {
			r += to_string(int(temp * 2));
			temp = (temp * 2) - int(temp * 2);
		}
	}

	return r;
}

int main() {
	cout << Dec2BinConverter(14.625);
	return 0;
}