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

int TimCoSo(string S, string x_1, string x_2){
	int r=0;
	
	//tim so chu so lon nhat
	int soChuSo = S.length();
	if(soChuSo < x_1.length()){
		soChuSo = x_1.length();
		if(soChuSo < x_2.length())
			soChuSo = x_2.length();
	}
	
	int phuongTrinh[soChuSo];
	
	
	
	//Theo vieta: x_1 + x_2 = -S;
	
	// \sum_{i=1} (X_1_i + X_2_i -S_i).r^{i-1}
	for(int i=soChuSo-1; i>0;i--){	
		phuongTrinh[i]= -S[i] + x_1[i] + x_2[i];
	}
	
	for(int i=0;i<soChuSo;i++){
		cout<<phuongTrinh[i]<<" + ";
	}
	
}

/*asset
	string demo="12345678";
    for(int i = demo.length()-1; i>=0; i--){
    	cout<<demo[i]<<".r^"<<demo.length()-1-i<<"+";
	}
*/

int main(){
    string S, x_1, x_2;
    Nhap(S,x_1,x_2);
    TimCoSo(S,x_1,x_2);
    
    return 0;
}
