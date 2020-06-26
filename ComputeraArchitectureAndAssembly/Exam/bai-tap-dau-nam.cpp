#include <iostream>
#include <string>
using namespace std;

long ConvertWord(long tmp, int base){
	//remainder la so du
	long rem=0,i=1,result=0;
	do{
		rem=tmp%base;
		result+=i*rem;
		tmp/=base;
		i*=10;
	}while(tmp>0);
	return result;
}

//x^2+Sx+m=0
void Nhap(string &S, string &x_1, string &x_2){
	cout<<"Nhap tham so S: ";cin>>S;
	cout<<"Nhap tham so x_1: ";cin>>x_1;
	cout<<"Nhap tham so x_2: ";cin>>x_2;
}

// Bài 7
string ConvertDec2Bin(int temp){
	string result="";
	int i = temp;
	do{
		result = to_string(i%2) + result;
		cout<<to_string(i%2)<<endl;
		i/=2;
	}while(i>0);
    return result;
}


//Nhap so thuc z
void NhapSoThuc(float &z){
	cout<<"Nhap so thuc z: ";cin>>z;
}

string ConvertFloat2Bin(float z){
	string result;

	//dau
	if(z>=0)
		result="0";
	else
		result="1";
	//ma lech e
	if(z>1){
		result+=ConvertDec2Bin(int(z));
		cout<<result;
	}
	
}

int main(){
    float z;
    NhapSoThuc(z);
    ConvertFloat2Bin(z);
    return 0;
}
