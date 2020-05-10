# KIẾN TRÚC MÁY TÍNH VÀ HỢP NGỮ
## Kiến thức cơ bản
Biết mới làm mấy bài dưới được
#### Chuẩn IEEE 754/85 - chuẩn mã hóa số dấu chấm động
- Cơ số r=2 $\Rightarrow$ hệ nhị phân (Binary);
- Có các dạng cơ bản:
    1. Dạng có độ chính xác đơn (32b): `1b s|8b e|23b m`;
    2. Dạng có độ chính xác kép (64b): `1b s|11b e|52b m`;
    3. Dạng có độ chính xác kép mở rộng (80b): `1b s|15b e|64b m`;
> Trong đó, **$s$** là bit dấu (sign), **$e$** là bit mã lệch (excess) của phần mũ **$E$** (Exponent), **$m$** là bit phần lẻ của phần định trị **$M$**.

- Cách xác định:
    1. bit dấu: 
        - 0 $\Rightarrow$ số dương; 
        - 1 $\Rightarrow$ số âm;
    2. mã lệch $e$ của phần mũ $E$:  **$E = e - b$**
        Trong đó, **$b$** là độ lệch (bias):
        - Dạng 32b: $b=127$, hay $E=e-127$
        - Dạng 64b: $b=1023$, hay $E=e-1023$
        - Dạng 80b: $b=16383$, hay $E=e-16383$
    3. phần lẻ $m$ của phần định trị $M$: **$M=1.m$** (cũng là **$1,m$**)

- Công thức xác định giá trị của số thực $X$ tương ứng là:
$$X=(-1)^s \times 1.m \times 2^{e-b}, \textrm{ với } \times \textrm{ là dấu nhân}$$





## Bài tập 
1. Trong hệ số đếm cơ số $r$, phương trình $x^2-153x+m=0$ có 2 nghiệm $X_1=55$ và $X_2=54$. Xác định $r$ (hệ $dec$) và $m$ (hệ $r$).
#### Giải
Phương trình $x^2-153x+m=0$ có 2 nghiệm $X_1=55$ và $X_2=54$ Trong hệ số đếm cơ số $r$.
Theo Định lí Vi-ét: 
$X_1+X_2=\frac{-b}{a} \ \Rightarrow 54_r+55_r=153_r\textrm{(1)}$
$X_1X_2=\frac{c}{a}\Rightarrow 54_r55_r=m_r\textrm{(2)}$

$\textrm{(1)}\Rightarrow 5+ 5r+4+5r=3+5r+r^2$
$\Rightarrow r^2-5r-6=0$
$\Rightarrow r=6 \textrm{ hoặc } r=-1\textrm{(loại)}$
Vậy đây là hệ số đếm cơ số 6.

$\textrm{(2)}\Rightarrow 55_6.54_6=m_6$
$\Rightarrow (5+5.6)(4+5.6)=m$
$\Rightarrow m=1190$
$\Rightarrow m_6=5302_6$

----------------------
2. Trong hệ số đếm cơ số $r$, phương trình $x^2+Sx+m=0$ có 2 nghiệm $X_1$ và $X_2$. Viết chương trình nhập vào $S, X_1 \textrm{ và } X_2$ (kiểu chuỗi), sau đó tính và xuất ra giá trị $r$ (hệ $dec$) và $m$ (hệ $r$).
----------------------
3. Trong hệ số đếm cơ số $r$, phương trình $x^2-mx+P=0$ có 2 nghiệm $X_1$ và $X_2$. Viết chương trình nhập vào $P, X_1 \textrm{ và } X_2$ (kiểu chuỗi), sau đó tính và xuất ra giá trị $r$ (hệ $dec$) và $m$ (hệ $r$).
----------------------
4. Cho số thực $z$ kiểu $float \ 32 \ bit$ được lưu trữ như sau: `1100 0100 1001 0011 1001 0110 0000 0000`.  Tính $z$ (hệ $dec$)
#### Giải
số thực $z$ 32b $\rightarrow$ độ chính xác đơn $\rightarrow$ `1b s|8b e| 23b m`

- Dấu: $s=1 \rightarrow z$ là số âm.
- Phần mũ: $e=10001001_2 = 137, \textrm{ mà } E=e-127 \rightarrow 137-127=10$. Vậy $E$ = `10`
- Phần định trị: $M = 1.m = 1.00100111001011000000000_2 = 1.15301513671875$

Với: $1.m \times 2^{E} = 1.15301513671875 \times 2^{10} = 1180.6875$

Và: vì $z$ là số âm nên giá trị thực của $z$ là : `-1180.6875`.

----------------------
5. Viết chương trình nhập vào chuỗi $32 \ bit(64 \ bit)$ lưu trữ của số thực $z$, tính và xuất ra giá trị $z$ (hệ $dec$).
----------------------
6. Cho số thực $z=-1400.9375$. Xác định biểu diễn nhị phân của $z$ biết $z$ là kiểu $float \ 32 \ bit$ ($z$ là kiểu $float \ 64 \ bit$).
----------------------
7. Viết chương trình nhập vào số thực $z$, tính và in ra chuỗi $32 \ bit(64 \ bit)$ lưu trữ của số thực $z$.
----



