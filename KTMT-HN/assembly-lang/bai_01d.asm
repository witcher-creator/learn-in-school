; s(n) = 1 + (1+2) + (1+2+3) + ....

; b1: dat ax = 0; bx = 0, cx = 1 
; b2: ss bx vs n, if cx > n -> b4; else -> b3
; b3: bx+=cx, ax+=bx, cx++, ->b3
; b4: xuat ra kq 

include "emu8086.inc"
.model small
.stack
.data 
    kq dw ?
    n dw 3
.code
    mov ax, @data
    mov ds, ax
    
    mov ax, 0
    mov bx, 0
    mov cx, 1
    
    while:
        cmp cx, n
        ja endw
        add bx, cx
        add ax, bx
        inc cx
        jmp while:
    endw:
        mov kq, ax
        call print_num_uns
        mov ah, 4ch
        int 21h
        define_print_num_uns
    end