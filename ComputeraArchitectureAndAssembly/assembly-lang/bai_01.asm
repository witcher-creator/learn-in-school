include "emu8086.inc"
      
; S(n) = 1 + 2 + 3 + ... + n
.model small
.stack
.data
    n dw 100 ; gia tri cuoi
    s dw ?   ; ket qua 
.code
    mov ax, @data
    mov ds, ax
    
    mov cx, 1  ; de lam i trong vong lap 
    mov ax, 0  ; de lam luu ket qua s=s+i
while:
    cmp cx, n  ; so sanh cs vs n
    ja endw    ; neu cs > n thi ket thuc
    
    add ax, cx ; cong cx vao ax 
    inc cx     ; tang cx len 1 don vi
    jmp while  ; lap lai
endw:
    mov s, ax
    call print_num_uns
    
    mov ah, 4ch
    int 21h
    define_print_num_uns
    
end